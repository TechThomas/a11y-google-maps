## Overview

This project's aim is to make an accessible map with clusters/markers. An overview of [Accessible Maps on the Web](https://equalentry.com/accessible-maps-on-the-web/) details why we desired to build this accessibility sample.

The implementation of this code is hosted at [Finding Accessible Pedestrian Signals in NYC](https://techthomas.github.io/a11y-google-maps/).

Current project is based on Google's [Marker Clustering](https://developers.google.com/maps/documentation/javascript/marker-clustering) example using use the [MarkerClusterer](https://github.com/googlemaps/v3-utility-library/tree/master/markerclusterer) library in combination with the Google Maps JavaScript API.

By default the library has some significant accessibility issues:
 * it's not possible to access markers via keyboard;
 * simplified version of a map info (table) is not available.

 These issues are acknowledged in the [Google Maps - Section 508 Compliance VPAT](https://developers.google.com/maps/premium/accessibility) from Google from 2013.



## Start

You can start with code provided by [Marker Clustering tutorial](https://developers.google.com/maps/documentation/javascript/marker-clustering).

It uses [MarkerClusterer library](https://github.com/googlemaps/v3-utility-library/tree/master/markerclusterer) version 1.0.1 which we are going to modify to add accessibility features.

## Accessible Markers

To make markers accessible we are going to modify marker markup defined in `ClusterIcon.prototype.onAdd`:

```

    ClusterIcon.prototype.onAdd = function() {
      // make icon accessible by keyboard
      this.div_.setAttribute('tabindex', '0');
      this.div_.setAttribute('role', 'button');

      // add aria-label
      if (Number(this.sums_.text) <= 1)
      {
        // aria-label for individual data point
      this.div_.setAttribute('aria-label', address+(neighborhood ? ', '+neighborhood : '')+(date ? '. Deploy date: '+date : ''));
      }
      else
      {
        // aria-label for cluster of data points
        this.div_.setAttribute('aria-label', this.sums_.text+' results available near '+address+(neighborhood ? ', '+neighborhood : ''));
      }
    }
}
```

Add the same new code to `	ClusterIcon.prototype.show`.

## Tooltips for Markers

We are going to use [InfoBubble](https://github.com/googlemaps/js-info-bubble) library to add support for the marker tooltip to display on keyboard focus.

We add `focus` and `blur` event listeners for cluster to show/hide tooltip when focused on single marker:

```
    ClusterIcon.prototype.onAdd = function() {
      ...
        google.maps.event.addDomListener(this.div_, 'focus', function() {
          that.triggerClusterFocus();
        });
        google.maps.event.addDomListener(this.div_, 'blur', function() {
          that.triggerClusterBlur();
        });
      ...
    }

    ClusterIcon.prototype.triggerClusterFocus = function() {
      var markerClusterer = this.cluster_.getMarkerClusterer();
      ...
      markerClusterer.info_bubble_ = new InfoBubble({...});
      ...
    }

    ClusterIcon.prototype.triggerClusterBlur = function() {
      var markerClusterer = this.cluster_.getMarkerClusterer();
      // close bubble
      if (markerClusterer.info_bubble_)
      {
        markerClusterer.info_bubble_.close();
      }
      ...
    }
```

## Alternate "Table View" for Map

Add `<input type="checkbox">` for switching between visual map markers and table with list of markers.

Update table rows each time visible map content is changed:
 * on `center_changed` event
 * on `zoom_changed` event

Add small delay (1 second) to wait until markers are actually loaded on map:

```
    myMap.addListener('center_changed', timeoutTableUpdate);
    myMap.addListener('zoom_changed', timeoutTableUpdate);

    function timeoutTableUpdate()
    {
      // update table view
      setTimeout(updateTableView, 1000);
    }

    function updateTableView()
    {
      // get visible clusters
	  var clusters = markerCluster.clusters_;
      ...
      // update table's HTML
      ...
    }
```

## Search by Address

Add `<input id="search-input" type="search">`.

```
	// init search autocomplete
	var searchInput = document.getElementById('search-input');

	var autocomplete = new google.maps.places.SearchBox(searchInput, {
		types: ['address'],
		// restrict autocomplete to new york area
		bounds: new google.maps.LatLngBounds(
			new google.maps.LatLng({lat: 40.5163745, lng: -74.3085172}), // near perth amboy
			new google.maps.LatLng({lat: 41.0081637, lng: -73.6849845})  // near port chester
		),
		strictBounds: true
	});
```

Add button `<button id="subm_search">Search</button>` to submit selected address.
```
	$('#subm_search').on('click', function(){
	  var places = autocomplete.getPlaces();
	  ...
	  var place = places[0];
	  ...
	});
  ```
