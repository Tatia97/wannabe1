let modal = document.getElementById("myModal");
let view = document.getElementById("myView");
let span = document.getElementsByClassName("close")[0];

view.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

