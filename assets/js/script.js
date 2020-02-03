function update() {
  $("#month").text(moment().format("MMM"));
  $("#date").text(moment().format("DD"));
  $("#time").text(moment().format("dddd, h:mm:ss a"));
  //   setInterval(update, 1000);
}
update();

function contentRow(hour) {
  var rowWrapper = $("<div>");
  rowWrapper.css("display", "flex");
  rowWrapper.css("flex-flow", "row wrap");
  rowWrapper.css("height", "10vh");
  rowWrapper.css("width", "100%");
  rowWrapper.css("border-bottom", "solid");

  var contentTime = $("<div>");
  contentTime.text(hour + "AM");
  contentTime.attr("class", "flexCenter");
  contentTime.css("flex", "1 0 0");
  contentTime.css("border-right", "solid");

  var contentInput = $("<div>");
  contentInput.text("BLANK");
  contentInput.css("display", "flex");
  contentInput.css("flex", "8 0 0");
  contentInput.css("border-right", "solid");

  var contentSave = $("<div>");
  contentSave.text("SAVE");
  contentSave.attr("class", "flexCenter");
  contentSave.css("flex", "1 0 0");

  $(rowWrapper).append(contentTime);
  $(rowWrapper).append(contentInput);
  $(rowWrapper).append(contentSave);
  $("#contentWrapper").append(rowWrapper);
}

for (i = 9; i < 13; i++) {
  contentRow(i);
}
for (j = 1; j < 6; j++) {
  contentRow(j);
}
