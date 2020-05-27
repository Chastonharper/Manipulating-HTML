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

})

