
/* Set the width of the side navigation to 250px */

function openNav() {
    document.getElementById("mySidenav").style.width = "120px";
    document.getElementById("main").style.marginLeft = "110px";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
var darkmodebtn = document.querySelector(".darkmodebtn");
  var right = document.querySelector("body");
  var left = document.querySelector("#mySidenav");
  var nav = document.querySelector("nav");
  darkmodebtn.addEventListener("click", function(){ 
    left.classList.toggle("dark-mode");
    right.classList.toggle("dark-mode2");
  nav.classList.toggle("dark-mode3")
  })
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var section = document.getElementById("section");
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        section.style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
  
 // Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    
     
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

 // Get the modal
var modala = document.getElementById('myModala');

// Get the button that opens the modal
var btna = document.getElementById("myBtna");

// Get the <span> element that closes the modal
var spana = document.getElementsByClassName("closea")[0];

// When the user clicks on the button, open the modal
btna.onclick = function() {
    modala.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spana.onclick = function() {
    modala.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modala) {
        modala.style.display = "none";
    }
}

// Get the modal
var modalContact = document.getElementById('myModalContact');

// Get the button that opens the modal
var btnContact = document.getElementById("myBtnContact");

// Get the <span> element that closes the modal
var spanContact = document.getElementsByClassName("closeContact")[0];

// When the user clicks on the button, open the modal
btnContact.onclick = function() {
    modalContact.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanContact.onclick = function() {
    modalContact.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalContact) {
        modalContact.style.display = "none";
    }
}