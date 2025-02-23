const dayInput = document.getElementById('dayBox');
const monthInput = document.getElementById('monthBox');
const yearInput = document.getElementById('yearBox');
const iconArrow = document.getElementById('iconArrow');
const yearInfo = document.getElementById('yearInfo');
const monthInfo = document.getElementById('monthInfo');
const dayInfo = document.getElementById('dayInfo');
const feedbackDay = document.getElementById('feedbackDay');
const feedbackMonth = document.getElementById('feedbackMonth');
const feedbackYear = document.getElementById('feedbackYear');
const birthday = document.getElementById('birthday');

let isDayValid = false;
let isMonthValid = false;
let isYearValid = false;



dayInput.addEventListener('input', () => {
    feedbackDay.style.color = 'red';
    feedbackDay.style.fontSize = '8px';
    feedbackDay.style.fontFamily = 'poppinsItalic';
    const currentValue = dayInput.value.trim();
    const validValue = dayInput.value.replace(/[^\d]/g, '');
    if (dayInput.value !== validValue) {
        dayInput.value = validValue;
    }

    if (currentValue == '') {
        dayInput.style.border = '2px solid red';
        feedbackDay.textContent = 'This Field is Required';

    }

    if (dayInput.value < 1 || dayInput.value > 31) {
        dayInput.style.border = '2px solid red';
        feedbackDay.textContent = 'Must be a valid day';
    } else {
        dayInput.style.border = '';
        feedbackDay.textContent = '';
        isDayValid = true;
    }
})

monthInput.addEventListener('input', () => {
    feedbackMonth.style.color = 'red';
    feedbackMonth.style.fontSize = '8px';
    feedbackMonth.style.fontFamily = 'poppinsItalic';
    const currentValue = monthInput.value.trim();
    const validValue = monthInput.value.replace(/[^\d]/g, '');
    if (monthInput.value !== validValue) {
        monthInput.value = validValue;
    }

    if (currentValue == '') {
        monthInput.style.border = '2px solid red';
        feedbackMonth.textContent = 'This Field is Required';

    }
    if (monthInput.value < 1 || monthInput.value > 12) {
        monthInput.style.border = '2px solid red';
        feedbackMonth.textContent = 'Must be a valid month';
    } else {
        monthInput.style.border = '';
        feedbackMonth.textContent = '';
        isMonthValid = true;

    }
})

let date = new Date();
yearInput.addEventListener('input', () => {
    feedbackYear.style.color = 'red';
    feedbackYear.style.fontSize = '8px';
    feedbackYear.style.fontFamily = 'poppinsItalic';
    let year = date.getFullYear();
    console.log(year);
    const currentValue = yearInput.value.trim();
    const validValue = yearInput.value.replace(/[^\d]/g, '');
    if (yearInput.value !== validValue) {
        yearInput.value = validValue;
    }

    if (currentValue == '') {
        yearInput.style.border = '2px solid red';
        feedbackYear.textContent = 'This Field is Required';
    }
    if (yearInput.value >= year) {
        yearInput.style.border = '2px solid red';
        feedbackYear.textContent = 'Must Be in the past';
    } else {
        yearInput.style.border = '';
        feedbackYear.textContent = '';
        isYearValid = true;
    }
})


iconArrow.addEventListener('click', () => {
    if (isDayValid == true && isMonthValid == true && isYearValid == true) {
        let day = dayInput.value;
        let month = monthInput.value;
        let year = yearInput.value;
        let actualDate = date.getDate();
        let actualMonth = date.getMonth() + 1;
        let actualYear = date.getFullYear();
        let age = actualYear - year;
        let ageMonth = actualMonth - month;
        let ageDay = actualDate - day;

        if (ageDay < 0) {
            ageMonth--;
            // Get the number of days in the previous month:
            const lastDayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
            ageDay += lastDayOfPrevMonth;
        }

        if (ageMonth < 0) {
            age--;
            ageMonth += 12;
        }
        yearInfo.textContent = `${age}`;

        monthInfo.textContent = `${ageMonth}`;

        dayInfo.textContent = `${ageDay}`;
        if (actualMonth == month && actualDate == day) {
            const birthdayText = document.createElement('span');
            birthdayText.textContent = 'Today is your birthday!!';
            birthday.appendChild(birthdayText);
        }
    } else {
        alert('Fill all details correctly');

    }
})