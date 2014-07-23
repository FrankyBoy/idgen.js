var idgen = require('../index');

describe('DNI functionality', function(){
	'use strict';
	it('can create a valid DNI', function() {
		var dni = idgen.generateDNI();
		expect(idgen.isValidDNI(dni)).toBe(true);
	});

	it('returns true on valid DNI', function() {
		var validDni = '05291916F';
		expect(idgen.isValidDNI(validDni)).toBe(true);
	});

	it('return false on fake DNI', function(){
		var validDni = '05291916A';
		expect(idgen.isValidDNI(validDni)).toBe(false);
	});

	it('is an alias for NIF', function() {
		expect(idgen.isValidDNI).toBe(idgen.isValidNIF);
		expect(idgen.generateDNI).toBe(idgen.generateNIF);
	});
});

describe('NIE functionality', function(){
	'use strict';
	it('can create a valid NIE', function() {
		var nie = idgen.generateNIE();
		expect(idgen.isValidNIE(nie)).toBe(true);
	});

	it('can validate a valid DNI', function() {
		var validDni = 'X1233453D';
		expect(idgen.isValidNIE(validDni)).toBe(true);
	});
});