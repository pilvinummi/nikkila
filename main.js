function init() {
  
  //Kaikki webbikartassa käytettävät globaalit muuttujat
  //var information = document.getElementById('information');
  //var removeButton = document.getElementById('remove');
  //var resetButton = document.getElementById('reset');
  
  //var legend = L.control({position: 'bottomleft'});
  
  //Aineistot ovat esiladattuja nopeamman toimivuuden takaamiseksi
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
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  
  var geojsonFeature = {
  	"type": "Feature", 
  	"properties": { 
  		"nimi": "Rosenholmin talo", 
  		"instagram": "rosenholm.htm" 
  	}, 
  	"geometry": { 
  		"type": "Point", 
  		"coordinates": [ 60.379325, 25.270468 ]
  	}
  }
  
  var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJson(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);
  
  //L.geoJson(muistofeature).addTo(map);
  
}
