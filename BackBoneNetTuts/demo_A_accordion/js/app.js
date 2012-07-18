(function ($) {



    //demo data
    var contacts = [
        { name: "Contact1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
    ];

    //define product model
    var Contact = Backbone.Model.extend({
        defaults: {
            photo: "http://localhost/HTML5/GITPROJECTS/CSSFun/BackBoneNetTuts/demo_A/img/placeholder.png"
        }
    });

    //define directory collection
    var Directory = Backbone.Collection.extend({
        model: Contact
    });

    //define individual contact view
    var ContactView = Backbone.View.extend({

        tagName: "article",
        className: "contact-container",
        template: $("#contactTemplate").html(),

        render: function () {
            var tmpl = _.template(this.template);
            $(this.el).html(tmpl(this.model.toJSON()));

//            console.log("this.model.toJSON()",this.model.toJSON());
            return this;
        }

    });

    //define master view
    var DirectoryView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function () {
            this.collection = new Directory(contacts);
            this.render();
        },

        render: function () {
            var that = this;

            _.each(this.collection.models, function (item) {

                that.renderContact(item);

            }, this);
        },

        renderContact: function (item) {

            var contactView = new ContactView({
                model: item
            });

            this.$el.append(contactView.render().el);

        }
    });

    //create instance of master view
    var directory = new DirectoryView();


    $("#contacts").accordion({ header: "h3" });
    $('#tabs').tabs();




} (jQuery));