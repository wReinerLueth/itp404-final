import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
    title: 'Food Near Me',
    actions: {
        refresh(){
            // This only gets the div, not the map itself
            let map = $('#mainMap');
            console.log(map);
        }
    }
});
