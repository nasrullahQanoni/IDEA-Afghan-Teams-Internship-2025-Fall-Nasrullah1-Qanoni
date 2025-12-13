//this function cheak the number is even or odd
function cheaknumber(num){
if ( num % 2=== 0){
    return"even"
} else{
    return "odd"
}
}
console.log(cheaknumber(5));
console.log(cheaknumber(3));



//this function cheak the number is positive or negtive or zero
function cheaknumber2(num){
    if(num>0){
        return "positive"
    }
    else{
        if(num<0){
            return "negative"
        }
        else{
            return "zero"
        }
    }
}
console.log(cheaknumber2(5));
console.log(cheaknumber2(-23));
console.log(cheaknumber2(20));



//Voting eligibility
function Vote(num){
    if(num>=18){
        return "you can voit "
    }
    else{
        return "you cant voit"
    }
}
console.log(Vote(4));
console.log(Vote(24));



//this function cheak the student grade
function cheakgrade(num) {

      if (num>100) {
        return "نمره اشتباه هست"
      } else {
        if (num>=90) {
        return "A"
         } else {
        if (num>=80 && num<90) {
            return "B"
        }
        else{
            if (num>=70 && num<80) {
                return "C"
            }
            else{
                return "Nakam"
                
            }
        }
    }
}
    }
    console.log(cheakgrade(80));
    console.log(cheakgrade(10));
    console.log(cheakgrade(102));
