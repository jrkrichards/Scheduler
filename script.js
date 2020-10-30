// Variables from HTML
const calElementIdsObj = [
    {hour: document.querySelector('#nineHour'),
    input: document.querySelector('#nineInput')},
    {hour: document.querySelector('#tenHour'),
    input: document.querySelector('#tenInput')},
    {hour: document.querySelector('#elevenHour'),
    input: document.querySelector('#elevenInput')},
    {hour: document.querySelector('#twelveHour'),
    input: document.querySelector('#twelveInput')},
    {hour: document.querySelector('#oneHour'),
    input: document.querySelector('#oneInput')},
    {hour: document.querySelector('#twoHour'),
    input: document.querySelector('#twoInput')},
    {hour: document.querySelector('#threeHour'),
    input: document.querySelector('#threeInput')},
    {hour: document.querySelector('#fourHour'),
    input: document.querySelector('#fourInput')},
    {hour: document.querySelector('#fiveHour'),
    input: document.querySelector('#fiveInput')},
]
const buttonObj = {
    nineButton: 0,
    tenButton: 1,
    elevenButton: 2,
    twelveButton: 3,
    oneButton: 4,
    twoButton: 5,
    threeButton: 6,
    fourButton: 7,
    fiveButton: 8,
}

// Variables for scripts
let nowDay = moment().format("dddd, MM/DD/YYYY"); 
let nowObject = moment().toObject();
const calTimeObj = [{}]
const calInputObj = []
let appArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
const appointments = localStorage.getItem('appointments')


// Adjusting HTML
$("#currentDay").text(nowDay)
for (let i = 0; i < calElementIdsObj.length; i++) {
    let time = 9
    let hour = moment().set({hour:time+i}).format("hh:00 a");
    calElementIdsObj[i].hour.textContent = hour;
    calTimeObj[i] = moment().set({hour:time+i}).toObject();
}

for (let i = 0; i < calElementIdsObj.length; i++) {
    if(nowObject.hours > calTimeObj[i].hours) {
        calElementIdsObj[i].input.style.backgroundColor = 'red';
    }
    else if(nowObject.hours === calTimeObj[i].hours) {
        calElementIdsObj[i].input.style.backgroundColor = 'lightgreen';
    }
    else {
        calElementIdsObj[i].input.style.backgroundColor = 'lightblue';
    }   
}

// Functions

    
// EventListeners
// Ended here need to finish function so input is saved to memory and is appended to the correct input. Do this by saving it to the same object number in the object above then calling that objet number. consider making an object in here with the key being the id of the button and the value being the index needed to be adjusted. 
$(":button").click(function (event) {
    event.preventDefault();
    let currentId = $(this).attr("id");
    let currentIndex = buttonObj[currentId] 
    let currentAppoint = calElementIdsObj[currentIndex].input.value
    console.log(currentId + ' is clicked!');
    console.log(currentIndex);
    console.log(currentAppoint)
    appArray[currentIndex] = currentAppoint;
    console.log(appArray)

    localStorage.setItem('appointments', appArray);

   console.log(localStorage.getItem('appointments'));
});
console.log(appointments)