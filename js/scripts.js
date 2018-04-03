
function generatePrice(movieName) {
  this.movieName = movieName;
  this.movieTime = time;
}

$(document).ready(function() {
  $("form#movie-ticket").submit(function(event) {
    event.preventDefault();

    var checkValue = $("input:radio[name=exampleRadios]:checked").val();
    console.log(checkValue);


  });
});
