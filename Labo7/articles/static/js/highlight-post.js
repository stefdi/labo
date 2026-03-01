$(document).ready(function () {
  $(".one-post").hover(
    function (event) {
      $(event.currentTarget)
        .find(".one-post-shadow")
        .stop(true)
        .animate({ opacity: "0.1" }, 300);
    },
    function (event) {
      $(event.currentTarget)
        .find(".one-post-shadow")
        .stop(true)
        .animate({ opacity: "0" }, 300);
    }
  );

  var $logo = $(".header img");
  if ($logo.length) {
    var origW = $logo.width();
    var origH = $logo.height();

    $logo.hover(
      function () {
        var newW = origW + 20;
        var newH = Math.round(origH * (newW / origW));
        $(this).stop(true).animate({ width: newW + "px", height: newH + "px" }, 200);
      },
      function () {
        $(this).stop(true).animate({ width: origW + "px", height: origH + "px" }, 200);
      }
    );
  }
});
