module.exports.newArray = function(a, b, c, d){
	return [a, b, c, d];
};

module.exports.firstAndLast = function(input){
	var array = [input];
	return array[0, array.length-1];
};