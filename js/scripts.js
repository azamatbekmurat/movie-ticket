//business logic
function Ticket(movieName, time) {
  this.movieName = movieName;
  this.movieTime = time;
}

Ticket.prototype.getPrice = function()  {
  var price = [];
  if (this.movieName==="acrimony"){
    if (this.movieTime < 6) {
      price.push("10$");
    } else {
      price.push("20$");
    }
  } else if (this.movieName==="midSun") {
    if (this.movieTime < 6) {
      price.push("10$");
    } else {
      price.push("20$");
    }
  } else if (this.movieName==="pacificRim") {
    if (this.movieTime < 6) {
      price.push("10$");
    } else {
      price.push("20$");
    }
  }else if (this.movieName==="ReadyPlayerOne") {
    if (this.movieTime < 6) {
      price.push("10$");
    } else {
      price.push("20$");
    }
  } else {
    return "wrong input";
  }
  return price;
}

Ticket.prototype.ticketPrint = function() {
  return this.movieName + ", at " + this.movieTime + "pm";
}

//user interface logic
$(document).ready(function() {

  $("#acrimony").click(function() {
    var movieTitle="Tyler Perry's Acrimony";
    $("#midSun").toggle();
    $("#pacRim").toggle();
    $("#rpo").toggle();
    $(".acrimonyRadio").toggle();
  });

  $("#midSun").click(function() {
    var movieTitle="Midnight Sun";
    console.log(movieTitle);
    $("#acrimony").toggle();
    $("#pacRim").toggle();
    $("#rpo").toggle();
    $(".midSunRadio").toggle();
  });

  $("#pacRim").click(function() {
    var movieTitle="Pacific Rim";
    console.log(movieTitle);
    $("#acrimony").toggle();
    $("#midSun").toggle();
    $("#rpo").toggle();
    $(".pacRimRadio").toggle();
  });

  $("#rpo").click(function() {
    var movieTitle="Ready Player One";
    console.log(movieTitle);
    $("#acrimony").toggle();
    $("#midSun").toggle();
    $("#pacRim").toggle();
    $(".rpoRadio").toggle();
  });

  $("form#movie-ticket").submit(function(event) {
    event.preventDefault();

    var inputValue = $("input:radio[name=exampleRadios]:checked").val();
    $("p#ticket-output").text("");

    if(inputValue){
      var movieName = inputValue.slice(0,-1);
      var movieTime = inputValue.slice(-1);

      var newTicket = new Ticket(movieName,movieTime);

      var ticketPrice = newTicket.getPrice();

      $("p#ticket-output").append("<span class='ticket'>" + newTicket.ticketPrint() + ", ticket price is: " + ticketPrice +  "</span>");
    } else{}

  });

});
