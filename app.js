$(document).ready(function() {
  // Loads quote on page load
  $.ajax({
    type: "POST",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    responseType: "json",
    success: function(response) {
      showQuote(response);
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

  $("#getQuote").click(getQuote);
});

function getQuote() {
  $.ajax({
    type: "POST",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    responseType: "json",
    success: function(response) {
      showQuote(response);
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
