
$(document).ready(function(){
    var init = function() {
        var addressesArray = [
            ['г. Москва, ул. Илимская, 12', 'first'],
            ['г. Москва, Алтуфьевское ш.,48 к1', 'second'],
            ['г. Москва, ул. Менжинского, 23к1', 'third']
        ];
        
        for (var i = 0; i < addressesArray.length; i++) {
            (function (i) {
                var mapContainer = addressesArray[i][1];
                $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addressesArray[i][0]+'&sensor=false', null, function (data) {
                    var p = data.results[0].geometry.location;
                    var latlng = new google.maps.LatLng(p.lat, p.lng);
                    var mapProp = {
                        center: latlng,
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map=new google.maps.Map(document.getElementById(mapContainer), mapProp);
                    var aMarker= new google.maps.Marker({
                        position: latlng, 
                        icon: 'img/map-marker.png',
                        map: map 
                    });
                });
            })(i);
        }     
    };
    
    init(); 
});
