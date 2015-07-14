$(document).ready(function(){

var calledOneTime = false;
var buttonClick = 0;
var result;

//count the number of times the button is clicked
function buttonCount(){
buttonClick = buttonClick + 1;
    console.log(buttonClick);
    return buttonClick;
}

//randomize the card
function pickCard() {
  result = (arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)]);
  console.log(result.img);
  $(".category-image img").removeClass("selected");
  $(".category-image").children("img."+result.category).addClass("selected");
}

//flip card functionality
function flipCard() {

  $(".card").flip({
    axis: 'y',
    trigger : 'manual',
    speed : 500
  });
  $(".card").flip(true);

}

function putCardInDOM(card) {
  var cardImage = "<img src=" + result.img + ">",
      cardName = "<h2>" + result.name + "</h2>",
      cardDescription = "<p>" + result.description + "</p>";

  $(".back").append(cardImage).show();
  flipCard();
  $(".name").append(cardName).hide().slideDown();
  $(".description").append(cardDescription).hide().slideDown();
}

//display the random card and hide it by every click whether even or odd
function displayImg() {
var cardImage = "<img src=" + result.img + ">",
    cardName = "<h2>" + result.name + "</h2>",
    cardDescription = "<p>" + result.description + "</p>";

  if(!calledOneTime && (buttonClick % 2 !== 0)) {
    calledOneTime = true;
    putCardInDOM(result);
  } else if (calledOneTime && (buttonClick % 2 !== 0)) {
      flipCard();
      $(".back img").replaceWith(cardImage);
      $(".name").append(cardName).hide().slideDown();
      $(".description").append(cardDescription).hide().slideDown();
      console.log("clicked odd " + buttonClick);
    }
    else {
        $(".front").show();
        $(".card").flip(false);
        $(".name h2").slideUp();
        $(".description p").slideUp();
        console.log("clicked even- hide " + buttonClick);
    }
    $(".category-image img.selected").show();
}

//rotate the card if true
function rotateCard() {
  var rotate = [true, false],
  cardRevDescript = "<p> <span class='reversed'>Reversed: </span>" + result.reverse + "</p>";
  rotate = (rotate[Math.floor(Math.random() * rotate.length)]);
  console.log(rotate);
  if (rotate === true && (buttonClick % 2 !== 0)) {
    $(".back img").addClass("rotate");
    $(".description").append(cardRevDescript).hide().slideDown();
  }
}

$(".greeting").hide().fadeIn(1200);

//when the button is clicked, run the buttonCount, pickCard, and displayImg function

$(".fateButton").click(function(){
  buttonCount();
  pickCard();
  displayImg();
  rotateCard();
});

$(".fateButton").one("click", function(){
  $("#greeting-message").remove();
});

});
