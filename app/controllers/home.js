import Ember from 'ember';

export default Ember.Controller.extend({
    sortChecklist: function () {
        var modelList = this.model.store.findAll('todo');


        var sorted = modelList.sort(function(a, b) {

                if (a[0] > b[0])
                    return 1;
                else if (a[0] < b[0])
                    return -1;

                return 0;

            })

            console.log(sorted)
    },
    actions: {
        createInstructions(e) {
            e.preventDefault();
            console.log(this.get('task'));
            console.log(this.get('time'));

            let todo = this.get('store').createRecord('todo', {
                task: this.get('task'),
                time: this.get('time')
            });

            this.toast.success('You added the task');
            todo.save();
        },
        deleteItem(todo) {
            todo.deleteRecord();
            this.toast.success('You deleted the task');
            todo.save();
        }
    }
});

// Sorting

// var lastLetterSort = ['blue', 'red', 'green', 'aa'];


// var sorted = lastLetterSort.sort(function(a, b) {

//         if (a[a.length - 1] > b[b.length - 1])
//             return 1;
//         else if (a[a.length - 1] < b[b.length - 1])
//             return -1;

//         return 0;

//     })

//     console.log(sorted)



// Toastr stuff

// miniToastr.success(message, title, timeout, cb, config)
// miniToastr.info(message, title, timeout, cb, config)
// miniToastr.warn(message, title, timeout, cb, config)
// miniToastr.error(message, title, timeout, cb, config)