 class banckaccount{
    constructor(balance = 0){
      this.balance =balance;
    }
    deposite(amount){
      if(amount > 0){
        this.balance += amount;
      }
      else{
        console.log("you have enter a valid amount");
      }
    }
    withdrow(amount){
      if (amount >0 && amount <= this.balance) {
        this.balance -= amount;
      }
      else{
        console.log("you entered invalid amount");
      }
    }
  }
  const myobj = new banckaccount(1000);
    myobj.deposite(10)
    myobj.withdrow(1000)
  console.log(myobj)