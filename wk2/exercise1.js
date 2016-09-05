function changeStyle(str) {
    var change = document.querySelectorAll("h2");
    for (var i=0; i<change.length; i++) {
        change[i].style.fontWeight = "bold";
        change[i].style.fontStyle = "italic";
        change[i].style.textDecoration = "underline";
    }
}
