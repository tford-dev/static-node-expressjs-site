
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});

//Event listener so that dark mode can be added to app. This simply swaps between dark-styles.css and styles.css stylesheets in layout.pug
document.querySelector(".about-anchor").nextElementSibling.addEventListener("click", (event)=>{
  if(event.target.innerText === "DARK MODE"){
    document.getElementById("styles").setAttribute("href", "/static/css/dark-styles.css");
    event.target.innerText = "light mode"
    event.target.classList.remove("dark-mode");
    event.target.classList.add("light-mode");
  } else {
    document.getElementById("styles").setAttribute("href", "/static/css/styles.css");
    event.target.innerText = "dark mode"
    event.target.classList.remove("light-mode");
    event.target.classList.add("dark-mode");
  }
});