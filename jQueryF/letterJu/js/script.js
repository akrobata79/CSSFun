/* Author:

 */

$(function() {

    var name = $('#name');
    var greeting = $('#greeting');


    var coolbackground = "http://subtlepatterns.com/patterns/tiny_grid.png"

    name.keyup(function() {

        greeting.text(name.val())

    })

    $('<div/>', {

        id: 'foo',
        href: 'http://google.com',
        title: 'Become a Googler',
        rel: 'external',
        text: 'Go to Google!'

    }).appendTo('#main2');

        var m2 = $("#main2");
        m2.css("background-color",'yellow')
        m2.css("width",300);
        m2.css("height",300);

     //   m2.css('background-image', url());
        //
        m2.css('background-image', 'url("' + coolbackground + '")');






})







