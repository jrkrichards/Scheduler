// Variables from HTML
let todayNow = document.querySelector("#currentDay");
let nineTime = document.querySelector('#nineHour')
let nineInput = document.querySelector('#nineInput')
let tenTime = document.querySelector("#tenHour")
let tenInput = document.querySelector("#tenInput")


// Variables for scripts
let nowDay = moment().format("dddd, MM/DD/YYYY"); 
let nowObject = moment().toObject();
const calTimeObj = [
    {

    }
]
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


// Functions




// Adjusting HTML
todayNow.innerHTML = nowDay;

for (let i = 0; i < calElementIdsObj.length; i++) {
    let time = 9
    let hour = moment().set({hour:time+i}).format("hh:00 a");
    calElementIdsObj[i].hour.textContent = hour;
    calTimeObj[i] = hour;
}
    
// EventListeners