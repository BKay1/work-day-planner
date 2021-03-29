//use moment.js to add date to app header

let todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);
