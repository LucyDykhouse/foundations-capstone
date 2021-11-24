// // Access elements
// // const eventForm3 = document.querySelector("#event-form-3");
// // const eventForm4 = document.querySelector("#event-form-4");
// // const eventForm5 = document.querySelector("#event-form-5");
// // const occasionForm3 = document.querySelector('#occasion-form-3');
// // const occasionForm4 = document.querySelector('#occasion-form-4');
// // const occasionForm5 = document.querySelector('#occasion-form-5');

//   export const callDispEvt = ({ data: events }) => createEvtStructure(events);

//     export const createEvtStructure = (arr) => {
//       let evtBoxes = document.querySelectorAll('ul');
//         for(let i = 0; i < evtBoxes.length; i++) {
//           evtBoxes[i].innerHTML = ``;
//         };
//         for (let i = 0; i < arr.length; i++) {
//           const newEvt = document.createElement('li');
//           if(arr[i].status === 'unchecked') {
//             newEvt.innerHTML = `${arr[i].time}: ${arr[i].name}
//             <button id="${arr[i].id}">o</button>
//             <button id="${arr[i].id}">x</button>`
//           } else {
//             newEvt.innerHTML = `<s>${arr[i].time}: ${arr[i].name}</s>`
//           };
  
//           let dayOfEvent = document.querySelector(`#ul-${arr[i].month}-${arr[i].day}`);
//           dayOfEvent.appendChild(newEvt);
//         };
//     };

//     export const createEvt = (body) => {
//       axios
//         .post("events/", body)
//         .then(createOneEvtStructure);
//     };

//     export const submitEventHandler = (e) => {
//       e.preventDefault();
//       let eventBody = document.querySelector("#event");
//       let eventMonth = document.querySelector('#event-month');
//       let eventDay = document.querySelector("#event-day");
//       let eventTime = document.querySelector("#event-time");

//       let bodyObj = {
//         evtName: eventBody.value,
//         evtMonth: eventMonth.value,
//         evtDay: eventDay.value,
//         evtTime: eventTime.value
//       };

//       createEvt(bodyObj);

//       eventBody.value = "";
//       eventMonth.value = "";
//       eventDay.value = "";
//       eventTime.value = "";
//     };

//     export const submitOccasionHandler = (e) => {
//       e.preventDefault();
//       let occBody = document.querySelector("#occasion");
//       let occMonth = document.querySelector('#occasion-month');
//       let occDay = document.querySelector("#occasion-day");

//       let bodyObj = {
//         evtName: occBody.value,
//         evtMonth: occMonth.value,
//         evtDay: occDay.value,
//         evtTime: 'All day'
//       };

//       createEvt(bodyObj);

//       occBody.value = "";
//       occMonth.value = "";
//       occDay.value = "";
//     };

// // if(eventForm1) {
// //   eventForm1.addEventListener('submit', submitEventHandler);
// //   occasionForm1.addEventListener('submit', submitOccasionHandler);
// //   axios
// //     .get('/events-week-1')
// //     .then(callDispEvt);
// //   axios
// //     .put('/complete-week-1')
// //     .then(callDispEvt);
// // };

// // if(eventForm2) {
// //   eventForm2.addEventListener('submit', submitEventHandler);
// //   occasionForm2.addEventListener('submit', submitOccasionHandler);
// //   axios
// //     .get('/events-week-2')
// //     .then(callDispEvt);
// // };

// // if(eventForm3) {
// //   eventForm3.addEventListener('submit', submitEventHandler);
// //   occasionForm3.addEventListener('submit', submitOccasionHandler);
// //   axios
// //     .get('/events-week-3')
// //     .then(callDispEvt);
// // };

// // if (eventForm4) {
// //   eventForm4.addEventListener('submit', submitEventHandler);
// //   occasionForm4.addEventListener('submit', submitOccasionHandler);
// //   axios
// //     .get('/events-week-4')
// //     .then(callDispEvt);
// // };

// // if (eventForm5) {
// //   eventForm5.addEventListener('submit', submitEventHandler);
// //   occasionForm5.addEventListener('submit', submitOccasionHandler);
// //   axios
// //     .get('/events-week-5')
// //     .then(callDispEvt);
// // };
