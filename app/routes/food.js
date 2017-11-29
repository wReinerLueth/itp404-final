import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
    actions: {
        refresh(){
            let map = $('#mainMap');
            console.log(map);
        }
    }
});
