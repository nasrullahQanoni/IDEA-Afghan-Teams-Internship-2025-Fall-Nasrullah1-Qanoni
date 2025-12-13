
//celsiusToFahrenheit
function CtoF(C) {
    return (C*9/5)+32
}
console.log(CtoF(10));

//Check even/odd
function Checknumber(num) {
    if(num %2===0){
         return "even";
    }else{
        return "odd"
    }
}
console.log(Checknumber(50));


//Find max of 3 numbers
function max3(a,b,c) {
    let max = a;
    if(b>max) max = b;
    if(c>max) max = c
    return max;
}
console.log(max3(5,4,7));


//factorial
function factorial(n) {
    if(n===0) return 1;
    return n*factorial(n-1)
}

console.log(factorial(3));
console.log(factorial(7));

// sort 
function sort(arr) {
    return arr.sort(function(a,b){
        return a-b;
    })   
}
console.log(sort([4,5,7,3]));


// age by using ifelse
let age = 50;
if(age > 20){
console.log("you are adult");
}else if(age >10 && age<20){
    console.log("you are yang");    
}else{
    if(age<10){
        console.log("you are kid");
        
    }
}

// age by using switch

switch (true) {
    case age >20: {
        console.log("you are adult"); 
    }
        break;
          case age >10 && age <20: {
        console.log("you are yang"); 
    }
        break;
          case age <10: {
        console.log("you are kid"); 
    }
        break;

    default:
        break;
}

//giving day by using switch

const date = new Date().getDay()
switch (date) {
    
    case 0:{
        console.log("یکشنبه");
    }
        break;
          case 1:{
        console.log("دوشنبه");
    }
        break; 
         case 2:{
        console.log("سه شنبه");
    }
        break; 
         case 3:{
        console.log("چهارشنبه");
    }
        break;
          case 4:{
        console.log("پنجشنبه");
    }
        break;  
        case 5:{
        console.log("جمعه");
    }
        break;  
        case 6:{
        console.log("شنبه");
    }
}




//giving day by using ifelse
if (date===0) {
    console.log("یکشنبه");
}else
if (date===1) {
    console.log("دوکشنبه");
}else
if (date===2) {
    console.log("سه شنبه");
} else
if (date===3) {
    console.log("4 شنبه");
}   
 
//simple calculator by using switch
let a = 2;
let b = 4;
let op = "*";
switch (op) {
    case "+":{
        console.log(a+b);
        
    }
    break;
        case "*":{
        console.log(a*b);
        
    }
    break;
        case "-":{
        console.log(a-b);
        
    }
    break;
        case "/":{
        console.log(a/b);
        
    }
    break;
}

//simple calculator by using function

function calculator(a,b,oprator) {
    switch(oprator){
        case "+":{
            return a+b
        }
                case "-":{
            return a-b
        }
                case "*":{
            return a*b
        }
                case "/":{
            return a/b
        }
    }
}

console.log(calculator(10, 2,"/"));


// exersize

