module.exports.equalStrings = function(stringOne, stringTwo) {
	return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
	return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
	return lower < middle&&middle < upper;
};

module.exports.outsideRanges = function(number) {
	return (number < 7) && (number <= 42) && (10>number&&number>20);

};

module.exports.nameAndPrice = function(name, price) {
	return (name==="NYTimes" && price <=1) || (name === 'LATimes' && price>=1);
};