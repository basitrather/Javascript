/*
 IntersectionObserver
IntersectionObserver tells us WHEN an element
enters or leaves the visible screen (viewport).
Think:"Tell me when this element becomes visible."
BASIC STRUCTURE (ALWAYS SAME)
1. Create observer
2. Observe an element
*/

// Example
let observer = new IntersectionObserver((entries) => {
  let entry = entries[0];
  if (entry.isIntersecting) {
    console.log("Element is visible");
  }
});

observer.observe(element);
/*
Observer  -> the watcher
Target   -> the element being watched
Viewport -> visible screen area
Entry    -> report about visibility

Intersecting
entry.isIntersecting
true  -> element is visible
false -> element is NOT visible


root: null
→ visibility is checked relative to the screen

threshold
How much of the element must be visible.
threshold: 0
→ fires when element touches or leaves screen
threshold: 0.5
→ fires when 50% becomes visible

rootMargin
Virtual margin for the screen.
rootMargin: "-70px"
→ pretend screen is 70px smaller from top
*/

// STICKY NAVBAR (REAL USE CASE)
const navHeight = nav.getBoundingClientRect().height;

const observerNav = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  },
);

observerNav.observe(header);

// METHODS

observer.observe(el); // start watching
observer.unobserve(el); // stop watching one
observer.disconnect(); // stop watching all

// IntersectionObserver detects when an element enters or leaves the viewport efficiently.
