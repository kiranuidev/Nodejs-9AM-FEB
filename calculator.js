//function delcartaion styles

function add(parm1,param2){
    var result = parm1+param2;
    console.log(result);
}

function multiply(parm1,param2){
    var result = parm1*param2;
    console.log(result);
}

function divide(parm1,param2){
    var result = parm1/param2;
    console.log(result);
}

function subtract(parm1,param2){
    var result = parm1-param2;
    console.log(result);
}

var calc = {
    add:add,
    sub:subtract,
    divide:divide,
    mul:multiply
};

module.exports=calc;

