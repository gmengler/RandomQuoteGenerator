$(document).ready(function() {
  $("#getQuote").click(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
      dataType: "json",
      success: function(data) {
        console.log(data);

        var $quote = $('<p>').text(data.quote);
        var $author = $('<h3>').text(data.author);

        $('.quote')
          .append($quote)
          .append($author);

      },
      error: function() { alert('boo!'); },
      beforeSend: setHeader
    });

    function setHeader(xhr) {
      xhr.setRequestHeader("X-Mashape-Key", "pmTSpn6I45mshpuPkHokTQ01lAo1p1ugEH1jsnoOS19Gk3KQvB");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Accept", "application/json");
    }
  });
});
