document.addEventListener("DOMContentLoaded", function (){

var btn = document.createElement("BUTTON");
btn.innerHTML = "DOM";
btn.addEventListener("click", function(){alert("Hello World!");
});
document.body.appendChild(btn);

document.getElementById("#myBtn");

let myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", click);
function click() {
    let message = document.getElementById("someText").value;
    alert(message);
}

})

