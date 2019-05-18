$(document).ready(function () {
  var dt = new Date();
  $("#year .data").text(dt.getFullYear());
  $("#hour .data").text(dt.getHours());
  $("#minute .data").text(dt.getMinutes());
  $(".moon").css('display', 'none');
  $("#start").click(function () {
    $(".moon").css('display', 'block');
    $("#year .data").text(9999);
    $("#hour .data").text(24);
    $("#minute .data").text(60);
    $(".data").each(function () {
      var max = $(this).text();
      $(this).prop("Counter", 100)
        .animate({ Counter: max.replace(/,/g, "") }, {
          duration: 1000000,
          easing: "swing",
          step: function (now) {
            $(this).text(parseInt(Math.random(now) * max));
          }
        }
        );
        setTimeout(() => {
          $('body').fadeOut(1000, 'linear', () => window.location.reload());
        }, 500);
    });
  })
});