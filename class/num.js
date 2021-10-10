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
    validateAccountNumber(accno){
      return  accno in this.accounts?true:false
    }

    authenticate(acno,password){
if(this.validateAccountNumber(acno)){
    let pwd=this.accounts[acno].password
    if(pwd==password){
        return 1
    }
    else{
        return -1
    }
}else {
return 0
}
    }
    balanceEnquiry(){
        let user=this.session["user"]
        return this.accounts[user].balance
    }
    fundTransfer(to_accno,amount){
        if(this.validateAccountNumber(to_accno)){
            let user=this.session["user"]
            let bal=this.balanceEnquiry()
            if(bal>amount){
                this.accounts[user].balance-=amount
                this.accounts[to_accno].balance+=amount
                this.accounts[user].transactions.push({to:to_accno,amount:amount})
            }
            else{
                console.log("invalid accno");
            }
        }
    }
   
}
var obj=new Bank()
var user=obj.authenticate(1001,"userone") 
console.log(obj.balanceEnquiry());
obj.fundTransfer(1001,5000)