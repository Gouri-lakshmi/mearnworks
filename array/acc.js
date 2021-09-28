var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

//sort the users with blc
accounts.sort((item1,item2)=>item2[3]-item1[3])
console.log(accounts);

//print the details of ac no 1004
var details=accounts.filter(emp=>emp[0]==1004)
console.log(details);

//is there any person with blc <2000
var person=accounts.some(item=>item[4]<2000)
console.log(person);

//print the details of users with max balance
var max=accounts.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

//print the details of users with acc_type as savings and balance >25000
 var details=accounts.filter(emp=>emp[3]>25000).forEach(emp=>console.log(emp))
console.log(details);

//print all names  of users with in_active acc

