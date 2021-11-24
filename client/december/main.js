// Access elements
const eventForm1 = document.querySelector("#event-form-1");
const eventForm2 = document.querySelector("#event-form-2");
const eventForm3 = document.querySelector("#event-form-3");
const eventForm4 = document.querySelector("#event-form-4");
const eventForm5 = document.querySelector("#event-form-5");
const occasionForm1 = document.querySelector('#occasion-form-1');
const occasionForm2 = document.querySelector('#occasion-form-2');
const occasionForm3 = document.querySelector('#occasion-form-3');
const occasionForm4 = document.querySelector('#occasion-form-4');
const occasionForm5 = document.querySelector('#occasion-form-5');

//const callDispEvt = ({ data: events }) => displayEvts(events);

function displayEvts(evt) {
    createEvtStructure(evt.data);
}

function createEvtStructure(evt) {
    console.log(evt);
    const newEvt = document.createElement('li');
    if(evt.status === 'unchecked') {
      newEvt.innerHTML = `${evt.time}: ${evt.name}
            <button onclick="deleteEvt(${evt.id})">cancel</button>
            <button onclick="updateEvt(${evt.id})">mark complete</button>`;
    } else {
      newEvt.innerHTML = `<s>${evt.time}: ${evt.name}</s>`
    };

    let dayOfEvent = document.querySelector(`#ul-${evt.month}-${evt.day}`);
    dayOfEvent.appendChild(newEvt);  
};

const createEvt = (body) => {
    axios.post("events/", body)
        .then(displayEvts);
};

function submitEventHandler(e) {
    e.preventDefault();
    let eventBody = document.querySelector("#event");
    let eventMonth = document.querySelector('#event-month');
    let eventDay = document.querySelector("#event-day");
    let eventTime = document.querySelector("#event-time");

    let bodyObj = {
      evtName: eventBody.value,
      evtMonth: eventMonth.value,
      evtDay: eventDay.value,
      evtTime: eventTime.value
    };

    createEvt(bodyObj);

    eventBody.value = "";
    eventMonth.value = "";
    eventDay.value = "";
    eventTime.value = "";
};

function submitOccasionHandler(e) {
    e.preventDefault();
    let occBody = document.querySelector("#occasion");
    let occMonth = document.querySelector('#occasion-month');
    let occDay = document.querySelector("#occasion-day");

    let bodyObj = {
      evtName: occBody.value,
      evtMonth: occMonth.value,
      evtDay: occDay.value,
      evtTime: 'All day'
    };

    createEvt(bodyObj);

    occBody.value = "";
    occMonth.value = "";
    occDay.value = "";
};

if(eventForm1) {
  eventForm1.addEventListener('submit', submitEventHandler);
  occasionForm1.addEventListener('submit', submitOccasionHandler);
};

if(eventForm2) {
  eventForm2.addEventListener('submit', submitEventHandler);
  occasionForm2.addEventListener('submit', submitOccasionHandler);
};

if(eventForm3) {
  eventForm3.addEventListener('submit', submitEventHandler);
  occasionForm3.addEventListener('submit', submitOccasionHandler);
};

if (eventForm4) {
  eventForm4.addEventListener('submit', submitEventHandler);
  occasionForm4.addEventListener('submit', submitOccasionHandler);
};

if (eventForm5) {
  eventForm5.addEventListener('submit', submitEventHandler);
  occasionForm5.addEventListener('submit', submitOccasionHandler);
};
