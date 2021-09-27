//print the names of employees
var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

var employee_names=employees.map((emp)=>emp[1])
console.log(employee_names);

//print developer details
var emp=employees.filter(empl=>empl[3]=="developer")
console.log(emp);

//print names of ba
var names=employees.filter(name=>name[3]=="ba").map(name=>name[1])
console.log(names);

//print developers name
var developer=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
console.log(developer);

//print developer names whose exp > 6yearse(
var exp_developer=employees.filter(exp=>(exp[3]=="developer") & ((exp[5]-exp[4])>5)).map(exp=>exp[1])
    console.log(exp_developer);

//add bonus of 500 rs for all developers
var add_bonus=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+500)
console.log(add_bonus);