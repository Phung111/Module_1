



let MyCircle = function(radius, color) {
    this.radius = radius;
    this.color = color;

    this.getRadius = function(){
        return this.radius;
    }
    this.getArea = function(){
        return Math.PI*radius*radius;
    }
    this.setRadius = function(radius){
        return this.radius = radius;
    }
    this.setArea= function(radius) {
        return Math.PI*radius*radius == Math.PI*radius*radius;
    }

}
let circle = new MyCircle(10);

circle.setRadius(4);
circle.setArea(4)
let radius = circle.getRadius();
let area = circle.getArea();
console.log("radius: " + radius + "; area: " + area);