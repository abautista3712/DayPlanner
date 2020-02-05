// Function to update month/date/time
function update() {
  $("#month").text(moment().format("MMM"));
  $("#date").text(moment().format("DD"));
  $("#time").text(moment().format("dddd, h:mm:ss a"));
  setInterval(update, 1000);
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
  contentTime.attr("id", hour);
  contentTime.attr("class", "flexCenter");
  if (hour < 6) {
    contentTime.text(hour + " PM");
  } else if (hour < 12) {
    contentTime.text(hour + " AM");
  } else if (hour === 12) {
    contentTime.text(hour + " PM");
  }
  contentTime.css("flex", "1 0 0");
  contentTime.css("border-right", "solid");

  //   Highlight past time in lightgrey

  // Afternoon
  if (moment().hour() > 12) {
    if (hour < moment().hour() - 12) {
      contentTime.css("background-color", "lightgrey");
    }
    if (hour > 8) {
      contentTime.css("background-color", "lightgrey");
    }
    // Morning
  } else if (moment().hour() < 12) {
    if (hour < moment().hour()) {
      contentTime.css("background-color", "lightgrey");
    }
  }

  //   Highlight current time in lightblue
  if (hour === moment().hour()) {
    contentTime.css("background-color", "lightblue");
  } else if (hour === moment().hour() - 12) {
    contentTime.css("background-color", "lightblue");
  }

  //   User input element
  var contentInput = $("<input>");
  contentInput.attr("id", hour + "input");
  contentInput.attr("class", "userInput");
  contentInput.attr("placeholder", "Free Time");
  contentInput.css("display", "flex");
  contentInput.css("flex", "5 0 0");
  //   contentInput.css("border-right", "solid");
  contentInput.css("font-family", "Bebas Neue, cursive");

  //   Save div element
  var contentSave = $("<div>");
  contentSave.attr("id", hour + "save");
  contentSave.attr("class", "userSave flexCenter");
  contentSave.text("SAVE");
  contentSave.css("flex", "1 0 0");
  contentSave.css("border-left", "solid");

  //   Appends elements to row wrapper
  $(rowWrapper).append(contentTime);
  $(rowWrapper).append(contentInput);
  $(rowWrapper).append(contentSave);
  //   Appends row wrapper to HTML
  $("#contentWrapper").append(rowWrapper);
}

// User input data is saved to localStorage upon clicking save
function saveOnClick(idVal) {
  $(document).on("click", "#" + idVal + "save", function() {
    localStorage.setItem(idVal, $("#" + idVal + "input").val());
  });
}

// Save buttons change color upon user click
function colorOnClick(idVal) {
  $(document).on("click", "#" + idVal + "save", function() {
    $("#" + idVal + "save").css({
      transition: "background-color 1s ease",
      "background-color": "#aaf0d1"
    });
  });
}

// Generates rows 9AM - 12PM
for (i = 9; i < 13; i++) {
  contentRow(i);
  saveOnClick(i);
  colorOnClick(i);
  $("#" + i + "input").val(localStorage.getItem(i));
}
// Generates rwos 1PM - 5PM
for (j = 1; j < 6; j++) {
  contentRow(j);
  saveOnClick(j);
  colorOnClick(j);
  $("#" + j + "input").val(localStorage.getItem(j));
}
