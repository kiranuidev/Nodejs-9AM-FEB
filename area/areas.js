
var calc=require("./../calculator");
console.log(calc);
//javascript creating a object
var areas = {};
areas.calculateSquareArea = function(height,width){
    var result = height*width;
    console.log(result);
};
areas.calculateCircleArea = function(radius){
    var result = 3.14*radius*radius;  
    console.log(result);
};


module.exports = areas;