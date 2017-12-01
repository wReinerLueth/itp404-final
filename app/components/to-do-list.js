import Ember from 'ember';

export default Ember.Component.extend({
    model() {
        return this.store.findAll('checklistItem')
    },
    actions: {
        createInstructions(e) {
            e.preventDefault(); // if I decide to use a form
            let hour = this.get('hour');
            let min = this.get('min');
            let time;

            if (min == 30) {
                time = hour + .5;
            }
            else {
                time = hour;
            }

            if (hour > 12){
                time -= 12;
                time += 'pm';
            }
            else if (hour == 12){
                time += 'pm';
            }
            else{
                time += 'am';
            }

            this.store.createRecord('checklistItem', {
                instruction: this.get('instruction'),
                time: time
            });

            
        }
    }
});
