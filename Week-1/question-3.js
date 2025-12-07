//Electricity bill calculator
 
function Electricity(kwh,kwhRate,bill) {
   
    const billAmount = 15;
    const total = (kwh*kwhRate)+billAmount;
    return total;
}
let kwh;
    console.log(Electricity(60,5));
    if(kwh>=50){
        console.log("the is large");
    }else{
        console.log("number is normal");
    };
