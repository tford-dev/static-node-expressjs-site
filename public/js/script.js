
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


// const sideBarInfoBox = document.getElementById("my-info-box");
// const body = document.querySelector("body");
// const article = document.getElementsByTagName("article");
// const wrapper = document.getElementsByClassName("wrapper");
// const box = document.getElementsByClassName("box");
// const nav = document.getElementsByTagName("nav");
// const sidebar = document.getElementsByClassName("sidebar");
// const thumbnail = document.getElementsByClassName("thumbnail");
// const sidebarH5 = document.querySelector(".name");
// const header = document.getElementsByClassName("header");
// const headerButton = document.querySelector("menu-icon");
// const indexH1 = document.getElementsByClassName("index-h1");
// const indexP = document.getElementsByClassName("indexP");
// const projectBoxh5 = document.querySelector("")

// document.querySelector(".dark-mode").addEventListener("click", (event)=>{
//   // document.getElementById("styles").setAttribute("href", null);
//   document.getElementById("styles").setAttribute("href", "/static/css/dark-styles.css");
//   event.target.remove();
//   document.querySelector(".sidebar-desc").insertAdjacentHTML("afterend", "<button class='light-mode'>LIGHT MODE</button>");
// });

// if(document.querySelector(".light-mode")){
//   document.querySelector(".light-mode").addEventListener("click", (e)=>{
//     // document.getElementById("styles").setAttribute("href", null);
//     document.getElementById("styles").setAttribute("href", "/static/css/styles.css");
//     e.target.remove();
//     document.querySelector(".sidebar-desc").insertAdjacentHTML("afterend", "<button class='dark-mode'>dark mode</button>");
//   });
// }

// if(document.querySelector(".about-anchor").nextElementSibling.innerText === "DARK MODE"){
//   document.querySelector(".dark-mode").addEventListener("click", (event)=>{
//     document.getElementById("styles").setAttribute("href", "/static/css/dark-styles.css");
//     event.target.innerText = "light mode"
//     event.target.classList.remove("dark-mode");
//     event.target.classList.add("light-mode");
//   });
// } else {
//   document.querySelector(".light-mode").addEventListener("click", (e)=>{
//     document.getElementById("styles").setAttribute("href", "/static/css/styles.css");
//     e.target.innerText = "dark mode"
//     e.target.classList.remove("light-mode");
//     e.target.classList.add("dark-mode");
//   });
// }

// if(document.querySelector(".about-anchor").nextElementSibling.innerText === "DARK MODE"){
//   document.querySelector(".dark-mode").addEventListener("click", (event)=>{
//     document.getElementById("styles").setAttribute("href", "/static/css/dark-styles.css");
//     event.target.innerText = "light mode"
//     event.target.classList.remove("dark-mode");
//     event.target.classList.add("light-mode");
//   });
// } else {
//   document.querySelector(".about-anchor").nextElementSibling.addEventListener("click", (e)=>{
//     document.getElementById("styles").setAttribute("href", "/static/css/styles.css");
//     e.target.innerText = "dark mode"
//     e.target.classList.remove("light-mode");
//     e.target.classList.add("dark-mode");
//   });
// }

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


