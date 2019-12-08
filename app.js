$(document).ready(function() {
  // Loads quote on page load
  getQuote();

  $("#getQuote").click(getQuote);
});

function getQuote() {
  $(document.body).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
  $.ajax({
    type: "POST",
    url: "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1&cat=famous",
    responseType: "json",
    success: function(response) {
      showQuote(response);
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + response.quote + '" - ' + response.author));
    },
    error: function() {
      alert('Error retreiving quote');
    },
    beforeSend: setHeader
  });

  function setHeader(xhr) {
    xhr.setRequestHeader("x-rapidapi-key", "sUHZ623ia5mshGZPh9XMvWs06Ltcp1zBgy1jsnyx6wQE0Wwnxl");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
  }
}

function showQuote(response) {
  console.log(response);
  console.log(response[0].quote);
  console.log(response[0].author);

  $('#quote').text(response[0].quote);
  $('#author').text(response[0].author);
}

var colors = [
  '#4286f4',
  '#f4417a',
  '#58f441',
  '#41f4f4',
  '#f1f441'
]
