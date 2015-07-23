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

  function flipCard() {
    $('.card').toggleClass('flipped');
  }

  function putCardInDOM(card) {
    var html = cardToHtml(card);
    $(".front img").remove();
    $(".arcana-icon img").remove();
    $(".front").append(html.img).show();
    $(".arcana-icon").append(html.category).hide().slideDown(1000);
    $(".name").append(html.name).hide().delay(700).slideDown(2000);
    $(".description").append(html.description).hide().delay(700).slideDown(2000);
    return false;
  }

  function cardToHtml(card) {
    return {
      img : "<img src=" + card.img + ">",
      name : "<h2>" + card.name + "</h2>",
      description : "<p>" + card.description + "</p>",
      category : "<img src='images/" + card.category + ".svg'" + "alt='" + card.category + "'>"
    };

  }

  //display the random card and hide it every other click whether even or odd
  function displayImg() {

    if(buttonClick % 2) {
      putCardInDOM(result);
      flipCard();
      $(".arcana-icon img.selected").show();
    } else {
      $(".back").show();
      flipCard();
      $(".name h2").slideUp();
      $(".description p").slideUp();
      $(".arcana-icon img").hide();
    }
    return false;
  }

  //rotate the card if true
  function rotateCard() {
    var rotate = [true, false],
    cardRevDescript = "<p> <span class='reversed'>Reversed: </span>" + result.reverse + "</p>";
    rotate = (rotate[Math.floor(Math.random() * rotate.length)]);
    console.log(rotate);
    if (rotate && (buttonClick % 2)) {
      $(".front img").addClass("rotate");
      $(".description").append(cardRevDescript).hide().slideDown();
    }
  }

  $(".greeting").hide().fadeIn(2000);

  //when the button is clicked, run the buttonCount, pickCard, and displayImg function

  $(".fateButton").click(function(event){
    event.preventDefault();
    buttonCount();
    pickCard();
    displayImg();
    rotateCard();
    return false;
  });

  $(".fateButton").one("click", function(){
    $(".greeting").remove();
  });

});
