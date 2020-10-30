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
const appointments = localStorage.getItem('appointments') || [" ", " ", " ", " ", " ", " ", " ", " ", " "]


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

for (let i = 0; i < calElementIdsObj.length; i++) {
    let inputID = calElementIdsObj[i].input.id
    let inputNeed = $(`#${inputID}`)
    let appointInput = localStorage.getItem(`${i}`)
    inputNeed.attr('placeholder', appointInput)
    console.log(inputID)
    console.log(appointInput)
}
// let test = calElementIdsObj[0].input.id
// let test1 = $(`#${test}`)
// test1.placeholder = "test"
// console.log(test1)
// let test = $('#tenInput')[0];
// let placeholderTest = appointments[0].toString();
// console.log(calElementIdsObj[0].input.id)
// test.placeholder = placeholderTest;

// Functions

    
// EventListeners
// ENDED HERE NEED TO WORK THROUGH BUGS IN STORAGE
$(":button").click(function (event) {
    event.preventDefault();
    let currentId = $(this).attr("id");
    let currentIndex = buttonObj[currentId] 
    let currentAppoint = calElementIdsObj[currentIndex].input.value
    appointments[currentIndex] = currentAppoint;
    localStorage.setItem(`${currentIndex}`, currentAppoint);
    console.log(currentId +" is clicked!")
    console.log(`${currentIndex}`)
});

console.log(localStorage.getItem('0'))
console.log(appointments)
console.log(appointments[0])