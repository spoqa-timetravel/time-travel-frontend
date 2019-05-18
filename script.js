$(document).ready(function () {
  var dt = new Date();
  $("#year .data").text(dt.getFullYear());
  $("#hour .data").text(dt.getMonth()+1);
  $("#minute .data").text(dt.getDate());
  $("#start").click(function () {
    $("#year .data").text(9999);
    $("#hour .data").text(12);
    $("#minute .data").text(31);
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
          $('body').fadeOut(1000, 'linear', () => window.location.href = 'result/index.html' );
        }, 500);
    });
  })
});