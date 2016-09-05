function insert() {
    var ins = document.createElement("div");
    ins.innerHTML = "AWESOME";
    ins.style.position = "fixed";
    ins.style.zIndex = 2147483647;
    ins.style.left = "20px";
    ins.style.top = "100px";
    ins.style.fontSize = "200px";
    document.body.appendChild(ins);
}

insert();
