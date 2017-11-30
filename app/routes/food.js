import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
    // gmap: Ember.inject.service(),

    title: 'Food Near Me',
    setupController: function(controller) {
        controller.setProperties({
            lat: 32.75492,
            lng: -150.835,
            zoom: 4
        });
    },
    actions: {
        refresh(){
            // This only gets the div, not the map itself
            let map = $('#main-map');
            console.log(map);
        }
    }
});
