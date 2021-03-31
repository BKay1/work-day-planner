//use moment.js to add date to app header

const getCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, Do [of] MMMM YYYY");
  dateTime.text(displayNow);
};

const renderCalenderEvents = () => {
  const plannerEvents = localStorage.getItem("plannerEvents");

  if (plannerEvents !== null) {
    //declare variable to get current hour
    // const currentHour = moment().hour();

    //delete this and reinstate up
    const currentHour = 11;

    //get time block elements in an array
    const timeBlocksArray = $(".container .row");
    const callback = function () {
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      //time-blocks to be colour coded
      if (timeBlockTime === currentHour) {
        $(this).find("textarea").removeClass("past").addClass("present");
      }
      if (timeBlockTime > currentHour) {
        $(this).find("textarea").removeClass("past").addClass("future");
      }
    };
    timeBlocksArray.each(callback);
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

// on ready function
const onReady = () => {
  getCurrentDate();
  renderCalenderEvents();
};

$("document").ready(onReady);

//create save function of planner entry with event listener

//set planner entry in local storage

//entries need to be seen after app refresh
