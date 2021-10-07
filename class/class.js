//creating a class (class classname{ })



class Person{
    setPerson(name,gender,age){
        this.name=name,
        this.gender=gender
        this.age=age
    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }
}

//object: var refname=classname()
var obj1=new Person()
obj1.setPerson("ram","male",25)
obj1.printPerson()

var obj2=new Person()
obj2.setPerson("arjun","male",26)
obj2.printPerson()