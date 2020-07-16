/// Based on code from
/// https://stackoverflow.com/a/21297385/12058591

// Convert Degress to Radians
function Deg2Rad(deg) {
    return deg * Math.PI / 180;
}

function pythagorasEquirectangular(lat1, lon1, lat2, lon2) {
    lat1 = Deg2Rad(lat1);
    lat2 = Deg2Rad(lat2);
    lon1 = Deg2Rad(lon1);
    lon2 = Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    var y = (lat2 - lat1);
    var d = Math.sqrt(x * x + y * y) * R;
    return d;
}

function nearestStation(stations, latitude, longitude) {
    var minDif = 99999;
    var closest;

    for (let index = 0; index < stations.length; ++index) {
        var dif = pythagorasEquirectangular(latitude, longitude, stations[index]["lat"], stations[index]["long"]);
        if (dif < minDif) {
            closest = index;
            minDif = dif;
        }
    }
    return stations[closest];
}

export { nearestStation };