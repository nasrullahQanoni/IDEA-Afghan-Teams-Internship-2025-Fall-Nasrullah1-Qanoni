// ده فیصد مالیه از معاش بدون کدام رنج
function taxcalculate(amount, taxRate) {
    const tax = amount*taxRate;
    const total = amount-tax;
    return{
        tax:tax,
        total:total
    };
}
result = taxcalculate(10000,0.10)
console.log("tax:",result.tax);//مالیه 
console.log("amount:",result.total);//معاش بعد از مالیهcon


//مالیه خالص
function taxcalculate2(amount){
    let tax = 0;
    if (amount>10000) {
     tax +=(amount - 10000)*0.20;
      amount = 10000;
    }
        if (amount>5000) {
         tax +=(amount-5000) * 0.10;
        }
      
        return tax;
    }
console.log(taxcalculate2(100000));


//advanced grading

function grade(point) {
    if (point>100 || point<0) {
        return "point is invalid";
    }

    if (point>=95) return `+A very good`;
    if (point>=90) return "A good";
    if (point>=85) return "+B you can try";
    if (point>=80) return "B you should try";
    if (point>=75) return "+C your score is very low";
    if (point>=70) return "C you are near to the false";
    if (point<70) return "F you are false";  
}

console.log(grade(10));

