var queryURL = "https://hp-api.herokuapp.com/api/characters";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var parsed = JSON.parse(response);
  var randomNumber = getRandomInt(parsed.length);
//   var text = $("<p>").text(
//     parsed[randomNumber].text + "       -" + parsed[randomNumber].author
//   );
//   var author = $("<p>").text(parsed[randomNumber].author);
//   $("#randomQuote").html(text);
//   console.log(response.text.author);

//   for (var i = 0; i < parsed.length; i++) {
//     randomQuote.append(p);
//     randomQuote.append(author);
//     console.log(response.text.author);
//     $("#randomQuote").prepend(randomQuote);
//   }
// });
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
}



  // for display
// -------------------------------

// <div id="randomQuote" type="text-center" class="getPumped text-center">
//   Get Pumped!
// 			</div>