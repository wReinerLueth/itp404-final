import Ember from 'ember';

export default Ember.Route.extend({
    title: 'Home',
    model() {
        return this.store.findAll('todo')
    }
});
