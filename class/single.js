class Parent{
    m1(){
        console.log("inside parent");
    }
}
class Child extends Parent{
    m2(){
        console.log("inside m2");
    }
}
class subChild extends Child{
    m3(){
        console.log("inside m3");
    }
}
var sb=new subChild()
sb.m1()
sb.m2()
sb.m3()

var ch=new Child()
ch.m1()
ch.m2()

var parent=new Parent()
parent.m1()