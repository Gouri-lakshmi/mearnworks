class Bank{
    session={}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
    }

    getAccountDetails(){
        return this.accounts
    }
    authenticate(accno,password){
if(accno in this.accounts){
let pwd=this.accounts[accno].password
if(pwd==password){
    this.session["user"]=accno;
    console.log(this.session);
    return 1; //console.log("login success");
}
else{
    return 0;
    //console.log("invalid password");
}
}
else{
    return -1; //invaild account number
}
    }
    balanceEnquiry(){
let balance=this.accounts[this.session["user"]].balance
console.log(balance);
    }
   fundTransfer(to_accno,amount){
       let user=this.accounts[this.session["user"]]
if(to_accno in this.accounts){
if((user.["balance"])>amount){
this.accounts[user].balance-=amount;
this.accounts[to_accno].balance+=amount;
this.accounts[user].transactions.push({to:to_accno,ammount:amount})
 }
else{
    console.log("failed insufficient balance");
}
}
else{
    console.log("invalid account nob");
}
   }
}
var obj=new Bank()
var user=obj.authenticate(1001,"userone") 
obj.balanceEnquiry();  
obj.fundTransfer(1003,2000)
//console.log(user==1? "login success":user==-1?"invalid accno":"invalid pwd");