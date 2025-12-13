//calculation
let num1 = 10;
let num2 = 4;
let oprator = "-";
let result;

if (oprator=="+") {
    result = num1+num2;
} else {
    if (oprator=="-") {
        result = num1-num2;
    } else {
        if (oprator=="*") {
            result = num1*num2;
        } else {
            if (oprator=="/") {
                result = num1/num2;
            } else {
                if (oprator=="%") {

                    result = num1%num2
                }
                else {
                 result="your oprator is incorect"  
               }
            }
        }
    }
}

console.log(result);


//calculateSalary
function calculateSalary(basesalary, overtime, overtimerate) {
    const basesalary1 = basesalary;
    const overtimepay = overtime*overtimerate
    const totalsalary = basesalary1+overtimepay
    return totalsalary;
}

console.log("totalsalary :",calculateSalary(3000, 10,100));



const trafficMe = {
    roadClosed: " road is closed.",
    slowDown: " decrese your spead.",
    accidentAhead: " accedent is ahead.",
    changeRoad:"the road is closed change your road"
};

//trafic controle message
function getTrafficM(condition) {
    switch (condition) {
        case "closed":
            return trafficMe.roadClosed; 
        case "slow":
            return trafficMe.slowDown; 
        case "accedent":
            return trafficMe.accidentAhead;  
        case "change":
            return trafficMe.changeRoad;   
        default:
        return "normal"
    }
}
console.log(getTrafficM("change"));
