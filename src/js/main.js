"use strict"

// TODO Check if I need this JS before making live

console.log("Hello there!")

const btns = document.querySelectorAll(".button")

// loop through buttons and add click event listener
btns.forEach(btn => {
  // for each button:
  // - find content section and store
  // - toggle 'display: hidden' from content section when clicked
  const contentSection = btn.parentElement.nextElementSibling
  btn.addEventListener("click", () => {
    contentSection.classList.toggle("display-toggle")
    console.log("I was clicked")
  })
})
