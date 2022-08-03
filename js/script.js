// variables
var contentSide = document.getElementById("content-side");
var leftSide = document.getElementById("left-side");
var boxs = document.getElementsByClassName("color-box");
var aNavs = document.getElementsByClassName("left-a");
var copiedBox = document.getElementById("copied-box");
var colorTextCopied = document.getElementById("colorTextCopied");
var toggleMenuBtn = document.getElementById("toggleMenuBtn");
var toggleIcon = document.getElementById("toggleIcon");
var nightmodebtn = document.getElementById("nightmodebtn");
var lightmodebtn = document.getElementById("lightmodebtn");

// end of elements variables

// color Lists collections

// fff33
var copiedBoxSentences = [
  "Awesome :)",
  "Good choice !",
  "emm, yeah this will work",
  "Almost there",
  "gotcha xD",
  "hold one, why you try like this",
  "how could you take all this alone ?",
  "never forget that you're limitless",
  "heh, you into this now ?",
  "woah, good taste =D",
  "I feel this color express something",
  "that's fire",
  "bro like how this can be so accurate",
  "hehe, know it",
  "bro, that's sick",
  "keep it up",
  "believe it will happen, it will",
  "*dies from luxury*",
];
var listsList = [
  "default",
  "german",
  "aussie",
  "american",
  "british",
  "swedish",
  "material",
  "killing",
  "british",
  "swedish",
  "material",
];

let cooooolorsList = [
  [
    // default list
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#ecf0f1",
    "#95a5a6",
    "#f39c12",
    "#f39c12",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d",
  ],

  [
    // german list
    "#fc5c65",
    "#fd9644",
    "#fed330",
    "#26de81",
    "#2bcbba",
    "#eb3b5a",
    "#fa8231",
    "#f7b731",
    "#20bf6b",
    "#0fb9b1",
    "#45aaf2",
    "#4b7bec",
    "#a55eea",
    "#d1d8e0",
    "#778ca3",
    "#2d98da",
    "#3867d6",
    "#8854d0",
    "#a5b1c2",
    "#4b6584",
  ],

  [
    // aussie list
    "#f6e58d",
    "#ffbe76",
    "#ff7979",
    "#badc58",
    "#dff9fb",
    "#f9ca24",
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#c7ecee",
    "#7ed6df",
    "#e056fd",
    "#686de0",
    "#30336b",
    "#95afc0",
    "#22a6b3",
    "#be2edd",
    "#4834d4",
    "#130f40",
    "#535c68",
  ],

  [
    // american list
    "#55efc4",
    "#81ecec",
    "#74b9ff",
    "#a29bfe",
    "#dfe6e9",
    "#00b894",
    "#00cec9",
    "#0984e3",
    "#6c5ce7",
    "#b2bec3",
    "#ffeaa7",
    "#fab1a0",
    "#ff7675",
    "#fd79a8",
    "#636e72",
    "#fdcb6e",
    "#e17055",
    "#d63031",
    "#e84393",
    "#2d3436",
  ],

  [
    // Britisch list
    "#00a8ff",
    "#9c88ff",
    "#fbc531",
    "#4cd137",
    "#487eb0",
    "#0097e6",
    "#8c7ae6",
    "#e1b12c",
    "#44bd32",
    "#40739e",
    "#e84118",
    "#f5f6fa",
    "#7f8fa6",
    "#273c75",
    "#353b48",
    "#c23616",
    "#dcdde1",
    "#718093",
    "#192a56",
    "#2f3640",
  ],
  [
    // swedish list
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
    "#808e9b",
    "#1e272e",
  ],
];

// fff33

// end of color Lists collections

// for loops
for (let i = 0; i < boxs.length; i++) {
  boxs[i].innerHTML = cooooolorsList[0][i];
  boxs[i].style.backgroundColor = cooooolorsList[0][i];
  boxs[i].setAttribute(
    "onclick",
    "copiedBox.style.background = this.innerHTML, copiedBoxFunction(), colorTextCopied.innerHTML = this.innerHTML,   navigator.clipboard.writeText(this.innerHTML)"
  );
}

for (let j = 0; j < aNavs.length; j++) {
  aNavs[j].innerHTML = listsList[j];
  aNavs[j].setAttribute(
    "onclick",
    "allANavsRemoveActive(), this.classList.add('left-active'), setTimeout(onactiveColorChange, 50)"
  );
}
function onactiveColorChange() {
  for (let v = 0; v < aNavs.length; v++) {
    if (aNavs[v].classList.contains("left-active")) {
      for (let i = 0; i < boxs.length; i++) {
        boxs[i].innerHTML = cooooolorsList[v][i];
        boxs[i].style.backgroundColor = cooooolorsList[v][i];
      }
      boxs[i].innerHTML = [i];
    }
  }
}

//end of loops
//functions
function changehextorgba(hex) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + "" + ")";
}

function copiedBoxFunction() {
  document.getElementById("rndomS").innerHTML =
    copiedBoxSentences[Math.floor(Math.random() * copiedBoxSentences.length)];

  var transitionDelay = 2000;

  setTimeout(function () {
    copiedBox.style.display = "flex";
  }, transitionDelay - 1950);
  setTimeout(function () {
    copiedBox.style.opacity = "1";
  }, transitionDelay - 1900);
  setTimeout(function () {
    copiedBox.style.opacity = "0";
  }, transitionDelay - 500);
  setTimeout(function () {
    copiedBox.style.display = "none";
  }, transitionDelay);
}

function allANavsRemoveActive() {
  for (let i = 0; i < aNavs.length; i++) {
    aNavs[i].classList.remove("left-active");
  }
}

//

// toggling left-side
function toggleLeftSide() {
  leftSide.classList.toggle("toggleLeftSideActive");
  function iconTgL() {
    toggleIcon.classList.toggle("fa-linkedin");
  }
  setTimeout(iconTgL, 170);
}
toggleMenuBtn.addEventListener("click", toggleLeftSide);
//end of functions

// function that do dark mode

var darkModeStyle = document.createElement("link");
var darkModeIcon = document.getElementById("darkModeIcon");
darkModeStyle.setAttribute("rel", "stylesheet");
darkModeStyle.setAttribute("id", "Dm");

document.body.appendChild(darkModeStyle);

function lightmodefunc() {
  darkModeStyle.setAttribute("href", "./css/lightMode.css");
  darkModeIcon.style.top = "0px";
}

function darkmodefunc() {
  darkModeStyle.setAttribute("href", "./css/darkMode.css");
  darkModeIcon.style.top = "-30px";
}
nightmodebtn.addEventListener("click", lightmodefunc);
lightmodebtn.addEventListener("click", darkmodefunc);

// end of dark mode


// alert(changehextorgba("#16a085"));
