// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// // keyup events could be helpful to get value of field as the user types

var addr = "http://www.mattbowytz.com/simple_api.json?data=all";

(function() {
  // Magic!
  // This is honsestly the coolest code bit I've written in this class. 
  //
  $.getJSON(addr, function(stuff) { 
    if (stuff.status == 200) {
      console.log("yay!");
      $('.flexsearch-input').on("keyup", function(text) {
        $('.results').empty();
        var input = $(this).val().toLowerCase();
        $.each(stuff.data, function(index, value) {
          $.each(value, function(index, string) {
            if (string.toLowerCase().startsWith(input)) {
              $('.results').append("<a target='_blank' href='http://www.google.com/#q=" + 
                string + "'>" + string + "</a></br>");
            };  
          });
        });
      });
    } else {
      console.log("Boo you stink!");
    };
  }); 
})(window, document, jQuery);

