let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Hello.")
});



let $button = $("#button");
$button.click( function () {
    let message = $("#text-box").val();
    alert(message);
});



let $div = $("#div");
$div.hover(function() {
    div.style.backgroundColor = "red";
}, function() {
    div.style.backgroundColor = "black";
});



let $p = $("#p");
$p.click( function() {
    let $allchar = "0123456789ABCDEF";
    let $randcol = "";
    for (let i = 0; i < 6; i++) {
        $randcol += $allchar[Math.floor(Math.random() * 16)];
    }
    $($p).css("color", "#" + $randcol);
});



let $button = $("#button");
let $div = $("#div");
$button.click( function() {
    let $span = $("<span>Chaston</span>");
    $($span).appendTo($div);
});


let $friends = ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5", "Friend6", "Friend7", "Friend8", "Friend9", "Friend10"];
let $button = $("#button");
let $ul = $("#ul");
$($button).click( function () {
    for (let i = 0; i < $friends.length; i++) {
        let $li = $("<li>" + ($friends[i]) + "</li>");
        $($li).appendTo($ul);
    }
});