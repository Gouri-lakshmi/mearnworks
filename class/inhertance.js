class Parent{
    phone(){
        console.log("have redmi 10pro max");
    }
}
class Child extends Parent{
phone(){
    console.log("1phone 12");
}
}
var child=new Child()
child.phone()