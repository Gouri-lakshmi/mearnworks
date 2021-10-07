class Student{
setStudent(rol,course,stud_name){
    this.rol=rol,
    this.course=course,
    this.stud_name=stud_name
}
printStudent(){
console.log(this.rol,this.course,this.stud_name);
}
}

var obj1=new Student();
obj1.setStudent(1,"comp","ram");
console.log(obj1.stud_name);

var obj2=new Student();
obj2.setStudent(2,"comp","arjun");
obj2.printStudent()


