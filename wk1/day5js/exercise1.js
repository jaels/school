
var getArea = function () {
    return this.width*this.height
}

function Rectangle(width,height) {
    this.width = width;
    this.height = height;
    this.getArea = getArea;
};

function Square(width) {
    this.width = width;
    this.height = width;
    this.getArea = getArea;
}
