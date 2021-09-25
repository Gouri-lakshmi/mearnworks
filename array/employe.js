var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//print number of employees
console.log(employees.length);


//print number of developers
var developer_count=0;
for(let employee of employees){
    if(employee[3]=="developer"){
        developer_count++;
    }
}
console.log("developer",developer_count);



//print exp of employees
for(let employee of employees){
    console.log("exp",employee[5]-employee[4]);
}