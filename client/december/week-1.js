// Access elements from html
const eventForm1 = document.querySelector("#event-form-1");
const occasionForm1 = document.querySelector("#occasion-form-1");

// REST request methods
const getEvents = () => {
  axios.get("events-week-1").then(callDispEvt);
};

const createEvt = (body) => {
  axios.post("post-week-1/", body).then(callDispEvt);
};

const updateEvt = (id) => {
  axios.put(`complete-week-1/${id}`).then(callDispEvt);
};

const deleteEvt = (id) => {
  axios.delete(`delete-week-1/${id}`).then(callDispEvt);
};

// Format data from back end
const callDispEvt = ({ data: events }) => createEvtStructure(events);

// Create elements on page using data from back end
const createEvtStructure = (arr) => {
  let evtBoxes = document.querySelectorAll("ul");
  for (let i = 0; i < evtBoxes.length; i++) {
    evtBoxes[i].innerHTML = ``;
  }
  for (let i = 0; i < arr.length; i++) {
    const newEvt = document.createElement("li");
    if (arr[i].status === "unchecked") {
      newEvt.innerHTML = `${arr[i].time}: ${arr[i].name}
            <button onclick="updateEvt(${arr[i].id})">o</button>
            <button onclick="deleteEvt(${arr[i].id})">x</button>`;
    } else {
      newEvt.innerHTML = `<s>${arr[i].time}: ${arr[i].name}</s>`;
    }

    let dayOfEvent = document.querySelector(
      `#ul-${arr[i].month}-${arr[i].day}`
    );
    dayOfEvent.appendChild(newEvt);
  }
};

// Handle event form submission
const submitEventHandler = (e) => {
  e.preventDefault();
  let eventBody = document.querySelector("#event");
  let eventMonth = document.querySelector("#event-month");
  let eventDay = document.querySelector("#event-day");
  let eventTime = document.querySelector("#event-time");

  let bodyObj = {
    evtName: eventBody.value,
    evtMonth: eventMonth.value,
    evtDay: eventDay.value,
    evtTime: eventTime.value,
  };

  createEvt(bodyObj);

  eventBody.value = "";
  eventMonth.value = "";
  eventDay.value = "";
  eventTime.value = "";
};

// Handle occasion form submission
const submitOccasionHandler = (e) => {
  e.preventDefault();
  let occBody = document.querySelector("#occasion");
  let occMonth = document.querySelector("#occasion-month");
  let occDay = document.querySelector("#occasion-day");

  let bodyObj = {
    evtName: occBody.value,
    evtMonth: occMonth.value,
    evtDay: occDay.value,
    evtTime: "All day",
  };

  createEvt(bodyObj);

  occBody.value = "";
  occMonth.value = "";
  occDay.value = "";
};

//Add event listeners
eventForm1.addEventListener("submit", submitEventHandler);
occasionForm1.addEventListener("submit", submitOccasionHandler);

// Get events for week
getEvents();
