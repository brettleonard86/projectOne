$(document).on('click', '#submit', function() {
  var searchType = $('#quoteType').val()
  var opts = {
    lines: 8 // The number of lines to draw
  , length: 10 // The length of each line
  , width: 14 // The line thickness
  , radius: 15 // The radius of the inner circle
  , scale: .5 // Scales overall size of the spinner
  , corners: 1 // Corner roundness (0..1)
  , color: '#000' // #rgb or #rrggbb or array of colors
  , opacity: 0.25 // Opacity of the lines
  , rotate: 0 // The rotation offset
  , direction: 1 // 1: clockwise, -1: counterclockwise
  , speed: 1 // Rounds per second
  , trail: 60 // Afterglow percentage
  , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
  , zIndex: 2e9 // The z-index (defaults to 2000000000)
  , className: 'spinner' // The CSS class to assign to the spinner
  , top: '50%' // Top position relative to parent
  , left: '50%' // Left position relative to parent
  , shadow: false // Whether to render a shadow
  , hwaccel: false // Whether to use hardware acceleration
  , position: 'absolute' // Element positioning
  };

  var spinner = new Spinner(opts).spin();
  $('#randomQuoteGen').html(spinner.el);
  var pictureURL = "https://api.gettyimages.com/v3/search/images?phrase=yoda"
  $.ajax({
    type: 'GET',
    beforeSend: function(request) {
      request.setRequestHeader("Api-Key","wxrxqequqxkpjjcc7zuhc33a");
    },
    url: pictureURL,
  }).done(function(data) {
    console.log(data)
  })

  var queryURL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=' + searchType + '&count=1';
  $.ajax({
  type: "GET",
  beforeSend: function(request) {
    request.setRequestHeader("X-Mashape-Key", "0d5VBPMK1qmshZ6l7Tr5SY6iUevop1SlBZijsnZMaVzStdHLhO");
  },
  url: queryURL,
  }).done(function(response) {
    var sentence1 = response.quote;
    var sentence2 = sentence1.split(' ').join('+');
    var yodaQueryURL = 'https://yoda.p.mashape.com/yoda?sentence=' + sentence2;
    var author = response.author;
    console.log(response);
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
      var yodaSentence = data;
      $("#randomQuoteGen").html(yodaSentence + "<br>- " + author)
    })
  })
});
