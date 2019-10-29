// mouseover
const busImage = document.querySelector(".bus");
// console.log(busImage);
busImage.addEventListener("mouseover", () => {
  busImage.style.transform = "scale(1.2)";
  busImage.style.transition = "all 0.3s";
});
busImage.addEventListener("mouseleave", () => {
  busImage.style.transform = "scale(1)";
  busImage.style.transition = "all 0.3s";
});
//click
document.querySelectorAll(".middle-img").forEach(el => {
  el.addEventListener("click", event => {
    el.style.transform = "scale(1.2)";
    el.style.transition = "all 0.3s";
    event.stopPropagation();
  });
});
document.querySelectorAll(".middle-img").forEach(el => {
  el.addEventListener("dblclick", event => {
    el.style.transform = "scale(1)";
    el.style.transition = "all 0.3s";
    event.stopPropagation();
  });
});

//resize
const changeImg = document.querySelector(".secondBus");
window.addEventListener("resize", () => {
  changeImg.src =
    "https://images.unsplash.com/photo-1493398961404-f06dd2f81108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
});
//scroll
const flipH1 = document.querySelector("h1");
window.addEventListener("scroll", () => {
  flipH1.style.transform = "rotateY(360deg)";
  flipH1.style.transition = "all 1s ease-in-out";
  //   flipH1.style.transform = "skewY(80deg)";
});
//keydown&up
document.querySelectorAll("h2").forEach(el => {
  document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    el.style.transform = "rotate(360deg)";
    el.style.transition = "all 1s ease-in-out";
  });
});
document.querySelectorAll("h2").forEach(el => {
  document.addEventListener("keyup", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    el.style.transform = "rotateX(360deg)";
    el.style.transition = "all 1s ";
  });
});
//load
const flipBody = document.querySelector("body");
window.addEventListener("load", () => {
  flipBody.style.transform = "rotateY(360deg)";
  flipBody.style.transition = "all 1s ease-in-out";
});
//draganddrop
document.addEventListener("drag", function(event) {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "purple";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);
//audio

// window.addEventListener("scroll", () => {
//   let music = new Audio("horn.mp3");
//   music.loop = false;
//   music.volume = 0.1;
//   music.play();
// });
const welcome = document.querySelector(".intro");
welcome.addEventListener("click", event => {
  welcome.style.backgroundColor = "blue";
  console.log("middle");
  event.stopPropagation();
});

const welcomeH2 = document.querySelector(".intro h2");
welcomeH2.addEventListener("click", event => {
  welcomeH2.style.backgroundColor = "hotpink";
  console.log("start");
  console.log(event);
  event.stopPropagation();
});
const facebook = document.querySelector(".facebook");
facebook.addEventListener("click", event => {
  console.log("Stopped the link!");
  event.preventDefault();
});
