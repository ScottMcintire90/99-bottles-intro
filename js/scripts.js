var beerBottles = function(myNumber) {
  for (myNumber; myNumber > 1; myNumber--) {
    $("#lyrics").append(myNumber + " bottles of beer on the wall," + myNumber + " bottles of beer..." + '<br/>' + "take one down, pass it around, " + myNumber + " bottles of beer on the wall.");

  };
};


$(document).ready(function() {
  $("form#99bottles").submit(function(event) {
    var myNumber = parseInt($("input#myNumber").val());
    var bottles = beerBottles(myNumber);

  event.preventDefault();
  });
});
