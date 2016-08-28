function init() {
  
  //Aineistot
  var muistot = "https://pilvinummi.github.io/nikkila/muistojennikkila.json"
  

  var southWest = L.latLng(60.352727, 25.218447);
  var northEast = L.latLng(60.390734, 25.280363);
  var bounds = L.latLngBounds(southWest, northEast);
  
  var map = L.map('map', {
    //maxBounds: bounds,
    maxZoom: 18,
    minZoom: 11
  });
  
  //Fit to bounds
//  map.fitBounds(bounds);

  //Set view
  var center = L.latLng(60.352727, 25.218447);
  map.setView( center , 13 );
  	
  //Scale
  L.control.scale({
  	position: 'bottomleft',
  	updateWhenIdle: true,
  	maxWidth: 200
  }).addTo(map);
  
  //MapBox-light taustakartta
  basemap = L.tileLayer('https://api.mapbox.com/styles/v1/pilkku/cisdj0khh002z2xpe214xf6sy/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGlsa2t1IiwiYSI6ImNpc2RpeHF6dzAwMTUydW5xbWl3bTk3eWQifQ.EltRtFPTdAbejh3DhF2irg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.light'
  }).addTo(map);

  //Muistojen Nikkilä kohteet kartalle
/*
  var geojsonFeature = {
  	"type": "Feature", 
  	"properties": { 
  		"nimi": "Rosenholmin talo", 
  		"instagram": "rosenholm.htm" 
  	}, 
  	"geometry": { 
  		"type": "Point", 
  		"coordinates": [25.270468, 60.379325]
  	}
  };
  
*/  
  
var geojsonFeatures = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "18th & California Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [25.270468, 60.379325]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "20th & Welton Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [25.270468, 60.379325]
            }
        }
    ]
};

  
function onEachFeature(feature, layer) {
	var popupContent = "<p>I started out as a GeoJSON " +
			feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.popupContent;
	}

	layer.bindPopup(popupContent);
}

L.geoJson(geojsonFeatures, {
	style: function (feature) {
		return feature.properties && feature.properties.style;
	},
	onEachFeature: onEachFeature,
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, {
			radius: 8,
			fillColor: "#3b3288",
			color: "#000",
			weight: 1,
			opacity: 1,
			fillOpacity: 0.8
		});
	}
}).addTo(map);  


  
//L.geoJson(geojsonFeature).addTo(map);

//var myLayer = L.geoJson().addTo(map);
//myLayer.addData(geojsonFeature);

//var marker = L.marker([60.379325, 25.270468]).addTo(map);
//marker.bindPopup("Rosenholmitalo.").openPopup();
  
}
