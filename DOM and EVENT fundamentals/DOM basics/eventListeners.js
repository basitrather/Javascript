'use strict';
// About the EventListener is in the readme file 

// syntax
// element.addEventListener('click', function (event) {
// Code to execute when the element is clicked
// });
// element: The HTML element to attach the click listener to.
// 'click': The event type to listen for.
// function(event): The function that runs when the click happens; the event contains details about the action.

//  example:
document.querySelector('.k1').addEventListener('click', function () {
    document.querySelector('.k1').textContent = `event happened`;
});
// This will change the text content inside the span of class '.k1' to event happened everytime an event happens :)

