$(document).ready(function () {
  $("#toggle-icon").click(function () {
    $("#menu").slideToggle("fast");
  });

  $(".parent a").click(function () {
    var child = $(this).next(".child");

    $(child[0]).slideToggle("fast");

    var icons = $(this).find(".arrow-icon");

    $(icons[0]).toggleClass("active-arrow-icon");
  });

  e.preventDefault();
});

function dayNight() {
  var x = document.getElementById("light");
  var y = document.getElementById("dark");
  if (x.style.display === "none") {
    y.style.display = "none";
    x.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
