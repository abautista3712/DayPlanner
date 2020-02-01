function update() {
  $("#month").text(moment().format("MMM"));
  $("#date").text(moment().format("DD"));
  $("#time").text(moment().format("dddd, h:mm:ss a"));
  setInterval(update, 1000);
}

update();
