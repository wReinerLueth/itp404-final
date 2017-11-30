import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
    title: 'Food Near Me',

    setupController: function(controller) {
        controller.setProperties({
            lat: this.get('lat'),
            lng: this.get('lng'),
            zoom: 4
        });
    },
    actions: {
        refresh(lat, lng){
            let mapDiv = $('#main-map')[0];
            let map;
            let currLoc;
            let currInfo;
            let initialPos = new google.maps.LatLng(lat, lng);
            let currPos;

            // Mostly from Assignment 3
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(initialPos){
                    currPos = {lat: initialPos.coords.latitude, lng: initialPos.coords.longitude};
                    map = new google.maps.Map(mapDiv, {
                        center: new google.maps.LatLng(initialPos.coords.latitude, initialPos.coords.longitude),
                        zoom: 12
                    });
                    currLoc = new google.maps.Marker({
                        position: new google.maps.LatLng(initialPos.coords.latitude, initialPos.coords.longitude),
                        map: map,
                        animation: google.maps.Animation.DROP,
                        icon: {
                            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                            scale: 8
                        },
                        title: 'Current Location'
                    });
                    currInfo = new google.maps.InfoWindow({
                        content: 'Your location',
                        position: currPos
                    });
                    currLoc.addListener('click', function(){
                        currInfo.open(map, this);
                    });

                    // Getting local restaurants
                    let service;
                    let request = {
                        location: currPos,
                        radius: '500',
                        query: 'restaurant'
                    };
                    
                    let infowindow = new google.maps.InfoWindow();
                    service = new google.maps.places.PlacesService(map);
                    service.textSearch(request, function(results, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                            for (var i = 0; i < results.length; i++) {
                                let place = results[i];
                                
                                let marker = new google.maps.Marker({
                                    position: place.geometry.location,
                                    map: map
                                });
                                google.maps.event.addListener(marker, 'click', function(){
                                    infowindow.setContent(place.name);
                                    infowindow.open(map, this);
                                });
                                console.log(place.name);
                            }
                        }        
                    });
                });
            }

        }
    }
});
