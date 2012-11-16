/* Author:

*/

$(function(){

    // Todo Model
    // ----------
    // Our basic **Todo** model has `title`, `order`, and `done` attributes.

    var Todo = Backbone.Model.extend({

        // Default attributes for the todo item.

        defaults: function() {

            return {
                title: "empty todo...",
                order: 10,
                done: false
            };
        }

    });

    var Todos = Backbone.Collection.extend({
        model: Todo,
        url: 'js/notes/jsooon.json' // load a bunch of json objects into models.

//        url: function() {
//            console.log(this.document.url() + '/js');
//            return this.document.url() + '/js';
//        }
    });
       var t = new Todos;

//    var yo =  t.create({
//        title: "full",
//        order: 10,
//        done: false
//    });

//    var yo =  t.create({
//        title: "full",
//        order: 10,
//        done: false
//    });

    console.log("TodoList",t);





//    var TodoList = Backbone.Collection.extend({
//        model: Todo
//    });
//
//    var t = new TodoList;
//
//    var yo =  t.create({
//        title: "full",
//        order: 10,
//        done: false,
//        url:"dk"
//    });
//
//    console.log("TodoList",t);


});



