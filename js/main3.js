
////wanted to add audio while youplay  ----- https://www.youtube.com/watch?v=meECq9NvPpc

jQuery(document).ready(function($) {


//////////////////////////////////////// ----------------form.html

var PlayersName = localStorage.playerName;
console.log(PlayersName);
////// LAMAJ HELPED ME OUT WITH THIS LOCAL STORAGE

//////////////////////////////////////// ----------------form.html

var w = window.innerWidth;
var h = window.innerHeight;
var $bod = $('body');
var $fullwrapper = $('.full-wrapper');
var $smallwrapper = $('.small-wrapper');
var $container = $('#container');
var $crds = $(".crds");
var crdsChild = $crds.children();
var $crds2 = $(".crds2");
var crds2Child = $crds2.children();
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


$( window ).resize(function(event) {    //////https://developer.mozilla.org/en-US/docs/Web/API/Window/location
location.reload()

});

$bod.css('width', w+'px');
$bod.css('height', h+'px');
// $fullwrapper.css({width: w+'px', height: h+'px',});
$smallwrapper.css({height: h/3+'px'}); ////height 275px
$total.css({height: h/2+'px'});
$container.css({width: w/1.4+'px', height: h/2.5+'px'});
$sidePanel.css({height: h/2+'px'});
$top.css({width: w/2.5+'px', height: h/2.5+'px'});
////////////////////////////////////////////////////////////////////////////////////////////////////////////  grabbing hmtl

var $betH3 = $(".bet > h3");

var s = $chip[0]

console.log($crds.children().first())

var addSideChildren = function(){
    $hit.css({width: '50px', height: '50px', border: '3px solid'});
    $hit.text("HIT");
    $stand.css({width: '80px', height: '50px', border: '3px solid'});
    $stand.text("STAND");



    $hit.click(function() {
        // debugger
        player1.hit()
        player1.player1Check()
        player1.display($crds, player1.currentCards)

    });///// end of hit

  $stand.click(function() {
      $sidePanel.remove()
      window.setTimeout(function(){
        // debugger
          player1.player1Check();
          dealer.dealerCheck()
          // houseCards.hit()
    }, 2000);

  });////// end of stand

}; /////------end of addSide children

//////////////////////////
addSideChildren();
//////////////////////   adding  hit, stand, and double buttons in sidebar



var removeChildren = function() {
    $hit.off("click");
    $stand.off("click");
    $hit.remove();
    $stand.remove();
    $double.remove();
  }

var one = true;
//////////////////

var deck =  {

    total: 0,
    suits: ["hearts", "clubs", "diamonds", "spades"],
    specials: ["ace", "jack", "king", "queen"],
    num : "",
    draw : "",
    special: "",
    sentence: "",
    a: function(win) {

      var rndm = Math.floor(Math.random() * 5)
      this.num = Math.floor(Math.random() * 13)
      this.draw = Math.floor(Math.random() * 4)
      if(win){this.num = rndm}

      if(this.num === 1 || this.num === 0){this.b("ace"); this.num = "ace"; this.total = this.total + 1; return this.aceCheck()}
      if(this.num > 10){this.special = this.specials[this.draw]; this.total += 10; this.sentence = this.special+"_of_"+this.suits[this.draw]+".png"; return this.sentence}
      if(this.num === 10){this.total += this.num; return this.aceCheck()}
      if(typeof this.num === "number" ){this.total += this.num; return this.aceCheck()}
    },
    aceCheck: function() {
      if(typeof this.num === "number"){this.sentence = this.num+"_of_"+this.suits[this.draw]+".png"; return this.sentence}
      var finalnum = (this.ace.length >= 1) ? "ace" :  this.a();
      this.ace;
      this.sentence = finalnum+"_of_"+this.suits[this.draw]+".png";
      return this.sentence;
    }

};



////// to inherit from another object use __proto__

///////// new constructor...to inherit from deck object
///////////////////////////////

var Dealer =  function(type) {
  this.ace = [];
  this.type = type;
  this.constructor = Dealer;
  this.currentCards = [];
  this.totalHand = 5;
  this.betTotal = 0;
  this.b = function(theAce) {
      this.ace.push(theAce)
    },
    this.hand = function(first) {
        if(first === 2){
          // debugger
          var cardOne = this.a();
          var cardTwo = this.a();
          this.currentCards.push(cardOne);
          this.currentCards.push(cardTwo);
          console.log(this.currentCards);
        }
        if(first === 1){ var cardOne = this.a();  this.currentCards.push(cardOne)};
    }

    this.hitDealer = function() { /////special card for dealer "advantage"..when dealer has less than 16
      var cardOne = this.a(true);
      this.currentCards.push(cardOne);
    }

    this.player1Check = function() {
      if(this.total > 21){$sidePanel.remove(); return this.win("dealer")};
      if(this.total === 21){$sidePanel.remove(); return this.win("player")};
      if(this.type === "dealer"){return};
      if(player1.ace[0] === "ace" && player1.ace.length >= 1){
              // console.log(this.type);
              // console.log(player1.ace);
              // removeChildren();
              var $acePanel = $('<div class="acePanel">');
              $sidePanel.append($acePanel)
              var $aceDiv = $("<div class='ace'>");
              $aceDiv.text("select  your ACE value?");
              $aceDiv.css({width: '80px', height: '50px', border: '2px solid'});
              $acePanel.append($aceDiv);
              var $one = $("<div class='one'>");
              $one.text("1");
              $one.css({width: '80px', height: '50px', border: '2px solid'});
              $acePanel.append($one);
              var $eleven = $("<div class='eleven'>");
              $eleven.text("11");
              $eleven.css({width: '80px', height: '50px', border: '2px solid'});
              $acePanel.append($eleven);

              $hit.css("pointer-events", "none"); ///// user cannot click the hit button untill ace value is chosen
              ////////////JOEL HELPED ME WITH "POINTER-EVENTS, NONE"

////--- eleven button
              $eleven.click(function(){

                player1.total = player1.total + 10;
                console.log("and player1 total : "+player1.total);
                player1.ace = [];
                $eleven.off("click");
                $acePanel.remove();
                $betH3.text(PlayersName+" cards: "+player1.total);
                $hit.css("pointer-events", "auto");
                player1.player1Check()  ////only want tocheck if player gets above 21 ...dont have to check below
             });
////--- one button
                 $one.click(function(){
                 console.log("and player1 total : "+player1.total);
                 player1.ace = [];
                 $one.off("click");
                 $acePanel.remove();
                 $hit.css("pointer-events", "auto");
                 $betH3.text(PlayersName+" cards: "+player1.total)

              });
          };

    }

      this.dealerCheck = function() {
          if(dealer.ace.length === 1 && dealer.total === 11){dealer.total === 21};
          if(this.totalHand === this.currentCards.length){return this.finalCheck()};
          if(player1.total === 21){return this.win("Player1")}
          if(this.total < 17 ){this.hitDealer(); this.display($top, dealer.currentCards);  this.dealerCheck()};
          if(this.total >=17 && this.total <= 20 ){return this.finalCheck()};
          if(this.total === 21){this.win("Dealer")}
        }
      this.finalCheck = function() {
            // if(this.totalHand === this.currentCards.length){this.stand()};  ///////the dealer makes FINAL CHECKS
            if(this.total === player1.total){return this.win("Dealer")}
            if(this.total > player1.total){return this.win("Dealer")}
            if(this.total < player1.total){this.win("Player")}
      }


      this.display = function(element, ar) {
          element.children().remove();
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
                element.append($div);

          }); ////// end of forEach
          $betH3.text(PlayersName+" cards: "+player1.total)

      } /////////////////////////////////////////////// end of this.display


      this.stand = function() {
          this.totalHand = this.currentCards.length;
          if(this.totalHand === this.currentCards.length){
            $sidePanel.children().remove();
            $total.css("justify-content", "space-around");
          }
      }/// //////////////////////////  end of stand

      this.hit = function() {
         if(this.totalHand === this.currentCards.length){$stand.trigger("click")};
         if(this.currentCards.length < this.totalHand){this.hand(1);};
      }////// /////////////////////////// end of hit

//////////////////////////////////////////////////////////////////////////////   bet for chips
      // this.bet = function() {
      //   var self = this;
      //     $chip.each(function(i, chip){
      //       $(chip).click(function(){
      //         console.log($(this).attr("amount"));
      //         var amount = $(this).attr("amount");
      //           self.betTotal += amount;
      //           console.log(self.betTotal)
      //       })
      //     })
      // }
//////////////////////////////////////////////////////////////////////////////   bet for chips


///////// only called if there is a winner
      this.win = function(winner) {
          $('.winner').remove();
          var $div = $('<div>').addClass('winner');
          var $h1 = $('<h1>').addClass('h1Winner');
          var $butt = $('<button>').addClass('winButton');
          $butt.text("RESTART");
          $h1.text(winner+" wins");
          $div.append($h1);
          $div.append($butt);
          $total.append($div);

          $butt.click(function() {
            location.reload();
          })
      }

};


    Dealer.prototype = deck; //// setting the prototype for dealer constructs
    var dealer = new Dealer("dealer"); /// dealer instance ....inherits from deck object above
    var player1 = new Dealer("player"); //// player1 instance


    /////////////////////////////////      starts game

    var initGame = function() {
        //

        dealer.hand(2);
        dealer.display($top, dealer.currentCards);
        player1.hand(2);
        player1.player1Check();
        player1.display($crds, player1.currentCards);

    }


    initGame();


});







