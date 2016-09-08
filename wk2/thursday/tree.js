
function general (str) {
    var c = document;
    var arr = [];
    searchTree(c);
    function searchTree (x) {
        var child = x.children;
        for (var i=0;i<child.length;i++){
            if(child[i].classList.contains(str)) {
                arr.push(child[i]);
            }
            searchTree(x.children);
        }
    }
    return arr;

}
general("big-box");




//function general (str) {

//function searchTree(, func) {
//    func(node);
//    node = node.firstChild;


//while (node) {
//    walkTheDOM(node, func);
//    node = node.nextSibling;
//}
//}}
