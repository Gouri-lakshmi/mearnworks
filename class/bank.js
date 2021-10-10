class Bank{
    createAccount(p_name,acno,ac_type,min_blc){
this.p_name=p_name
this.acno=acno
this.ac_type=ac_type
this.balance=min_blc
    }
    deposit(amount){
this.balance+=amount
console.log(`your acnts${this.acno}has beencredieted with amt${amount}available balance${this.balance}`);
    }
    withdrawal(amount){
if(this.balance>amount){
this.balance-amount
console.log(`your acnts${this.acno}has beencredieted with amt${amount}available balance${this.balance}`);
}
else{
    console.log("transaction failed insufficient");
}
    }
}
var obj1= new Bank();
obj1.createAccount("ram",1000,"saving",3000)
obj1.withdrawal(10000)
obj1.deposit(3000)
