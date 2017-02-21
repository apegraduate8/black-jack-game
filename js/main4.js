jQuery(document).ready(function($) {


var $inputBut = $('input[type=submit]');
var $rgnh;
var $loader = $('<div class="loaderCover">')
var $H1 = $('<h1>')
$H1.text("loading...")
$H1.css({"color": "white", "font-size": "2rem",})
$loader.append($H1)

var $bod = $('#theBody');

$beth3 = $('.bet > h3');




var now = function(){
    console.log($loader);
    $bod.append($loader);
    window.setTimeout(function() {
        location.assign("index2.html");
    }, 3000);

}


var later = function() {
       window.setTimeout(function() {
        var $bet = $('.bet');
         $beth3.append($rgnh);
         console.log($beth3)
       }, 7000);
}

////   reference: https://api.jquery.com/submit/
//// also for localStorage:  https://www.w3schools.com/HTML/html5_webstorage.asp

if (typeof(Storage) !== "undefined") {
      localStorage.clear();   /////clearing that local storage
      $("form").submit(function(event){
      event.preventDefault();
      $rgnh = $("#user").val();
      console.log($rgnh);
      localStorage.playerName = $rgnh;
      // location.assign("index.html");

      now()
      })

 }






});
