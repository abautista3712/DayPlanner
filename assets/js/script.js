console.log("Test");

$("#month").text(moment().format("MMM"));
$("#date").text(moment().format("DD"));

$("#time").text(moment().format("dddd, h:mm:ss a"));
// console.log(moment().local());
