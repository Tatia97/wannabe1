let modal = document.getElementById("myModal");
let view = document.getElementsByClassName("view-p");
let span = document.getElementsByClassName("close")[0];
let btn = document.getElementById("myBtn")

view[0].onclick = function() {
    modal.style.display = "block";
}
view[1].onclick = function() {
    modal.style.display = "block";
}
view[2].onclick = function() {
    modal.style.display = "block";
}
view[3].onclick = function() {
    modal.style.display = "block";
}
view[4].onclick = function() {
    modal.style.display = "block";
}
view[5].onclick = function() {
    modal.style.display = "block";
}
view[6].onclick = function() {
    modal.style.display = "block";
}
view[7].onclick = function() {
    modal.style.display = "block";
}
view[8].onclick = function() {
    modal.style.display = "block";
}
btn.onclick = function() {
    modal.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

