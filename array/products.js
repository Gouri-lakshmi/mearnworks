var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourane",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]

//print number of items in a shop

console.log(products.length);

//print number of available item

var item=0;
if(item<products[3]){
    products[3]++
}
console.log(products[3].length);

//print all products name

var products_names=products.map((item)=>item[1])
console.log(products_names);
    
