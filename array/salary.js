//print highest salary

var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
var high_salary=0;
for(let employee of employees){
    if(high_salary<employee[2]){
high_salary=employee[2]
    }
}
console.log("max salary",high_salary);
    
//print lowest salary

var low_salary=employees[0][2];
for(let employee of employees){
    if(low_salary>employee[2]){
low_salary=employee[2]
    }
}
console.log("lowest salary",low_salary);
    

//print name of the developer who is taking the highest salary
//print name of highest exp employee
//print the sum of salary 






