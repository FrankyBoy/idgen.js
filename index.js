var randhelper = require('./lib/randhelper')

var idgen = module.exports = {};

var checkSum = function(number) {
	var checkSumLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
	return checkSumLetters.charAt(number % 23 );
}

var getNIEDigits = function(startLetter, digits) {
	switch (startLetter) {
	    case 'X':
	        digits = '0' + digits;
	        break;
	    case 'Y':
	        digits = '1' + digits;
	        break;
	    case 'Z':
	        digits = '2' + digits;
	        break;
	}
	return parseInt(digits, 10);
}

idgen.generateDNI = idgen.generateNIF = function() {
	var baseNumber = randhelper.generateDigits(8);
	return baseNumber + checkSum(baseNumber);
};

idgen.isValidDNI = idgen.isValidNIF = function(dni) {
	var nifRegex = /^[0-9]{8}[a-zA-Z]{1}$/;
	if (!nifRegex.test(dni)) {
        return false;
    }

    var letter = dni.charAt(8).toUpperCase();
    var numbers = dni.substring(0, 8);
	var calculated = checkSum(parseInt(numbers, 10));

    return letter == calculated;
}

idgen.generateNIE = function() {
	var startLetters = 'XYZ';
	var startLetter = startLetters.charAt(randhelper.randomInRange(0, 3));
	var baseNumber = randhelper.generateDigits(7);


	return startLetter + baseNumber + checkSum(getNIEDigits(startLetter, baseNumber));
};

idgen.isValidNIE = function(dni) {
	var nifRegex = /^[xyzXYZ]{1}[0-9]{7}[a-zA-Z]{1}$/;
	if (!nifRegex.test(dni)) {
        return false;
    }

    var startLetter = dni.charAt(0).toUpperCase();
    var numbers = dni.substring(1, 8);
    var letter = dni.charAt(8).toUpperCase();

	var calculated = checkSum(getNIEDigits(startLetter, numbers));
    return letter == calculated;
}