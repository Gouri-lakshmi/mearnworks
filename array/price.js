var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourane",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]

//highest products
var highest=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(highest);

//lowest
var low_cost=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(low_cost);


