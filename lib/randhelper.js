var randhelper = module.exports = {};

randhelper.randomInRange = function(min, max) {
	return Math.floor(Math.random()*(max-min)) + min;
};

randhelper.generateDigits = function(count) {
	var multiplier = Math.pow(10, count-1);
	return randhelper.randomInRange(10*multiplier, multiplier);
};