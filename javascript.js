$(document).on('click', '#submit', function() {
  var queryURL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1'
  $.ajax({
  type: "GET",
  beforeSend: function(request) {
    request.setRequestHeader("X-Mashape-Key", "0d5VBPMK1qmshZ6l7Tr5SY6iUevop1SlBZijsnZMaVzStdHLhO");
  },
  url: queryURL,
  }).done(function(response) {
    console.log(response)
  })
})
