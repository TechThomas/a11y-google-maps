var apiKey = 'AIzaSyDL1Fyyvsv8UHSTkHAJW7072uYrsh0YWp8';

// ['Lat', 'Long', 'Name'],
var myMarkers = [
	[40.6405745, -73.9822961, "14th Avenue and 36th Street (New York Industries for the Blind) - 8/18/13"],
	[40.6571019, -74.0045072, "3rd Avenue and 33rd Street - 10/23/15"],
	[40.6543463, -74.0044835, "4th Avenue and 36th Street - 3/29/16"],
	[40.6526004, -74.0061006, "4th Avenue and 39th Street - 10/15/15"],
	[40.6497863, -74.0090187, "4th Avenue and 44th Street - 10/21/15"],
	[40.6493132, -74.0097314, "4th Avenue and 45th Street - 10/26/15"],
	[40.6436383, -74.0154333, "4th Avenue and 55th Street - 10/22/15"],
	[40.6414785, -74.0178931, "4th Avenue and 59th Street - 1/6/16"],
	[40.6408947, -74.0184973, "4th Avenue and 60th Street - 4/17/17"],
	[40.6703804, -73.9887899, "4th Avenue and 9th Street - 10/26/15"],
	[40.677442, -73.9831139, "4th Avenue and Union Street - 10/18/16"],
	[40.619749, -74.0277195, "5th Avenue and 89th Street - 12/12/12"],
	[40.605491, -73.9997165, "86th Street and Bay 22nd Street - 10/27/15"],
	[40.6221482, -74.0275704, "86th Street between 4th Avenue and 5th Avenue - 2/22/16"],
	[40.6921742, -73.9891192, "Adams Street/Boerum Place and Fulton Street - 4/25/12"],
	[40.6910598, -73.9905944, "Adams Street/Boerum Place and Livingston Street - 5/9/12"],
	[40.6890694, -73.9904754, "Atlantic Avenue and Boerum Place - 4/25/12"],
	[40.68693, -73.984829, "Atlantic Avenue and Bond Street - 11/26/13"],
	[40.6877791, -73.9869994, "Atlantic Avenue and Hoyt Street - 5/23/13"],
	[40.6860926, -73.9826534, "Atlantic Avenue and Nevins Street - 9/19/12"],
	[40.6886246, -73.9891815, "Atlantic Avenue and Smith Street - 8/15/13"],
	[40.6264645, -73.9497371, "Avenue J and East 27th Street - 8/16/17"],
	[40.591265, -73.944012, "Avenue Y and East 26th Street - 8/8/17"],
	[40.5869232, -73.9638691, "Avenue Z and East 6th Street - 12/12/16"],
	[40.6894537, -73.955116, "Bedford Avenue and Lafayette Avenue - 12/2/16"],
	[40.6903327, -73.9896449, "Boerum Place and Schermerhorn Street - 8/28/12"],
	[40.6897043, -73.9900701, "Boerum Place and State Street - 11/26/13"],
	[40.6937566, -73.9904735, "Cadman Plaza West and Montague Street - 4/11/13"],
	[40.6405745, -73.9822961, "Church Avenue and Dahill Avenue (New York Industries for the Blind) - 8/16/13"],
	[40.6896809, -73.9923561, "Court Street and Atlantic Avenue - 8/26/13"],
	[40.6916055, -73.9914441, "Court Street and Livingston Street - 6/16/12"],
	[40.6909865, -73.9917491, "Court Street and Schermerhorn Street - 8/27/12"],
	[40.690334, -73.9920503, "Court Street and State Street - 3/30/14"],
	[40.6923048, -73.9913687, "Court Street with Remsen and Joralemon Street - 5/25/13"],
	[40.5961979, -73.9973954, "Cropsey Avenue and Bay 32nd Street - 1/4/16"],
	[40.5858827, -73.987979, "Cropsey Avenue and Bay 49th Street - 10/28/15"],
	[40.6899121, -73.98043, "DeKalb Avenue and Hudson Avenue - 5/11/15"],
	[40.6897102, -73.9751051, "Dekalb Avenue and S Portland Avenue - 11/21/16"],
	[40.6359851, -73.9741081, "Ditmas Avenue and East 5th Street - 12/12/12"],
	[40.674501, -73.9062744, "East New York Avenue at Dean Street and Sackman Street - 12/24/15"],
	[40.6899524, -73.981394, "Flatbush Avenue and Dekalb Avenue - 10/16/15"],
	[40.6866889, -73.9793761, "Flatbush Avenue and Lafayette Avenue - 4/10/17"],
	[40.6920759, -73.9826145, "Flatbush Avenue and Willoughby Street - 10/15/15"],
	[40.6886769, -73.9808773, "Flatbush Avenue at Fulton Street and Nevins Street - 6/25/12"],
	[40.6267888, -73.9412815, "Flatbush Avenue with Brooklyn Avenue and Avenue J - 12/23/15"],
	[40.632647, -73.948247, "Flatbush Avenue with Nostrand Avenue and Hillel Place - 11/17/16"],
	[40.6484002, -73.8932293, "Flatlands Avenue and East 107th Street - 7/17/14"],
	[40.703171, -73.932698, "Flushing Avenue and Bogart Street - 12/6/16"],
	[40.6988591, -73.9579775, "Flushing Avenue and Skillman Street - 8/24/13"],
	[40.6992936, -73.95429, "Flushing Avenue and Warsoff Place - 12/13/16"],
	[40.6892468, -73.9569713, "Franklin Avenue and Lafayette Avenue - 11/18/16"],
	[40.6836457, -73.8721911, "Fulton Street and Crescent Street - 12/9/16"],
	[40.68737, -73.974746, "Fulton Street with Lafayette Avenue and Fort Greene Place - 1/18/17"],
	[40.710901, -73.943788, "Graham Avenue and Maujer Street (500' South) - 1/15/16"],
	[40.6852004, -73.9770268, "Hanson Place and St. Felix Street - 5/13/15"],
	[40.6931259, -73.9866365, "Jay Street and Metrotech Roadway (North Leg) - 4/26/12"],
	[40.6922345, -73.9872929, "Jay Street and Willoughby Street - 2/13/13"],
	[40.6914618, -73.9873483, "Jay Street/Smith Street and Fulton Street - 9/13/13"],
	[40.6548499, -73.9384659, "Lenox Road and East 42nd Street - 9/20/17"],
	[40.6887901, -73.9835656, "Livingston Street and Bond Street - 5/16/13"],
	[40.689631, -73.985739, "Livingston Street and Hoyt Street - 5/18/13"],
	[40.6879279, -73.9813722, "Livingston Street at Nevins Street - 6/27/14"],
	[40.63555, -73.9779434, "McDonald Avenue and Ditmas Avenue - 7/10/12"],
	[40.6867156, -73.9822242, "Nevins Street and State Street - 1/18/17"],
	[40.6260836, -73.9970284, "New Utrecht Avenue and 62nd Street - 7/7/14"],
	[40.6497828, -73.9494667, "Nostrand Avenue and Erasmus Street - 2/8/14"],
	[40.6339987, -73.9477725, "Nostrand Avenue and Glenwood Road - 11/3/16"],
	[40.6756654, -73.9276923, "Rochester Avenue and Dean Street - 11/17/16"],
	[40.6552922, -73.9128043, "Rockaway Pkwy at Brookdale Hospital entrance (w of Linden Blvd) - 10/21/16"],
	[40.6613737, -73.9275947, "Rutland Road with East 52nd Street and Remsen Avenue - 1/17/17"],
	[40.6873281, -73.9818188, "Schermerhorn Street and Nevins Street - 12/4/13"],
	[40.6904832, -73.9878747, "Smith Street and Livingston Street - 7/13/12"],
	[40.5860208, -73.9510712, "Voorhies Avenue and East 18th Street - 4/4/17"],
	[40.7678074, -73.9894966, "10th Avenue and West 55th Street - 9/6/17"],
	[40.7431063, -73.9932809, "12th Avenue and West 23rd Street - 5/31/17"],
	[40.7332045, -73.9812046, "1st Avenue and East 17th Street - 5/3/17"],
	[40.8031669, -73.93904, "1st Avenue and East 122nd Street - 11/25/16"],
	[40.7343753, -73.9803527, "1st Avenue and East 19th Street - 6/29/17"],
	[40.7362253, -73.9790084, "1st Avenue and East 22nd Street - 5/24/17"],
	[40.7815776, -73.9496169, "2nd Avenue and East 98th Street - 11/23/16"],
	[40.7339465, -73.9841048, "2nd Avenue and Stuyvesant Square (East 16th Street) - 11/9/16"],
	[40.7697512, -73.9605925, "3rd Avenue and East 72nd Street - 10/20/15"],
	[40.8064257, -73.9422677, "5th Avenue and 125th Street - 11/5/16"],
	[40.7641095, -73.9736364, "5th Avenue and 58th Street and Grand Army Plaza - 7/20/14"],
	[40.7415481, -73.9895852, "5th Avenue and East 23rd Street - 4/13/12"],
	[40.8069536, -73.9453494, "5th Avenue with East 124th and West 124th Streets - 8/19/16"],
	[40.7441027, -73.9956435, "7th Avenue and West 23rd Street - 9/16/11"],
	[40.7497096, -73.991556, "7th Avenue and West 32nd Street - 7/5/12"],
	[40.7592207, -73.9846144, "7th Avenue and West 47th Street - 2/24/17"], // original coords 40.7592009, -73.9846144. updated to match better google maps panorama result
	[40.8133468, -73.9488576, "8th Avenue and West 130th Street - 11/18/16"],
	[40.765418, -73.983822, "8th Avenue and West 55th Street - 3/1/13"],
	[40.7739746, -73.9310472, "9th Avenue and West 27th Street - 1/26/17"],
	[40.8049062, -73.962493, "Amsterdam Avenue and West 113th Street - 10/31/15"],
	[40.8055136, -73.9620091, "Amsterdam Avenue and West 114th Street - 8/12/16"],
	[40.7254842, -73.9747372, "Avenue D and East 11th Street - 11/17/16"],
	[40.7206849, -73.9782389, "Avenue D and East 3rd Street - 10/6/16"],
	[40.7436874, -73.9942734, "Avenue of Americas and 23rd Street (Selis Manor) - 5/25/04"],
	[40.7048298, -74.0156608, "Battery Place and Washington Street - 5/11/15"],
	[40.711237, -74.0064842, "Beekman Street and Nassau Street - 8/27/16"],
	[40.7104184, -74.005605, "Beekman Street and Williams Street - 12/18/16"],
	[40.7627617, -73.9826663, "Broadway & 7th Avenue with West 43rd Street - 2/24/17"],
	[40.7627617, -73.9826663, "Broadway & 7th Avenue with West 44th Street - 2/24/17"],
	[40.7627617, -73.9826663, "Broadway & 7th Avenue with West 45th Street - 2/24/17"],
	[40.7627617, -73.9826663, "Broadway & 7th Avenue with West 46th Street - 2/24/17"],
	[40.7045982, -74.0142176, "Broadway and Bowling Green - 9/13/13"],
	[40.7726566, -73.9816386, "Broadway and Columbus Avenue with West 65th Street - 9/24/10"],
	[40.7947162, -73.9719197, "Broadway and East 96th Street - 3/1/17"],
	[40.8462019, -73.9384558, "Broadway and West 175th Street - 10/31/16"],
	[40.7413576, -73.9891325, "Broadway and West 23rd Street - 4/13/12"],
	[40.7721782, -73.9820748, "Broadway and West 64th Street - 3/8/17"],
	[40.7739375, -73.9823389, "Broadway and West 66th Street - 8/10/16"],
	[40.8657445, -73.9270717, "Broadway with Dyckman Street and Riverside Drive - 10/31/16"],
	[40.7828647, -73.9653551, "Central Park West and Pedestrian Crossing (West 79th Street) - 1/26/17"],
	[40.7060855, -73.9968643, "Centre Street and Brooklyn Bridge Exit - 7/18/17"],
	[40.6401106, -73.7059822, "Centre Street and Franklin Walk - 1/26/17"],
	[40.7112271, -73.9898119, "Cherry Street and Rutgers Street - 10/26/16"],
	[40.7155565, -73.987272, "Clinton Street between East Broadway and Grand Street - 6/29/17"],
	[40.7715807, -73.9811807, "Columbus Avenue and West 64th Street - 3/8/17"],
	[40.7736069, -73.9815795, "Columbus Avenue and West 66th Street - 8/4/16"],
	[40.7835309, -73.9776209, "Columbus Avenue and West 98th Street Pedestrian Crossing - 9/11/17"],
	[40.7452001, -73.9709197, "East 37th Street and FDR Drive - 7/18/17"],
	[40.713512, -73.997627, "East Broadway between Catherine Street and Market Street - 2/23/16"],
	[40.7742633, -73.9452718, "East End Avenue and East 85th Street - 7/16/14"],
	[40.8364669, -73.9370356, "Edgecombe Avenue and West 164th Street - 3/1/14"],
	[40.7511669, -73.9846965, "Fifth Avenue and West 99th Street (pedestrian crossing) - 1/25/17"],
	[40.814713, -73.948269, "Frederick Douglass Boulevard (8th Avenue) and West 125th Street - 5/22/17"],
	[40.814713, -73.948269, "Frederick Douglass Boulevard and West 156th Street - 5/22/17"],
	[40.7096583, -74.0048187, "Gold Street and Beekman Street - 9/20/13"],
	[40.7090773, -74.0054789, "Gold Street and Fulton Street - 9/30/13"],
	[40.710159, -74.0042591, "Gold Street and Spruce Street - 9/20/13"],
	[40.7114761, -73.9455959, "Grand Street and Ridge Street - 2/23/16"],
	[40.7136509, -74.0116672, "Greenwich Street and Barclay Street - 10/29/15"],
	[40.7408012, -73.9838175, "Lexington Avenue and East 25th Street - 3/1/17"],
	[40.7577491, -73.9714656, "Lexington Avenue and East 52nd Street - 6/26/12"],
	[40.7574662, -73.9762421, "Madison Avenue and East 133rd Street - 5/16/17"],
	[40.7574662, -73.9762421, "Madison Avenue and East 134th Street - 5/15/17"],
	[40.7135614, -73.9808661, "Madison Street and 300' west of Jackson Street - 9/12/17"],
	[40.7127787, -73.9884835, "Madison Street and Jefferson Street - 6/20/14"],
	[40.7057949, -74.0055137, "Maiden Lane at Front Street - 6/27/14"],
	[40.8203707, -73.9364897, "Malcolm X Boulevard (Lenox Avenue) and West 145th Street - 2/23/17"],
	[40.7152785, -74.0135399, "Murray Street and 270' West of West Street - 1/27/17"],
	[40.7631763, -73.9698578, "Park Avenue and East 59th Street (Lighthouse) - 10/12/04"],
	[40.7948352, -73.9762554, "Riverside Drive and West 94th Street - 9/13/17"],
	[40.8264806, -73.9560005, "Riverside Drive and West 138th Street - 5/11/17"],
	[40.830998, -73.9494597, "Riverside Drive and West 151st Street - 5/11/17"],
	[40.839247, -73.9455567, "Riverside Drive and West 163rd Street - 5/12/17"],
	[40.7125391, -73.9989535, "St James Place and James Street - 11/20/13"],
	[40.8107804, -73.9525943, "St Nicholas Avenue and West 125th Street - 10/21/16"],
	[40.8258917, -73.9429945, "St Nicholas Avenue and West 156th Street - 5/12/17"],
	[40.7040377, -74.0115969, "Stone Street and Broad Street - 4/6/16"],
	[40.704042, -74.0131992, "Stone Street and Whitehall Street - 6/7/12"],
	[40.716757, -74.0142512, "Vesey Street between North End Avenue and West Street - 9/7/17"],
	[40.7302955, -73.9980832, "Washington Square South and Thompson Street - 8/9/15"],
	[40.7074355, -74.0040526, "Water Street and Fulton Street - 10/6/16"],
	[40.749682, -73.9867818, "West 34th Street between 7th and 8th Avenues - 3/12/16"],
	[40.7571349, -73.9891482, "West 42nd Street between 7th Avenue and 8th Avenue - 5/2/16"],
	[40.7579169, -73.9922148, "West 42nd Street between 8th Avenue and 9th Avenue - 5/9/16"],
	[40.7625104, -73.9803027, "West 53rd Street between 5th and 6th Avenues - 10/3/16"],
	[40.764325, -73.977931, "West 57th Street between 5th Avenue and 6th Avenue - 3/1/16"],
	[40.764325, -73.977931, "West 57th Street between 6th Avenue and 7th Avenue (Mid-block) - 6/23/13"],
	[40.778227, -73.9852119, "West End Avenue and Pedestrian Crossing (West 69th Street) - 9/11/17"],
	[40.7605339, -73.9583462, "York Avenue and East 62nd Street - 7/22/12"],
	[40.68985, -73.796647, "110th Avenue and Sutphin Boulevard - 8/15/16"],
	[40.6729348, -73.7685162, "137th Avenue and 172nd Street - 4/7/17"],
	[40.7855434, -73.8136163, "150th Street and 15th Drive - 7/14/17"],
	[40.7757696, -73.9045569, "27th Avenue and 8th Street (Goodwill Industries) - 8/8/06"],
	[40.7590612, -73.9350526, "36th Avenue and 23rd Street - 11/21/13"],
	[40.7024962, -73.7999345, "Archer Avenue and Parsons Boulevard - 2/16/17"],
	[40.7214983, -73.8447666, "Austin Street with 71st Avenue and Continental Avenue - 4/3/17"],
	[40.7846784, -73.809107, "Clintonville Street and Locke Avenue - 8/1/14"],
	[40.7423527, -73.869913, "Corona Avenue and 94th Street - 5/20/16"],
	[40.7216454, -73.8864378, "Eliot Avenue and 72nd Street - 12/7/16"],
	[40.7641646, -73.7881636, "Francis Lewis Boulevard and 35th Avenue - 7/16/14"],
	[40.712553, -73.7329482, "Hempstead Avenue and 221st Street - 10/7/16"],
	[40.719321, -73.7636304, "Hillside Avenue and 199th Street - 2/6/17"],
	[40.7365544, -73.7119257, "Hillside Avenue and 256th Street - 8/2/11"],
	[40.7133482, -73.7640814, "Jamaica Avenue and 196th Street - 10/30/15"],
	[40.7185425, -73.7352931, "Jamaica Avenue and Springfield Boulevard - 10/11/16"],
	[40.7531649, -73.8219623, "Kissena Boulevard and Elder Avenue - 11/29/16"],
	[40.7571371, -73.8270877, "Kissena Boulevard and Sanford Avenue - 11/28/16"],
	[40.7324937, -73.7115224, "Little Neck Parkway and 86th Avenue - 8/2/11"],
	[40.7575223, -73.8291276, "Main Street and 41st Road - 12/5/16"],
	[40.7631223, -73.8320758, "Main Street and Northern Boulevard - 11/23/16"],
	[40.7596122, -73.7313838, "Marathon Parkway and 57th Avenue - 5/2/12"],
	[40.675549, -73.7386195, "Merrick Boulevard and 231st Street - 9/26/14"],
	[40.70311, -73.866538, "Myrtle Avenue and 82nd Street - 10/30/15"],
	[40.7519552, -73.9313002, "Northern Boulevard and 33rd Street - 2/17/17"],
	[40.7595963, -73.772009, "Northern Boulevard at 211th Street - 3/20/14"],
	[40.7418035, -73.9075278, "Queens Boulevard and 58th Street - 1/20/14"],
	[40.7137004, -73.8281571, "Queens Boulevard and Queens Borough Hall - 10/31/15"],
	[40.7010538, -73.9047144, "Seneca Avenue and Cornelia Street - 7/25/14"],
	[40.7005878, -73.8077342, "Sutphin Boulevard and Archer Avenue - 3/13/17"],
	[40.7317172, -73.7701673, "Union Turnpike and Francis Lewis Boulevard - 3/7/17"],
	[40.7358168, -73.7465888, "Union Turnpike and Springfield Boulevard - 10/27/16"],
	[40.757799, -73.945814, "Vernon Boulevard and 40th Avenue - 11/30/16"],
	[40.700542, -73.8546456, "Woodhaven Boulevard and Forest Park Drive - 3/30/17"],
	[40.5972873, -74.1251624, "Brielle Avenue and Gansevoort Boulevard (Wagner High School) - 5/25/06"],
	[40.6347112, -74.1065371, "Castleton Avenue and Bard Avenue - 7/21/07"],
	[40.6338099, -74.0980874, "Castleton Avenue and Brighton Avenue (S.I. Center for Independent Living) - 1/19/06"],
	[40.6261493, -74.1197263, "Clove Road and Clove Lake Place - 10/24/16"],
	[40.6296879, -74.1112291, "Forest Avenue and Bement Avenue - 7/30/07"],
	[40.6177065, -74.0940482, "Howard Avenue and Hillside Avenue - 9/24/14"],
	[40.6402309, -74.1366572, "Richmond Terrace and Sharpe Avenue - 5/18/15"],
	[40.6120097, -74.0708559, "Tompkins Avenue and Hill Street - 10/19/15"],
	[40.626546, -74.0915809, "Victory Boulevard and Eddy Street - 9/4/14"],
	[40.859675, -73.859799, "Astor Avenue and Colden Avenue - 10/7/15"],
	[40.8805017, -73.900672, "Bailey Avenue and West 234th Street and Bailey Place - 10/14/15"],
	[40.864345, -73.8275242, "Bartow Avenue and Co-Op City Boulevard and Bay Plaza Boulevard - 10/8/15"],
	[40.8979346, -73.8859514, "Broadway and Van Cortlandt Park (580' South of 251st Street) - 1/1/17"],
	[40.8777282, -73.859282, "Bronxwood Avenue and East 213th Street - 9/15/17"],
	[40.8817547, -73.8570644, "Bronxwood Avenue and East 219th Street - 2/3/10"],
	[40.882452, -73.8566822, "Bronxwood Avenue and East 220th Street - 2/3/10"],
	[40.871203, -73.8545852, "Burke Avenue and Yates Avenue - 1/18/17"],
	[40.8794261, -73.8254562, "Co-Op City Boulevard and Carver Loop East - 10/9/15"],
	[40.8790045, -73.8267746, "Co-Op City Boulevard and Rombouts Avenue and Carver Loop West - 10/13/15"],
	[40.821004, -73.8978791, "East 163rd Street and Rogers Place - 3/2/14"],
	[40.8942663, -73.8602811, "East 233rd Street and Carpenter Avenue - 3/28/17"],
	[40.8389206, -73.9216979, "Edward L Grant Hwy and West 169 Street - 8/18/16"],
	[40.8748759, -73.8952231, "Goulden Avenue and Lehman College High School - 6/26/13"],
	[40.8624565, -73.8969344, "Grand Concourse and Fordham Road - 7/19/12"],
	[40.8789799, -73.9167399, "Kappock Street and Netherland Avenue - 5/2/07"],
	[40.863071, -73.859691, "Mace Avenue and Colden Avenue - 6/13/14"],
	[40.8521451, -73.8443938, "Morris Park Avenue and Albert Einstein College of Medicine (mid-block) - 11/1/11"],
	[40.8588602, -73.8554592, "Pelham Parkway N/S Service Roads and Williams Bridge Road - 10/8/15"],
	[40.8581522, -73.8560468, "Pelham Parkway North and Laconia Avenue - 8/1/14"],
	[40.8294049, -73.9250024, "River Avenue and East 162nd Street - 3/8/17"],
	[40.8493947, -73.9008454, "Valentine Avenue and East 178th Street - 10/28/16"],
	[40.8483761, -73.9002002, "Webster Avenue between East Tremont and East 178th Street - 9/5/13"],
	[40.8544969, -73.867704, "White Plains Road and Lydig Avenue - 7/25/14"]
];

var myLatLng = {lat: 40.6405745, lng: -73.9822961};


// Create the map
var myMapEl = document.getElementById('mymap');

var myMap = new google.maps.Map(myMapEl, {
		center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
		zoom: 12,
		disableDefaultUI: true,
		keyboardShortcuts: true,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE
		}
	}
);

// search variable to get zoom correctly
var zoomIterations = 0;
var zoomIterationsInterval = null;
var zoomedOut = false;

var mapInitFinished = false;

// flag to focus on first focusable icon in map viewport (after zoom)
var isFocusOnIdle = false;

// add map label
myMap.addListener('idle', function() {

	// A11y Fix
	var iframe = document.getElementsByTagName("IFRAME")[0];
	iframe.setAttribute("aria-hidden","true");
//	iframe.setAttribute("title","Google Map");

	// focus on first focusable icon (after zoom)
	if (isFocusOnIdle)
	{
		setTimeout(function(){
			myMapEl.querySelectorAll('[tabindex="0"]')[1].focus();
		}, 150);
		isFocusOnIdle = false;
	}

	if (mapInitFinished)
	{
		return;
	}

	myMapEl.querySelectorAll('[tabindex="0"]')[0].setAttribute('aria-label', 'Google Map');

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

	function autocompleteUpdateAriaStatus()
	{
		var container = $('.pac-container').last();
		var numResults = container.find('.pac-item').length;

		var message = '';
		if (numResults == 1)
		{
			message = '1 result is available.';
		}
		else if (numResults == 0)
		{
			message = numResults + ' results are available.';
		}
		else if (container.is(":visible"))
		{
			message = 'No results are available.';
		}
		else
		{
			message = '';
		}

		if (numResults > 0)
		{
			message += ' Use up and down arrow keys to navigate.';
		}

		$('#autocomplete-status').text(message);
	}

	$(searchInput).on('input', function(){

		markerCluster.sort_point = undefined;

		markerCluster.resetViewport();
		markerCluster.redraw();

		autocompleteUpdateAriaStatus();
	});
	setTimeout(function(){
		$('.pac-container').on('DOMSubtreeModified', autocompleteUpdateAriaStatus);
	}, 1000);


	autocomplete.addListener('places_changed', function(){
		var focused = $(':focus');
		if (!focused || !focused.is('#search-input') && !focused.is('#subm_search'))
		{
			$('#search-input').focus();
		}
	});

	// autocomplete.addListener('places_changed', function(){
	$('#subm_search').on('click', function(){
		var places = autocomplete.getPlaces();

		if (!places || places.length == 0)
		{
			markerCluster.sort_point = undefined;

			return;
		}

		var place = places[0];

		if (!place.geometry)
		{
			alert('Cannot get coordinates: places\'s geometry is empty');
			return;
		}

		var searchPoint = place.geometry.location;

		markerCluster.sort_point = searchPoint;

		// set flag
		// markerCluster.is_search_active = true;

		myMap.panTo(searchPoint);
		myMap.setZoom(16);

		// start calculate correct zoom level for the search
		zoomIterations = 0;
		clearInterval(zoomIterationsInterval);
		zoomedOut = false;
		zoomIterationsInterval = setInterval(function(){
			// stop after number of tries
			if (zoomIterations > 20)
			{
				clearInterval(zoomIterationsInterval);
				return;
			}
			zoomIterations++;
			console.log(markerCluster.is_paint_finished);
			// zoom out if not enough markers visible
			var countVisible = getClusterMarkersCount(markerCluster);
			if (countVisible == 0 && !markerCluster.is_paint_finished)
			{
				// do nothing, clusters not ready yet
			}
			else if (countVisible < 5)
			{
				zoomedOut = true;
				myMap.setZoom(myMap.getZoom() - 1);
			}
			// zoom in if too much markers visible
			else if (countVisible > 20)
			{
				// to prevent "jumping" in/out zoom
				if (!zoomedOut)
				{
					myMap.setZoom(myMap.getZoom() + 1);
				}
			}

		}, 50);
	});

	// add event listener for input
	$(searchInput).on('keyup', function(e){
		// enter pressed
		if (e.which == 13)
		{
			$('#subm_search').click();
		}
	});

	mapInitFinished = true;
});

function getClusterMarkersCount(markerCluster)
{
	if (!markerCluster || !markerCluster.clusters_ || !markerCluster.clusters_.length)
	{
		return 0;
	}

	var count = 0;

	for (var i = 0; i < markerCluster.clusters_.length; i++)
	{
		count += markerCluster.clusters_[i].markers_.length;
	}

	return count;
}

// move focus to first available cluster after clicked on cluster
myMap.addListener('clusterclick', function(){
	// wait for idle, then focus on first focusable icon
	isFocusOnIdle = true;
});
var myBounds = new google.maps.LatLngBounds();
// check space/enter pressed on cluster icon
myMap.getDiv().addEventListener('keyup', function(e){
	if (e.which == 32 || e.which == 13)
	{
		if ($(e.target).hasClass('ee_cluster_icon'))
		{
			e.preventDefault();
			e.stopPropagation();
			e.target.click();
		}
	}
});


var gMarkers = myMarkers.map(function(el, i){
	var marker = new google.maps.Marker({
		position: {lat: el[0], lng: el[1]},
		map: myMap,
		title: el[2]
	});

	myBounds.extend(marker.getPosition());

	marker.id = i;

	var infoMatches = el[2].match(/(.*) - (.*?)$/);

	if (infoMatches)
	{
		marker.address = infoMatches[1];
		marker.date = infoMatches[2];

		// get info about neighbourhood
		$.get('https://maps.googleapis.com/maps/api/geocode/json?address='+marker.address+'&key='+apiKey, function(data){
			this.geocode_data = data;
		}.bind(marker));
	}

	// marker.infoWindow = new google.maps.InfoWindow({
	// 	content: '<div tabindex="0">' + el[2] + '</div>'
	// });

	return marker;
});

myMap.fitBounds(myBounds);

var markerCluster = new MarkerClusterer(myMap, gMarkers, {
	imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
	minimumClusterSize: 1
});

myMap.addListener('center_changed', timeoutTableUpdate);
myMap.addListener('zoom_changed', timeoutTableUpdate);

var panorama = new google.maps.StreetViewPanorama(
	document.getElementById('pano'), {
		// position: myMap.getCenter(),
		pov: {
			heading: 256,
			pitch: 0
		},
		addressControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		},
		clickToGo: false,
		linksControl: false,
		panControl: false,
		enableCloseButton: false
	}
);
updatePanorama(myMap.getCenter());

function updatePanorama(pos)
{
	if (!pos)
	{
		console.error('Cannot update panorama to undefined position');
		return;
	}
	if (typeof panorama === 'undefined' || !panorama)
	{
		console.error('Cannot update undefined panorama');
		return;
	}

	var sv = new google.maps.StreetViewService();
	sv.getPanorama({location: pos, radius: 50, source: google.maps.StreetViewSource.OUTDOOR}, function(data, status){
		if (status === 'OK')
		{
			panorama.setPano(data.location.pano);
			console.log('panorama updated');
		}
		else
		{
			console.error('Street View data not found for this location.');
		}
	});
}




// hiden by default
panorama.setVisible(false);

function updateTableView()
{
	var tableView = $('#table_view');
	var tbody = tableView.find('tbody');

	var distanceCol = $('#table_view_distance_col');

	var html = '';
	// get visible clusters
	var clusters = markerCluster.clusters_;

	var sortPoint = markerCluster.sort_point;

	// is there's sort point, show distance to it
	if (sortPoint)
	{
		distanceCol.removeAttr('hidden');
	}
	else
	{
		distanceCol.attr('hidden', true);
	}

	var n = 1;

	for (var i = 0; i < clusters.length; i++)
	{
		for (var j = 0; j < clusters[i].markers_.length; j++)
		{
			var marker = clusters[i].markers_[j];
			html += '<tr>' +
				// '<td>'+n+'</td>' +
				'<td>'+marker.address+'</td>' +
				'<td '+(sortPoint ? '' : 'hidden')+'>'+(sortPoint ? formatDistance(marker.distance_to_sort_point) : '')+'</td>' +
				'<td>'+marker.date+'</td>' +
				'</tr>';

			n++;
		}
	}

	tbody.html(html);
}

function timeoutTableUpdate()
{
	// update table view
	setTimeout(updateTableView, 1000);

	// clear search field as search results now don't displayed for that query, but for manual selected region now
	var sortPoint = markerCluster.sort_point;
	if (!sortPoint)
	{
		$('#search-input').val('');
	}
}

function toggleStreetView()
{
	var panoEl = document.getElementById('pano');
	var mapEl = document.getElementById('mymap');

	var toggle = panorama.getVisible();
	if (toggle == false) {
		panoEl.hidden = false;
		mapEl.classList.add('with_pano');
		panorama.setVisible(true);
	} else {
		panoEl.hidden = true;
		mapEl.classList.remove('with_pano');
		panorama.setVisible(false);
	}
}

$('#toggle_table_view').on('click', function(){
	var tableView = $('#table_view');
	var myMapWrap = $('#my_map_wrap');
	var search = $('#search');
	var streetViewSwitcher = $('#floating-panel');
	if (this.checked)
	{
		myMapWrap.addClass('hide');
		tableView.removeAttr('hidden');
		search.addClass('inline');
		updateTableView();

		streetViewSwitcher.attr('hidden', 'hidden');
	}
	else
	{
		myMapWrap.removeClass('hide');
		tableView.attr('hidden', 'hidden');
		search.removeClass('inline');

		streetViewSwitcher.removeAttr('hidden');
	}
});

function formatDistance(kmVal)
{
	var milesVal = getMilesFromKm(kmVal).toFixed(2);
	return milesVal;
}

function getMilesFromKm(i) {
	return i*0.621371192;
}
function getKmFromMiles(i) {
	return i*1.609344;
}