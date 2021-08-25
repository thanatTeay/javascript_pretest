function max(str) {
    const max_value = Math.max(...str)
    const backToArr = [max_value];

    return backToArr
	
}


function test(obj) {
	console.log(obj.index + ": ", JSON.stringify(max(obj.input)) === JSON.stringify(obj.output));
}
test({
	index: 1,
    input: [1,3,5],
    output: [5]
});
test({
	index: 2,
	input: [5,8,3],
	output: [8]
});
test({
	index: 3,
	input: [1,70,6,5,7,3,8,6],
	output: [70]
});

