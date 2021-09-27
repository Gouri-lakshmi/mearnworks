var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//sort employee wrt exp asc /des
//asc order
employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employees);
//desc order
employees.sort((emp1,emp2)=>emp2[5]-emp1[5])
console.log(employees);
//sort employee with respect salary
employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(employees);

//sort developers with respect salary
var emp_developer=employees.filter(emp=>emp[3]=="developer").sort((emp1,emp2)=>emp1[1]-emp2[2])
console.log(emp_developer);
