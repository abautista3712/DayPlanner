var isClicked = false;

// Function to update month/date/time
function update() {
  $("#month").text(moment().format("MMM"));
  $("#date").text(moment().format("DD"));
  $("#time").text(moment().format("dddd, h:mm:ss a"));
  //   setInterval(update, 1000);
}
// Function call to start updating month/date/time
update();

// Function to create day planner content rows dynamically
function contentRow(hour) {
  // Creates row wrapper to hold time, input, and save div elements
  var rowWrapper = $("<div>");
  rowWrapper.css("display", "flex");
  rowWrapper.css("flex-flow", "row wrap");
  rowWrapper.css("height", "10vh");
  rowWrapper.css("width", "100%");
  rowWrapper.css("border-bottom", "solid");
  rowWrapper.css("font-family", "Bebas Neue, cursive");

  //   Time div element
  var contentTime = $("<div>");
  if (hour < 6) {
    contentTime.text(hour + " PM");
  } else if (hour < 12) {
    contentTime.text(hour + " AM");
  } else if (hour === 12) {
    contentTime.text(hour + " PM");
  }
  contentTime.attr("class", "flexCenter");
  contentTime.css("flex", "1 0 0");
  contentTime.css("border-right", "solid");

  //   User input element
  var contentInput = $("<div>");
  contentInput.attr("id", hour + "row");
  contentInput.attr("class", "userInput");
  contentInput.text("BLANK");
  contentInput.css("display", "flex");
  contentInput.css("flex", "8 0 0");
  contentInput.css("border-right", "solid");

  //   Save div element
  var contentSave = $("<div>");
  contentSave.text("SAVE");
  contentSave.attr("class", "flexCenter");
  contentSave.css("flex", "1 0 0");

  //   Appends elements to row wrapper
  $(rowWrapper).append(contentTime);
  $(rowWrapper).append(contentInput);
  $(rowWrapper).append(contentSave);
  //   Appends row wrapper to HTML
  $("#contentWrapper").append(rowWrapper);
}

for (i = 9; i < 13; i++) {
  contentRow(i);
}
for (j = 1; j < 6; j++) {
  contentRow(j);
}

$(document).on("dblclick", ".userInput", function() {
  $(this).empty();
  var newInput = $("<input>");
  newInput.css("width", "100%");
  newInput.css("font-family", "Bebas Neue, cursive");
  $(this).append(newInput);
});
