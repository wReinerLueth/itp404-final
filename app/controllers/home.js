import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createInstructions(e){
            e.preventDefault();

            this.store.createRecord('todo', {
                task: this.get('task'),
                time: this.get('time')
            });

            this.toast.success("You added the task");
            todo.save();
            
        },
        deleteItem(){

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