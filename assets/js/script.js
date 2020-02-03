function update() {
  $("#month").text(moment().format("MMM"));
  $("#date").text(moment().format("DD"));
  $("#time").text(moment().format("dddd, h:mm:ss a"));
  //   setInterval(update, 1000);
}
update();

var contentTime = $("<div>");
contentTime.text("9AM");
contentTime.css("flex", "1 0 0");

$("#contentWrapper").append(contentTime);

for (i = 0; i < 9; i++) {}
