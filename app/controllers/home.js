import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createInstructions(e){
            e.preventDefault();

            let todo = this.store.createRecord('todo', {
                task: this.get('task'),
                time: this.get('time')
            });

            todo.save();
        }
    }
});
