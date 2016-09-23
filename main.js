function init() {
  
  //Aineistot
  var muistot = "https://pilvinummi.github.io/nikkila/MN_instagram_koe.json"
  

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
  
  var mnIkoni = L.icon({
	iconUrl: 'karttakohde.png',
	iconSize: [30, 36],
	iconAnchor: [15, 36],
	popupAnchor: [0, -24]
  });  
/*
  var geojsonFeature = {
  	"type": "Feature", 
  	"properties": { 
  		"nimi": "Rosenholmin talo", 
  		"instagram": "rosenholm.htm",
  		"popupContent": "Tässä on rosenholmin talo."
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
                "popupContent": "Eka testi"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [25.270468, 60.379325]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "Toka testi"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [25.270568, 60.379425]
            }
        }
    ]
};


var rosenholm = "<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BJnltUaDnyf/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Onpa se hieno! Visst är den fin! @perinnesipoo  #räsymatto #trasmatta #katutaide #gatukonst #ihanpihalla #heltdåbråt #muistojennikkilä #uusiamuistoja #nyaminnen</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Kuva, jonka Nikkilä Memories (@muistojennikkila) julkaisi <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-08-27T16:18:40+00:00">27. 08ta 2016 klo 9.18 PDT</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script>"
  
function onEachFeature(feature, layer) {
	var popupContent = rosenholm;
/*
	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.popupContent;
	}
*/
	layer.bindPopup(popupContent);
}

/*
var mnLayer = L.geoJson(geojsonFeature, {
	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: mnIkoni});
	},
	onEachFeature: onEachFeature
}).addTo(map);
*/

var mnLayer = L.geoJson(geojsonFeatures, {
	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: mnIkoni});
	},
	onEachFeature: onEachFeature
}).addTo(map); 
  
  
}
