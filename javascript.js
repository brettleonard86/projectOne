$(document).on('click', '#submit', function() {
  var queryURL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1';
  $.ajax({
  type: "GET",
  beforeSend: function(request) {
    request.setRequestHeader("X-Mashape-Key", "0d5VBPMK1qmshZ6l7Tr5SY6iUevop1SlBZijsnZMaVzStdHLhO");
  },
  url: queryURL,
  }).done(function(response) {
    var sentence1 = response.quote;
    var sentence2 = sentence1.split(' ').join('+')
    var yodaQueryURL = "'https://yoda.p.mashape.com/yoda?sentence=' + sentence2";
    console.log(response.quote);
    console.log(sentence2);
    $.ajax({
      type: "GET",
      beforeSend: function(request) {
        request.setRequestHeader("X-Mashape-Key", "DwGlBv2tmcmshJcNENrWBSMmi5Ikp1J56grjsnQmCbIvAbeMSW");
      },
      url: yodaQueryURL,
    }).done(function(data) {
      console.log(data);
    })
  })
});
