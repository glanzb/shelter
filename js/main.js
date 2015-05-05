
 
(function($) {
var cats = [ 
    {"id":"1","url":"1-kitten.jpg", "name": "Fluffy", "about": "This is some text about this kitten"},
	{"id":"2","url":"2-kitten.jpg", "name": "Liqour", "about": "This is some text about this kitten"},
	{"id":"3","url":"3-kitten.jpg", "name": "Sneaky", "about": "This is some text about this kitten"},
	{"id":"4","url":"4-kitten.jpg", "name": "Roar", "about": "This is some text about this kitten"},
	{"id":"5","url":"5-kitten.jpg", "name": "Sleepy", "about": "This is some text about this kitten"},
	{"id":"6","url":"6-kitten.jpg", "name": "Scratchy", "about": "This is some text about this kitten"}
];

 $.each(cats, function(id) {
    $('#list').append('<li id="' + (id+1) + '"><img src="./img/'+ cats[id].url +'">')
    		  .append('<h3>' + cats[id].name + '</h3>')
    		  .append('<p>' + cats[id].about + '</p>');
    $('li').addClass('items');
    console.log(cats[id].url);
  });


})(jQuery);