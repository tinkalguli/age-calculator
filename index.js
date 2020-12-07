const form = document.querySelector(".form");
const h2 = document.querySelector("h2");

const yearInput = document.querySelector(".year");
const monthInput = document.querySelector(".month");
const dayInput = document.querySelector(".day");

let userYear = 0;
let userMonth = 0;
let userDay = 0;

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();

form.addEventListener("input", (event) => {
    if (event.target.className == "year") {
        userYear = event.target.value;
    }

    if (event.target.className == "month") {
        userMonth = event.target.value;
    }

    if (event.target.className == "day") {
        userDay = event.target.value;
    }

    if(userDay > currentDay) {
        currentDay += 30;
        currentMonth -= 1;
    }

    if(userMonth > currentMonth) {
        currentMonth += 12;
        currentYear -= 1;
    }

    let resultYear = currentYear - userYear;
    let resultMonth = currentMonth + 1 - userMonth;
    let resultDay = currentDay - userDay;

    if (resultDay > 30) {
        resultMonth += 1;
        resultDay = resultDay - 30;
    }

    if (resultMonth > 12) {
        resultYear += 1;
        resultMonth = resultMonth - 12;
    }

    h2.innerText = "";

    h2.innerText = `Year : ${resultYear}
        Month : ${resultMonth}
        Day : ${resultDay}`;

});