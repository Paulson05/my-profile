
  var darkmodebtn = document.querySelector(".darkmodebtn");
  var right = document.querySelector(".right");
  var left = document.querySelector(".left");
  var vertical = document.querySelector(".vertical");
  var vertical2 = document.querySelector(".vertical2");
  darkmodebtn.addEventListener("click", function(){ 
    left.classList.toggle("dark-mode");
    right.classList.toggle("dark-mode2");

  })
  

  
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#box");
  boxElement2 = document.querySelector("#box2");

  createObserver();
}, false);

function createObserver() {
    let observer;
  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList()
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
    observer.observe(boxElement2);
  }

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;
  
    for (let i=1.0; i<=numSteps; i++) {
      let ratio = i/numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  }

  
  
  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
      }
  
      prevRatio = entry.intersectionRatio;
    });
  }
