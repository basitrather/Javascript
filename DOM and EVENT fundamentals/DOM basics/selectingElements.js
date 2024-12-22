"use strict";

// Selecting an element by its tag name; returns an HTMLCollection of all <h1> elements
const html = document.getElementsByTagName("h1");

// Selecting an element by its unique ID; returns the specific element with id="id"
const id = document.getElementById('id');

// Selecting elements by their class name; returns an HTMLCollection of all elements with class="k1"
const clas = document.getElementsByClassName("k1");

// Selecting the first element that matches the CSS selector '.k1'; returns a single element
const query = document.querySelector('#id'); // if the element is class use . before and if the element is id use hash(#) before

// Selecting all elements that match the CSS selector 'body'; returns a NodeList of all matches. whcih means Selecting an element with querySelectorAll gets all matching elements
const queryAll = document.querySelectorAll('body');
