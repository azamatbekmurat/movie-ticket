
function Ticket(movieName, time) {
  this.movieName = movieName;
  this.movieTime = time;
  // this.movieTime = time;
  // this.discount = discount;
}

Ticket.prototype.getPrice = function()  {
  var price = [];
  if (this.movieName==="acrimony"){
    if (this.movieTime < 6) {
      price.push("10$");
    } else {
      price.push("20$");
    }
  } else if (this.movieName==="midSun$") {
    if (this.movieTime < 6) {
      price.push("30$");
    } else {
      price.push("40$");
    }
  } else {
    return "wrong input";
  }
  return price;
}

Ticket.prototype.ticketPrint = function() {
  return this.movieName + ", " + this.movieTime;
}

$(document).ready(function() {
  $("form#movie-ticket").submit(function(event) {
    event.preventDefault();

    var inputValue = $("input:radio[name=exampleRadios]:checked").val();
    var movieName = inputValue.slice(0,-1);
    var movieTime = inputValue.slice(-1);

    var newTicket = new Ticket(movieName,movieTime);

    var ticketPrice = newTicket.getPrice();

    $("ul#ticket-output").append("<li><span class='ticket'>" + newTicket.ticketPrint() + ", " + ticketPrice +  "</span></li>");

  });
});
