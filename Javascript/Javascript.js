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
