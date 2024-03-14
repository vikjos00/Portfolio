function HoverEffect(element) {
  var cardText = element.target.querySelector('.card-text');
  if (cardText) {
    cardText.style.opacity = "1";
    cardText.style.visibility = "visible";
  }
}

function HoverReset(element) {
  var cardText = element.target.querySelector('.card-text');
    if (cardText) {
      cardText.style.opacity = "0";
      cardText.style.visibility = "hidden";
  }
}

function onTop() {
  window.scrollTo(0,0);
}

function back(){
  location.href="https://viktorjosefsson.com/index.html"
}

function transition1(){
  let body = document.querySelector(".body_transition"); // Selects the first element with the class

  if(body.backgroundColor = "#424242"){
    body.style.backgroundColor ="white"
    body.style.opacity = "1";
  }
}

function test(){
  setTimeout(transition1, 250);
}

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        // Instead of getting the 'src' of the clicked item, get the value of a custom data attribute
        const src = e.target.getAttribute("data-modal-img-src");
        
        // Find the element with class 'modal-img' and set its 'src' to the new source
        document.querySelector(".modal-img").src = src;
        
        // Create a new Bootstrap modal instance and show it
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
});

function alert_message(){
  alert("This project is still being coded, try another one!");
}


function test2(){
  setTimeout(typeWriter, 500);
}

var i = 0; // Index för nuvarande position i strängen
var speed = 50; // Hastighet för att visa tecken

// Funktion för att skriva text i ett element med typskrivareffekt
function typeWriter(txt, elementId, callback) {
  if (i < txt.length) {
    document.getElementById(elementId).innerHTML += txt.charAt(i);
    i++;
    setTimeout(function() { typeWriter(txt, elementId, callback); }, speed);
  } else if (callback) {
    i = 0; // Återställ index för nästa anrop
    setTimeout(callback, 500); // Kalla på nästa funktion efter en fördröjning om det finns en callback
  }
}

// Använd funktionen för att skriva ut txt_1 följt av txt_2
function startTyping() {
  var txt_1 = '<div class="about">';
  var txt_2 = "</div>";
  
  typeWriter(txt_1, "text_load_1", function() {
    typeWriter(txt_2, "text_load_2");
  });
  
}
setTimeout(content_load, 1200);
setTimeout(startTyping2, 2000);
setTimeout(content_load2, 3250);

function startTyping2() {
  var txt_3 = '      <ul class="skills">'
  var txt_4 = "</ul>"
  
  typeWriter(txt_3, "text_load_3", function() {
    typeWriter(txt_4, "text_load_4");
  });
  setTimeout(content_load2, 1200);
}

function content_load(){
  var text_1 = document.getElementById("text_1");
  var text_2 = document.getElementById("text_2");
  
  text_1.style.opacity = "1";
  text_2.style.opacity = "1";
}

function content_load2(){
  var text_3 = document.getElementById("text_3");
  var text_4 = document.getElementById("text_4");
  
  text_3.style.opacity = "1";
  text_4.style.opacity = "1";
}
