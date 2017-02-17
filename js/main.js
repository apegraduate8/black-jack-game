jQuery(document).ready(function($) {



var w = window.innerWidth;
var h = window.innerHeight;
var $bod = $('body');
var $fullwrapper = $('.full-wrapper');
var $container = $('#container');
var $top = $('.top');
var $sidePanel = $('.side-panel');

var $hit = $('.hit');
var $stand = $('.stand');
var $double = $('.double');

var $total = $('.total');
var color;
var a = 0;
var b = 0;
var i;
var deck = [];

var mixColors = ["blue", "green", "red", "yellow", "gray", "purple", "orange"]


$bod.css('width', w+'px');
$bod.css('height', h+'px');
$fullwrapper.css({width: w+'px', height: h+'px',});
$total.css({width: w+'px', height: h/2+'px',});

$container.css({width: w/1.5+'px', height: h/2.5+'px',});
$container.css('background-color', 'green');
$sidePanel.css({height: h/2.5+'px'});
$top.css({width: w/2+'px', height: h/2.5+'px', border: '2px solid'});
$hit.css({width: '50px', height: '50px', border: '2px solid'});
$hit.text("HIT");
$stand.css({width: '80px', height: '50px', border: '2px solid'});
$stand.text("STAND");
$double.css({width: '80px', height: '50px', border: '2px solid'});
$double.text("DOUBLE");

//////////////////////////////////////////////  setting html   ----------------



// function Box() {
//   this.remove = function(){
//         this.currentBox.remove();
//   };

//   this.color = mixColors[a];
//   this.currentBox = ""
//   this.bottomCreat = function() {
//         var $div = $('<div>').addClass('color');
//         $div.css('border', '2px solid '+this.color);
//         $div.attr("thisColor", this.color); ////added specific attribute called "thisColor"
//         $container.append($div);
//         this.currentBox = $div;
//         a++;
//   }
//   this.topCreat = function() {
//          var $div2 = $('<div>').addClass('color2');
//         $div2.css('border', '2px solid '+this.color);
//         $div2.attr("thisColor", this.color); ////added specific attribute called "thisColor"
//         $top.append($div2);
//         this.currentBox = $div2;
//         topBoxes.colors.push(this.color);
//         b++;
//         console.log(topBoxes.colors)
//   }

// }

// function Top(father) {
//   this.father = father;
//   this.colors = [];
//   this.checkIt = function() {

//     if(this.colors === 4){this.father[0].remove()}
//   }

// }

//////////////////////////////////////////////

//     var suits = ["hearts", "clubs", "diamonds", "spades"];
//     var special =  ["ace", "jack", "king", "queens"];
//     var img;

// function Deck() {
//   this.cards = function() {
//     var draw = Math.floor(Math.random() * 4);
//     var num = Math.floor(Math.random() * 10);
//     if(num === 10){num = special[draw]};
//     img =  num+"_of_"+suits[draw]+".png" ;
//     return img
//   }
// }

// var fullDeck = new Deck();

// console.log(fullDeck.cards())



/////    2nd draft   - ------ ---- --- -- - -     currently stuck
      var suits = ["hearts", "clubs", "diamonds", "spades"];
      var special =  ["ace", "jack", "king", "queen"];
      var img;
      var ace = false;

       // var $div = $('<div>').addClass('color');
       //    $div.css('border', '2px solid black');
       //    $div.attr("thisCard", "whatever" ); ////added specific attribute called "thisColor"
       //    $top.append($div);
       //    var $div2 = $('<div>').addClass('color');
       //    $div2.css('border', '2px solid black');
       //    $div2.attr("thisCard", "whatever" ); ////added specific attribute called "thisColor"
       //    $top.append($div2);
       //    var $div3 = $('<div>').addClass('color');
       //    $div3.css('border', '2px solid black');
       //    $div3.attr("thisCard", "whatever" ); ////added specific attribute called "thisColor"
       //    $top.append($div3);

  function Deck() {
    this.total = 0;
    this.val = function(v) {
               this.total += v;
              return this.total;
        }
    this.check = function(ace) {
            if(ace === "ace"){
              var $aceDiv = $("<div class='ace'>");
              $aceDiv.text("ACE value?");
              $aceDiv.css({width: '80px', height: '50px', border: '2px solid'});
              $sidePanel.append($aceDiv);
              var $one = $("<div class='one'>");
              $one.text("1");
              $one.css({width: '80px', height: '50px', border: '2px solid'});
              $sidePanel.append($one);
              var $eleven = $("<div class='eleven'>");
              $eleven.text("11");
              $eleven.css({width: '80px', height: '50px', border: '2px solid'});
              $sidePanel.append($eleven);

            }
        }

    this.cards = function() {
      var num2 = 10;
      var draw = Math.floor(Math.random() * 4);
      var num = Math.floor(Math.random() * 12);
      // debugger
      if(num < 2){ this.cards()};
      if(num < 3){ num = Math.floor(Math.random() * 11)}
        // debugger
      if(num === 11 || num === 12){num = special[draw]; this.val(num2); this.check(special[draw]); console.log(special[draw])}; ////got help from Lamaj!! help me figure how to grab the value of each card selection
      img =  num+"_of_"+suits[draw]+".png";
      if(suits[draw] === "ace"){ace = true; this.check(); console.log(ace)}

      if(typeof num === "number"){this.val(num)};
        console.log(this.total)
      return img;
    }
  }////// Deck object end



  // var fullDeck = new Deck();
  // var houseDeck = fullDeck.cards;
  ///////////// deck of 52 random cards


  function Player() {

        this.totalHand = 5;
        this.currentCards = [];
        this.deck = new Deck();

        this.hand = function() {
          // var cardOne = houseDeck();
          // var cardTwo = houseDeck();
          // debugger
           var cardOne = this.deck.cards();
          var cardTwo = this.deck.cards();
          this.currentCards.push(cardOne);
          this.currentCards.push(cardTwo);
            console.log(this.currentCards);

        };

        this.hit = function() {
          console.log(this);
          var c = this.currentCards;
          var h = this.totalHand;
          console.log()
          console.log("currentCards: "+c+", totalHand: "+h)
                if(this.currentCards.length < this.totalHand){
                  // var nextCard = houseDeck();
                  var nextCard = this.deck.cards();
                  this.currentCards.push(nextCard);
                  this.display(this.currentCards);
                  console.log(this.currentCards);
          };
          return "total hand limit";
        };

        this.display = function(ar) {
          $container.children().remove();
          var i;
          ar.forEach(function(card){
            var $div = $('<div>').addClass('color');
            // $div.css('border', '2px solid black');
            $div.attr("thisCard", "whatever" ); ////added specific attribute called "thisColor"
              i = {
                  backgroundImage : "url(./cards/"+card+")",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                };
              $div.css( i );
            $container.append($div);
          }); ////// end of forEach

        } ///////// end of this.display


  };////// Player object end
  // Player.prototype = fullDeck;

  // console.log(Player.prototype);

var player1 = new Player();
console.log(player1);

player1.hand();
player1.display(player1.currentCards);
var player1Cards = player1.deck;
console.log(player1.currentCards.length)
console.log(player1.__proto__);
console.log(player1Cards.cards);


$hit.click(function() {player1.hit()});
// setTimeout(player1.hit.bind(player1), 3000);  ///// got help from  other instructor..recommend bind()..
////// since im using setTimout..this within my player1.hit function would refer to the window object
////// iuse the method bind() to make sure "this" within my function refers to my object , which is player1 !

////////////////////////------------------ house object----


function House() {
        this.totalHand = 5;
        this.currentCards = [];
        this.deck = new Deck();
        this.hand = function() {
          var cardOne = this.deck.cards();
          var cardTwo = this.deck.cards();;
          this.currentCards.push(cardOne);
          this.currentCards.push(cardTwo);
            console.log(this.currentCards);

        };

        this.hit = function() {
          if(this.currentCards.length < this.totalHand){
                  var nextCard = this.deck.cards();
                  this.currentCards.push(nextCard);
                  this.display(this.currentCards);
                  return this.currentCards;
          };
          return "total hand limit";
        };

        this.display = function(ar) {
          $top.children().remove();
          var i;
          ar.forEach(function(card){
            if(this.currentCards < 2){}
            var $div = $('<div>').addClass('color');
            // $div.css('border', '2px solid black');
            $div.attr("thisCard", "whatever" ); ////added specific attribute called "thisColor"
             if($top.children().length > 0){ $div.css("background-color", "black");  $top.append($div); return;}
              i = {
                  backgroundImage : "url(./cards/"+card+")",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                };
              $div.css( i );
            $top.append($div);
          }); ////// end of forEach

        } ///////// end of this.display


  };////// Player object end


var houseCards = new House();
houseCards.hand();
houseCards.display(houseCards.currentCards);




});










