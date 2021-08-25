function pairNumber(str,target) {
    
    let  c = 0
    const results = []
    for(let i in str){
        for(let j=i; j< str.length;j++ ){
            if(str[i]+str[j] == target)
            {
                
                 results[c] = str[i]+"+"+str[j]
                 c++;
            }else if(Math.abs(str[i]-str[j]) == target){
                results[c] = str[i]+"-"+str[j]
                c++
            }
        }
    }

    console.log(results)
    return results
	
}


function test(obj) {
	console.log(obj.index + ": ", JSON.stringify(pairNumber(obj.input,obj.target)) === JSON.stringify(obj.output));
}
test({
	index: 1,
    input: [1,2,3,4,5],
    target: 7,
    output: ["2+5","3+4"]
});

test({
	index: 1,
    input: [1,20,10,9,5],
    target: 10,
    output: ["1+9","20-10","5+5"]
});


