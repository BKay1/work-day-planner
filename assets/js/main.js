// on ready function

//use moment.js to add date to app header

const getCurrentDateTime = () => {
  const dateTime = moment().format("Do [of] MMMM, YYYY, HH:mm:ss");
  return dateTime;
};

const startTimer = () => {
  const timerTick = () => {
    const dateTimeText = getCurrentDateTime();
    $(".clock").text(dateTimeText);
  };

  setInterval(timerTick, 1000);
};

const main = () => {
  startTimer();
};

$("document").ready(main);

//create save function of planner entry with event listener

//set planner entry in local storage

//entries need to be seen after app refresh

//time-blocks to be colour coded
