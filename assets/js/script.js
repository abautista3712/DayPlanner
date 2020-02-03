function update() {
  $("#month").text(moment().format("MMM"));
  $("#date").text(moment().format("DD"));
  $("#time").text(moment().format("dddd, h:mm:ss a"));
  //   setInterval(update, 1000);
}
update();

var contentTime = $("<div>");
contentTime.text("9AM");
contentTime.css("flex-grow", "1");
contentTime.css("border-right", "solid");

var contentInput = $("<div>");
contentInput.text("BLANK");
contentInput.css("flex-grow", "8");
contentInput.css("border-right", "solid");

var contentSave = $("<div>");
contentSave.text("SAVE");
contentSave.css("flex-grow", "1");

$("#contentWrapper").append(contentTime);
$("#contentWrapper").append(contentInput);
$("#contentWrapper").append(contentSave);

for (i = 0; i < 9; i++) {}
