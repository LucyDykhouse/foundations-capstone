// Access elements from html
const eventForm1 = document.querySelector("#event-form-1");
const occasionForm1 = document.querySelector("#occasion-form-1");
const eventForm2 = document.querySelector("#event-form-2");
const occasionForm2 = document.querySelector('#occasion-form-2');
const eventForm3 = document.querySelector("#event-form-3");
const occasionForm3 = document.querySelector('#occasion-form-3');
const eventForm4 = document.querySelector("#event-form-4");
const occasionForm4 = document.querySelector('#occasion-form-4');
const eventForm5 = document.querySelector("#event-form-5");
const occasionForm5 = document.querySelector('#occasion-form-5');
const eventForm6 = document.querySelector("#event-form-6");
const occasionForm6 = document.querySelector('#occasion-form-6');

// REST request methods
const getEvents = () => {
  axios.get("get-evts").then(callDispEvt);
};

const createEvt = (body) => {
  axios.post("post-evt/", body).then(callDispEvt);
};

const updateEvt = (id) => {
  axios.put(`complete-evt/${id}`).then(callDispEvt);
};

const deleteEvt = (id) => {
  axios.delete(`delete-evt/${id}`).then(callDispEvt);
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

    // Loop to generate events for week view (if statement) or month view (else statement)
    if (eventForm1 || eventForm2 || eventForm3 || eventForm4 || eventForm5 || eventForm6) {
      if (arr[i].status === "unchecked") {
        newEvt.innerHTML = `${arr[i].time}: ${arr[i].name}
              <button onclick="updateEvt(${arr[i].id})">o</button>
              <button onclick="deleteEvt(${arr[i].id})">x</button>`;
      } else {
        newEvt.innerHTML = `<s>${arr[i].time}: ${arr[i].name}</s>`;
      }
    } else {
      if (arr[i].status === "unchecked") {
        newEvt.innerHTML = `${arr[i].time}: ${arr[i].name}`;
      } else {
        newEvt.innerHTML = `<s>${arr[i].time}: ${arr[i].name}</s>`;
      }
    };
    
    // Add new events to page
    let dayOfEvent = document.querySelectorAll(`#ul-${arr[i].month}-${arr[i].day}`);
    if (dayOfEvent) {dayOfEvent.forEach(day => day.appendChild(newEvt))} else {alert("Invalid date!")};
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

//Add event listeners to forms when viewing that week
if (eventForm1 && occasionForm1) {
  eventForm1.addEventListener("submit", submitEventHandler);
  occasionForm1.addEventListener("submit", submitOccasionHandler);
}

if (eventForm2 && occasionForm2) {
  eventForm2.addEventListener("submit", submitEventHandler);
  occasionForm2.addEventListener("submit", submitOccasionHandler);
}

if (eventForm3 && occasionForm3) {
  eventForm3.addEventListener("submit", submitEventHandler);
  occasionForm3.addEventListener("submit", submitOccasionHandler);
}

if (eventForm4 && occasionForm4) {
  eventForm4.addEventListener("submit", submitEventHandler);
  occasionForm4.addEventListener("submit", submitOccasionHandler);
}

if (eventForm5 && occasionForm5) {
  eventForm5.addEventListener("submit", submitEventHandler);
  occasionForm5.addEventListener("submit", submitOccasionHandler);
}

if (eventForm6 && occasionForm6) {
  eventForm6.addEventListener("submit", submitEventHandler);
  occasionForm6.addEventListener("submit", submitOccasionHandler);
}

// Get events for month and weeks
getEvents();
