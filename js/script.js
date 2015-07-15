$(document).ready(function(){

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
    var html = cardToHtml(card);
    $(".back img").remove();
    $(".category-image img").remove();
    $(".back").append(html.img).show();
    $(".category-image").append(html.category).hide().slideDown(2000);
    $(".name").append(html.name).hide().slideDown(2000);
    $(".description").append(html.description).hide().slideDown(2000);

  }

  function cardToHtml(card) {
    return {
      img : "<img src=" + card.img + ">",
      name : "<h2>" + card.name + "</h2>",
      description : "<p>" + card.description + "</p>",
      category : "<img src='images/" + card.category + ".svg'" + "alt='" + card.category + "'>"
    };
  }

  //display the random card and hide it by every click whether even or odd
  function displayImg() {

    if(buttonClick % 2) {
      putCardInDOM(result);
      flipCard();
      $(".category-image img.selected").show();
    } else {
      $(".front").show();
      $(".card").flip(false);
      $(".name h2").slideUp();
      $(".description p").slideUp();
      $(".category-image img").hide();
    }
  }

  //rotate the card if true
  function rotateCard() {
    var rotate = [true, false],
    cardRevDescript = "<p> <span class='reversed'>Reversed: </span>" + result.reverse + "</p>";
    rotate = (rotate[Math.floor(Math.random() * rotate.length)]);
    console.log(rotate);
    if (rotate && (buttonClick % 2)) {
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
