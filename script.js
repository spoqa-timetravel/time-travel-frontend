$(document).ready(function() {
$(".data").each(function() {
    var n = $(this).text();
    n <= 20 ? (z = 99) : (z = 0);
    $(this)
      .prop("Counter", z)
      .animate(
        {
          Counter: n.replace(/,/g, "")
        },
        {
          duration: 1000,
          easing: "swing",
          step: function(now) {
            $(this).text(Math.ceil(now));
          },
          complete: function() {
            $(this).text(n);
          }
        }
      );
  });
});