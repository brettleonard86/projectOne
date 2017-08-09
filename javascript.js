$(document).on('click', '#submit', function() {
  var queryURL = "http://andruxnet-random-famous-quotes.p.mashape.com/"
  $.ajax({
    url: gueryURL,
    method: 'GET',
  }).done(function(response) {
    console.log(response)
  })
})
