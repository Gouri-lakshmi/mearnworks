var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourane",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]

var src_item=products.find(item=>item[2]==20)
console.log(src_item);

//find treat
var srch_item=products.find(item=>item[1]=="treat")
console.log(srch_item);