jQuery(document).ready(function($) {



var w = window.innerWidth;
var h = window.innerHeight;
var $bod = $('body');
var $fullwrapper = $('.full-wrapper');
var $smallwrapper = $('.small-wrapper');
var $container = $('#container');
var $crds = $(".crds")
var crdsChild = $crds.children()
var $crds2 = $(".crds2")
var crds2Child = $crds2.children()
var $top = $('.top');
var $sidePanel = $('.side-panel');
var $total = $('.total');
var $hit = $('.hit');
var $stand = $('.stand');
var $double = $('.double');
var $chip = $('.chip');

var $total = $('.total');
var color;
var a = 0;
var b = 0;
var i;
var deck = [];

var mixColors = ["blue", "green", "red", "yellow", "gray", "purple", "orange"]


$bod.css('width', w+'px');
$bod.css('height', h+'px');
// $fullwrapper.css({width: w+'px', height: h+'px',});

$smallwrapper.css({height: h/3+'px'}); ////height 275px
$total.css({height: h/2+'px'});

$container.css({width: w/1.4+'px', height: h/2.5+'px',});
// $container.css('background-color', 'green');
// $top.css('background-color', 'green');
$sidePanel.css({height: h/2.5+'px'});
$top.css({width: w/2+'px', height: h/2.5+'px'});

var $betH2 = $("<h2>");
var $betH3 = $("<h3>");
// $betH2.css({});
// $betH2.css({});
var s = $chip[0]
$smallwrapper.append($betH2);
$smallwrapper.append($betH3);
console.log($crds.children().first())



crdsChild.filter(".card1").text("im card 1")


// var placeCard = function(parent, theClass) {
//     parent.children().each(function(clas){
//       if (clas.is(theClass)){ parent.append(class);}
//     })
// }
/// placeCard($crds, card1)
placeCard = function(place, styling) {
   $(place).css( styling );

}



//////////////////////////////////////////////  setting html   ----------------

      var suits = ["hearts", "clubs", "diamonds", "spades"];
      var special =  ["ace", "jack", "king", "queen"];
      var img;
      var ace = false;

///////////////////////////////////////////----------------
 // var randamize = function(a) {
 //        if(a < 3){
 //          a = Math.floor(Math.random() * 10);
 //           randamize(a);
 //        }else{
 //          return a;
 //        }

 //    };
var iCalled;
var whatsnum;


var allTheCards = new Object();
allTheCards.name = this.name;

var Deck = function() {
    this.total = 0;
    this.val = function(v) {
               this.total += v;
              return this.total;
        }
    this.check = function(ace) {
            console.log(iCalled)
            if(ace === "ace" && typeof iCalled === "object"){
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

              $one.click(function() {player1.deck.total = whatsnum + 1}, console.log(player1.deck.total +"and whatsnum: "+ whatsnum));

            }
        }


      var num;
    this.cards = function(j) {
      // debugger
         console.log(iCalled)
         console.log(this)
      var num2 = 10;
      var draw = Math.floor(Math.random() * 4); ////random number between 0 - 4
      // draw = 0;
       num = Math.floor(Math.random() * 11);  ////random number between 0 - 11
      // debugger
       // num = 1;
       if(typeof j === "number"){num = 1}
      if(num === 1){num = Math.floor(Math.random() * 11)};
      // if(num < 3){ num = Math.floor(Math.random() * 12)}
      num = 11;

      if(num < 2){num = (Math.floor(Math.random() * 11)) < 3 ? (Math.floor(Math.random() * 12)) : 3;} ///cant have num equal 1 becuase i wont be able to select image

      if(num === 11 || num === 12){num = special[draw]; if(num != "ace"){this.val(num2)} this.check(special[draw]); console.log(special[draw])}; ////got help from Lamaj!! help me figure how to grab the value of each card selection
      img =  num+"_of_"+suits[draw]+".png";

      if(special[draw] === "ace"){this.check(); console.log(num)}

      if(typeof num === "number"){this.val(num); whatsnum = num};
       if(num === "ace"){this.val(1)};
        console.log("i am"+this+" and the total is "+this.total)
      return img;
    }

    this.checkAllCards = function(){
      // debugger
      var pl1 = player1;
      var dealer = houseCards;
      if(this.total < 21){return}
      // if(this.total === 21){alert("you win")};
      if(this.total > player1.deck.total){alert("the Dealer wins")};
      if(pl1.deck.total === 21){alert("you win")};
      if(pl1.deck.total > houseCards.deck.total){alert("the Dealer wins")}

    }
    // this.winnerCheck = function() {
    //   if(this.total === 21){alert("you win")}
    //    if()
    // }
  }////// Deck object end

Deck.prototype = allTheCards;
console.log(Deck.prototype);
console.log(Deck.__proto__);

///////////////////////////--------------------------





  function Player() {
        iCalled = this;  ////helpme track when player won invokes the cards function...trying to keep track of aces
        this.totalHand = 5;
        this.currentCards = [];
        this.deck = new Deck();
        this.betTotal = 0;
        this.stand = function() {
          // debugger
            this.totalHand = this.currentCards.length;
            if(this.totalHand === this.currentCards.length){
              $sidePanel.remove();
              $container.css("justify-content", "flex-start")
              var dealerShow = $('<div class="dealerHand">');
                dealerShow.css({width: "200px", height: "200px"});
                dealerShow.text("Dealer show");
              $container.append(dealerHand)
            }

        }

        this.hand = function() {
          // debugger
          var cardOne = this.deck.cards();
          var cardTwo = this.deck.cards();
          this.currentCards.push(cardOne);
          this.currentCards.push(cardTwo);
            console.log(this.currentCards);
            this.bet();

        };

        this.hit = function() {

          if(this.totalHand === this.currentCards.length){this.stand()};
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
                  console.log(this.deck.total);
          };
          return "total hand limit";
        };

        this.display = function(ar) {

          $crds.children().remove();
          var i;
          ar.forEach(function(card){
            var $div = $('<div>').addClass('card');

            $div.attr("thisCard", "whatever" ); ////added specific attribute called "thisColor"
              i = {
                  backgroundImage : "url(./cards/"+card+")",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                };
              $div.css( i );
                $crds.append($div);


          }); ////// end of forEach

        } ///////// end of this.display

      this.checkAllCards = function(){
      // debugger


      if(this.deck.total > 21){return alert("bust, Dealer Wins!"); $sidePanel.remove();};
      if(this.deck.total < 21){return};
      // if(this.total === 21){alert("you win")};
      if(this.deck.total === 21){return alert("you win")};
      // if(this.deck.total > houseCards.deck.total){return alert("the Dealer wins")};

    }
    this.bet = function() {
      var self = this;
        $chip.each(function(i, chip){
          console.log(chip);
          $(chip).click(function(){
            console.log($(this).attr("amount"));
            var amount = $(this).attr("amount");
              self.betTotal += amount;
          })
        })

    }


  };////// Player object end

///////////////////////////





var player1 = new Player();
console.log(player1);

player1.hand();
player1.display(player1.currentCards);

// var player1Cards = player1.deck;
// console.log(player1.currentCards.length)
// console.log(player1Cards.total);

var addSideChildren = function(){
    $hit.css({width: '50px', height: '50px', border: '3px solid'});
    $hit.text("HIT");
    $stand.css({width: '80px', height: '50px', border: '3px solid'});
    $stand.text("STAND");
    $double.css({width: '80px', height: '50px', border: '3px solid'});
    $double.text("DOUBLE");

    $hit.click(function() {
        // debugger
        player1.hit()
        player1.checkAllCards()

    });

  $stand.click(function() {
      $sidePanel.remove()
      debugger
      window.setTimeout(function(){
          houseCards.check();
          // houseCards.hit()
    }, 3000);

  });

};

addSideChildren();






function House() {
        iCalled = 100;
        this.totalHand = 5;
        this.currentCards = [];
        this.deck = new Deck();
        this.check = function() {
          // debugger
          console.log(this.deck.total)
           // if(this.deck.total > 21 ){this.hit()};
          if(this.deck.total < 16 ){this.hit(); this.checkAllCards()};
          if(this.deck.total === 11 && num === "ace") {return alert("BlackJack, dealer Wins !")}
          if(this.deck.total > 16 && this.deck.total <= 20){return this.checkAllCards();};
          if(this.deck.total === 21){this.display(this.currentCards); alert("dealer wins!")};
          this.checkAllCards();
        }
      this.stand = function() {
          // debugger
            this.totalHand = this.currentCards.length;
            if(this.totalHand === this.currentCards.length){
              $sidePanel.children().remove();
              $total.css("justify-content", "space-around")
              var dealerHand = $('<div class="dealerHand">');
                dealerHand.css({width: "150px", height: "180px"});
                dealerHand.text("Dealer hand");
              $sidePanel.append(dealerHand)
            }

        }

        this.hand = function() {
          // debugger
          var cardOne = this.deck.cards();
          var cardTwo = this.deck.cards();;
          this.currentCards.push(cardOne);
          this.currentCards.push(cardTwo);
            console.log(this.currentCards);

        };

        this.hit = function() {
          // debugger
          // this.check();
          if(this.currentCards.length < this.totalHand){
                  var nextCard = this.deck.cards(1);
                  this.currentCards.push(nextCard);
                  this.display(this.currentCards);

                  console.log(this.deck.total)
                  this.check(this);
                  return this.currentCards;
          };
          return "total hand limit";
        };

        this.display = function(ar) {
          $top.children().remove();
          var i;
          // var self = this;

          ar.forEach(function(card){
            // if(this.currentCards < 2){}

              var $div = $('<div>').addClass('card');

              $div.attr("thisCard", "whatever" ); ////added specific attribute called "thisColor"
              i = {
                  backgroundImage : "url(./cards/"+card+")",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                };
                $div.css( i );
                $top.append($div);

            //  if($top.children().length > 0 && self.trueBlack === true){$div.addClass('black');  $top.append($div); return;}



          }); ////// end of forEach

        } ///////// end of this.display

         this.display2 = function(ar) {
          $top.children().remove();
          var i;
          var self = this;
          ar.forEach(function(card){

            var $div = $('<div>').addClass('color');

            // $div.css('border', '2px solid black');
            $div.attr("thisCard", "whatever" ); ////added specific attribute called "thisColor"
             // if($top.children().length > 0 && self.trueBlack === true){$div.addClass('black');  $top.append($div); return;}

              i = {
                  backgroundImage : "url(./cards/"+card+")",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                };
              $div.css( i );
            $top.append($div);
          }); ////// end of forEach

        } ///////// end of this.display

      this.checkAllCards = function(){


        // if(this.deck.total < 21){return}
        // if(this.total === 21){alert("you win")};
        if(this.deck.total > player1.deck.total && this.deck.total < 21){this.display2(this.currentCards); return alert("the Dealer wins");};
        if(this.deck.total < player1.deck.total){this.display2(this.currentCards); return alert("player1 wins")}
        if(this.deck.total === player1.deck.total){alert("House wins! break even")}
          console.log(player1.deck.total+" player1 and house is "+this.deck.total )

    }

  };////// Player object end


var houseCards = new House();
houseCards.hand();
houseCards.display(houseCards.currentCards)








});

// debugger
// var bod = document.querySelector("body");
// var newShit = document.createElement("div");
// newShit.innerText = "yo whats good";
// newShit.setAttribute("style", "background-color: grey");

// console.log(bod);
// bod.appendChild(newShit);










