"use strict";

// Prepare all the elements
const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('.advice-text');
const adviceButton = document.querySelector('.advice-button');

// define a function for the button
function getAdvice() {

    // Prepare the request to API
    fetch('https://api.adviceslip.com/advice').then(response => {

        // console.log(response.json());
        return response.json();
    }).then(adviceData => {
        // picking from object the elements I need
        const adviceNum = adviceData.slip.id;
        const advice = adviceData.slip.advice;

        // Put the dynamic data into our elements
        adviceId.textContent = adviceNum;
        adviceText.innerHTML = `<p>${advice}</p>`;


    }).catch(error => {
        console.log(error);
    })
}

// When I click on button the page will be refresh
adviceButton.addEventListener('click', function () {
    getAdvice();
});

// When I open or refresh the page the advice will appear
window.onload = () => {
    getAdvice();
}

