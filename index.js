let modal = document.getElementById("myModal");
let view = document.getElementsByClassName("view-p");
let span = document.getElementsByClassName("close")[0];
let btn = document.getElementById("myBtn")
let modalTxt = document.getElementById("modalText")
let demoTxt = document.getElementsByClassName("card-p")


view[0].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[0].innerHTML;
}
view[1].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[1].innerHTML;
}
view[2].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[2].innerHTML;
}
view[3].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[3].innerHTML;
}
view[4].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[4].innerHTML;
}
view[5].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[5].innerHTML;
}
view[6].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[6].innerHTML;
}
view[7].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[7].innerHTML;
}
view[8].onclick = function() {
    modal.style.display = "block";
    modalTxt.innerHTML = demoTxt[8].innerHTML;
}
btn.onclick = function() {
    modal.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
    modalTxt.innerHTML = demoTxt[1].innerHTML;
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

