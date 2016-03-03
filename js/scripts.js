var beerBottles = function(myNumber) {
  for (myNumber; myNumber > 2; myNumber--) {
    return (myNumber + " bottles of beer on the wall, " + myNumber + " bottles of beer..." + '<br/>' + "take one down, pass it around, " + (myNumber - 1) + " bottles of beer on the wall." + '<br/>' + '<br/>');
  };
  if (myNumber === 2) {
    return ("2 bottles of beer on the wall, 2 bottles of beer..." + '<br/>'+ "take one down, pass it around, 1 bottle of beer on the wall.");
  } else {
  };
    return ('<br/>' + '<br/>' + "1 bottle of beer on the wall, 1 bottle of beer..." + '<br/>'+ "take one down, pass it around, no more bottles of beer on the wall.");
};


$(document).ready(function() {
  $("form#99bottles").submit(function(event) {
    var myNumber = parseInt($("input#myNumber").val());

    for (myNumber; myNumber > 0; myNumber--) {
    var bottles = beerBottles(myNumber);

    $("#lyrics").append(bottles);

  };

  event.preventDefault();
  });
});
