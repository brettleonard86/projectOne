$(document).on('click', '#submit', function() {

  var spinner = new Spinner().spin();
  $('#randomQuoteGen').html(spinner.el);

  var queryURL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1';
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
// var opts = {
//   lines: 13 // The number of lines to draw
// , length: 28 // The length of each line
// , width: 14 // The line thickness
// , radius: 42 // The radius of the inner circle
// , scale: 1 // Scales overall size of the spinner
// , corners: 1 // Corner roundness (0..1)
// , color: '#000' // #rgb or #rrggbb or array of colors
// , opacity: 0.25 // Opacity of the lines
// , rotate: 0 // The rotation offset
// , direction: 1 // 1: clockwise, -1: counterclockwise
// , speed: 1 // Rounds per second
// , trail: 60 // Afterglow percentage
// , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
// , zIndex: 2e9 // The z-index (defaults to 2000000000)
// , className: 'spinner' // The CSS class to assign to the spinner
// , top: '50%' // Top position relative to parent
// , left: '50%' // Left position relative to parent
// , shadow: false // Whether to render a shadow
// , hwaccel: false // Whether to use hardware acceleration
// , position: 'absolute' // Element positioning
// };
var target = $("#randomQuote");


// target.appendChild(spinner.el);
