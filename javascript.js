

$("#navcontainer").click(function() {
  console.log("CLICKED");
  $(this).toggleClass("active");
  $("nav").toggleClass("show");
});
var yodaImage
var yodaImageURL


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
  var pictureURL = "https://pixabay.com/api/?key=6144160-20e5db92d8083f41ba882a26a&q=yoda"
  $.ajax({
    type: 'GET',
    url: pictureURL,
  }).done(function(data) {
    console.log(data);
    var randomImage = Math.floor(Math.random()*16);
    console.log(data);
    yodaImageURL = data.hits[randomImage].pageURL;
    var image = "<p style='text-align:center'><img src='" + data.hits[randomImage].webformatURL + "'></p>";
    $("#image-space").html(image);
    console.log(randomImage);
    yodaImage = data.hits[randomImage].webformatURL;
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

var yodaHtml = '\
<a href="https://twitter.com/share" class="twitter-share-button" data-size="large"\
data-text="'+ yodaSentence + yodaImageURL + '"\
data-hashtags="yodaspeak" data-lang="en" data-show-count="false">Tweet</a>\
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\
';


      $("#randomQuoteGen").html(yodaSentence + "<br>- " + author)
      $("#tweetAtYoda").html(yodaHtml)
    }).fail(function(){
      console.log("fail");
      $("#randomQuoteGen").html("<p style='color:black'>Frog in my throat there is</p>");
      var yodaHtml = '\
      <a href="https://twitter.com/share" class="twitter-share-button" data-size="large"\
      data-text="Frog in my throat is ' + yodaImageURL + '"\
      data-lang="en" data-show-count="false">Tweet</a>\
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\
      ';
      $("#tweetAtYoda").html(yodaHtml)
    })
  })
});
