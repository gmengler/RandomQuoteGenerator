$(document).ready(function() {
  // Loads quote on page load
  getQuote();

  $("#getQuote").click(getQuote);
});

function getQuote() {
  $(document.body).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
  $.ajax({
    type: "POST",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
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
    xhr.setRequestHeader("X-Mashape-Key", "pmTSpn6I45mshpuPkHokTQ01lAo1p1ugEH1jsnoOS19Gk3KQvB");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
  }
}

function showQuote(response) {
  console.log(response);

  $('#quote').text(response.quote);
  $('#author').text(response.author);
}

var colors = [
  '#4286f4',
  '#f4417a',
  '#58f441',
  '#41f4f4',
  '#f1f441'
]
