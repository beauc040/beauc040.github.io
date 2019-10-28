var map = null;
var waypoints = [];

/**
 * Creates the map
 */
function initMap() {
    var service = new google.maps.DirectionsService();
    var renderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 44.986656, lng: -93.258133},
    });
    renderer.setMap(map);

    var handler = function() {
        waypoints = [];
        calculateAndDisplayRoute();
    };
    document.getElementById('submit').addEventListener('click', handler);
}

function calculateAndDisplayRoute() {
    var service = new google.maps.DirectionsService();
    var renderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 44.986656, lng: -93.258133},
    });
    renderer.setMap(map);

    service.route(
        {
            origin: {query: document.getElementById('loc1').value},
            destination: {query: document.getElementById('loc2').value},
            travelMode: 'DRIVING',
            waypoints: waypoints,
        },
        function(resp, stat) {
            if (stat === 'OK') {
                renderer.setDirections(resp);
                getLocations(resp);
            }
            else
                window.alert('Mapping failed: ' + stat);
        }
    );
}

function addStop(loc) {
    var service = new google.maps.DirectionsService();
    var renderer = new google.maps.DirectionsRenderer();
    renderer.setMap(map);

    var waypoint = { location: loc, stopover: true};
    waypoints.push(waypoint);
    calculateAndDisplayRoute(service, renderer);
}

function addMarker(loc) {
    let marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
}

/**
 * Gets list of lat,lon pairs, and calls searchLocation for each
 */
async function getLocations(resp) {
    console.log(resp);

    let route = resp.routes[0].overview_path;

    if (route.length <= 0) return [];

    let stepLocs = [];
    let results = document.getElementById('results');
    results.innerHTML = '<tr><th>Name</th><th>Location</th></tr>';
    let rows = new Set();
    let locs = new Set();
    for(let i = 0; i < route.length; i+=10) {
        console.log(i)
        let loc = route[i];
        // Returns list of "name,nicelocation,lat,lng"
        let venuesAt = await searchLocation(loc.lat(), loc.lng());
        console.log(venuesAt);
        for (let v of venuesAt) {
            v = v.split(',');
            // Nice location might cause an extra element if it is coordinates
            if (v.length == 4) {
                rows.add(`<tr><td>${v[0]}</td><td>${v[1]}</td></tr>`);
                locs.add([v[0], v[2], v[3]]);
            } else {
                rows.add(`<tr><td>${v[0]}</td><td>${v[1]}, ${v[2]}</td></tr>`);
                locs.add([v[0], v[3], v[4]]);
            }
        }
    }

    // Write rows to result table
    for(let row of rows) {
        results.innerHTML += row;
    }
    // Add location markers to map
    for(let l of locs) {
        let loc = new google.maps.LatLng(l[1], l[2]);
        let marker = new google.maps.Marker({
            map: map,
            position: loc,
            clickable: true
        });
        marker.info = new google.maps.InfoWindow({
            content: '<b>Name:</b> ' + l[0]
        });
        google.maps.event.addListener(marker, 'mouseover', function() {
            marker.info.open(map, marker);
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
            marker.info.close();
        });
        google.maps.event.addListener(marker, 'click', function() {
            addStop(loc);
        });
    }
}

/**
 * Returns comma-separated string of category codes to apply to Foursquare API
 */
function getCategories() {
    let catBoxes = document.forms['criteria'].elements['categories'];
    let catCodes = []
    for (let i = 0; i < catBoxes.length; i++) {
        if (catBoxes[i].checked)
            catCodes.push(catBoxes[i].value);
    }
    return catCodes.join(',');
}

/**
 * Queries Foursquare API for categories near single location
 */
async function searchLocation(lat, lon) {
    let today = new Date();
    let d = String(today.getDate()).padStart(2, '0');
    let m = String(today.getMonth() + 1).padStart(2, '0');
    let y = String(today.getFullYear());
    let todayString = y + m + d;
    let client_id = 'TA4WC5VJUVACXV2Z2EYBLFTMS4A1C45FKAPWFH3WZDFEL0UC';
    let client_secret = 'PQINDNPSVFNL410EMWUT1VX03OC1WPDHIELRU2J41CL1LXNB';
    let url = `https://api.foursquare.com/v2/venues/search?client_id=${client_id}&client_secret=${client_secret}&v=${todayString}`;
    let categories = getCategories();
    let criteria = `&ll=${lat},${lon}&categoryId=${categories}&radius=500`;
    url += criteria;

    let opts = {
        method: 'GET',
    };
    let resp = await fetch(url, opts);
    let nearbyJson = await resp.json();

    let results = document.getElementById('results');
    let venues = nearbyJson.response.venues;
    returnlst = [];
    for (let i = 0; i < venues.length; i++) {
        let v = venues[i];
        let loc = v.location;
        if (loc.address != null) loc = loc.address;
        else loc = loc.lat.toFixed(5) + ', ' + loc.lng.toFixed(5);
        returnlst.push(`${v.name},${loc},${v.location.lat},${v.location.lng}`)
    }
    return returnlst;
}

/**
 * Called by Search button
 */
function search() {
    let locs = getLocations();
    let nearLocs = [];
    for (let i = 0; i < locs.length; i++) {
        
    }
}
