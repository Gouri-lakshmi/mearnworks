var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourane",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]

//print number of items in shop

console.log(products.length);

//print number of available item
var item=0;
for(let pro of products){
if(pro[3]>0){
    item++
}
}
console.log(item);


//print all products name

var pro_name=products.map((item=>item[1]))
console.log(pro_name);
    
