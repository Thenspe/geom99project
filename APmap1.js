var map = L.map('map',{
}).setView([45.000, -78.304], 8,);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    subdomains: 'abcd',
    ext: 'png'
}).addTo(map);

var jsonFeatures = [];
                    
data.forEach(function(point){
    var lat = point.latitud;
    var lon = point.longitud;

    var feature = {type: 'Feature',
        properties: point,
        geometry: {
            type: 'Point',
            coordinates: [lon,lat]
        }
    };
    
    jsonFeatures.push(feature);
});

var geoJson = { type: 'FeatureCollection', features: jsonFeatures };

L.geoJson(geoJson).addTo(map);

