import Ember from 'ember';

export default Ember.Route.extend({
    title: 'Home',
    model() {
        this.get('store').push({
            data: [{
                id: 1,
                type: 'todo',
                attributes: {
                    task: "Do This Thing",
                    time: "06:58"
                },
                relationships: {},
            }, {
                id: 2,
                type: 'todo',
                attributes: {
                    task: "Now Do This",
                    time: "13: 39"
                },
                relationships: {}
            }, {
                id: 3,
                type: 'todo',
                attributes: {
                    task: "Drink some water",
                    time: "10:00"
                },
                relationships: {}
            }, {
                id: 4,
                type: 'todo',
                attributes: {
                    task: "Make/Cook some food",
                    time: "10:30"
                },
                relationships: {}
            }, {
                id: 5,
                type: 'todo',
                attributes: {
                    task: "Watch some tv, Netflix or South Park",
                    time: "11:00"
                },
                relationships: {}
            }, {
                id: 6,
                type: 'todo',
                attributes: {
                    task: "Take a nap",
                    time: "12:00"
                },
                relationships: {}
            }, {
                id: 7,
                type: 'todo',
                attributes: {
                    task: "Workout",
                    time: "16:00"
                },
                relationships: {}
            }, {
                id: 8,
                type: 'todo',
                attributes: {
                    task: "Have a good meal and drink",
                    time: "Post-workout"
                },
                relationships: {}
            }, {
                id: 9,
                type: 'todo',
                attributes: {
                    task: "Try a cure to end the hangover",
                    time: "Whenever you want"
                },
                relationships: {}
            }]
        });
        return this.get('store').findAll('todo');
    }
});
