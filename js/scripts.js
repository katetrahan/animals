$(document).ready(function() {
  $("#ponyimage").click(function() {
    $("#pony").show();
    $("#dog").hide();
    $("#cow").hide();
  });
  $("#cowimage").click(function() {
    $("#cow").show();
    $("#dog").hide();
    $("#pony").hide();
  });
  $("#dogimage").click(function() {
    $("#dog").show();
    $("#pony").hide();
    $("#cow").hide();
  });
});
