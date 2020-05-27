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

    var para = document.createElement("p");
    var node = document.createTextNode("Paragraph text.");
    para.appendChild(node);
    var element = document.getElementById("p");
    element.appendChild(para);
    para.onclick = changeColor;
    function changeColor() {
        document.body.style.color = "purple";
        return false;
    }

    let p = document.getElementById("p");
    p.addEventListener("click", function() {
        let allchar = "0123456789ABCDEF";
        let randcol = "";
        for (let i = 0; i < 6; i++) {
            randcol += allchar[Math.floor(Math.random() * 16)];
        }
        p.style.color = "#" + randcol;
   
})

let button = document.getElementById("myBtn2");
let div = document.getElementById("mydiv");
button.addEventListener("click", function() {
    let span = document.createElement("span");
    div.appendChild(span);
    let text = document.createTextNode("Chaston");
    span.appendChild(text);
})
let friends = ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5", "Friend6", "Friend7", "Friend8", "Friend9", "Friend10"];
var myBtn3 = document.getElementById("myBtn3");
let ul = document.getElementById("ul");
myBtn3.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    }
});

})

