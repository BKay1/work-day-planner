//use moment.js to add date to app header

const getCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, Do [of] MMMM YYYY");
  dateTime.text(displayNow);
};

//on load of page render the calender events
const renderPlannerEvents = () => {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  if (plannerEvents !== null) {
    //declare variable to get current hour from moment.js

    const currentHour = moment().hour();

    //get time block elements in an array
    const timeBlocksArray = $(".container .row");
    const callback = function () {
      const textArea = $(this).find("textarea");
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      //time-blocks to be colour coded
      if (timeBlockTime === currentHour) {
        textArea.removeClass("past").addClass("present");
      }
      if (timeBlockTime > currentHour) {
        textArea.removeClass("past").addClass("future");
      }

      const plannedEvent = plannerEvents[timeBlockTime];
      textArea.text(plannedEvent);
    };
    timeBlocksArray.each(callback);
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

//on button click get items from local storage into planner
const onClick = function (event) {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));
  const target = $(event.target);
  const currentTarget = $(event.currentTarget);
  if (target.is("button")) {
    const key = target.attr("id");
    const value = target.parent().find("textarea").val();

    const newObject = {
      ...plannerEvents,
      [key]: value,
    };
    localStorage.setItem("plannerEvents", JSON.stringify(newObject));
  }
};

// on ready function get current date and render planner events
const onReady = () => {
  //set event listener on container
  $(".container").click(onClick);
  getCurrentDate();
  renderPlannerEvents();
};

$("document").ready(onReady);
