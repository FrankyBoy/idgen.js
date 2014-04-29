idgen
=====
idgen is a simple library for

 * generating "valid" document numbers for regulatory purposes
 * validating document numbers

valid in this context means:

 * the IDs are in a certain format, checked via regex
 * the checksum calculations of the IDs are correct

valid does NOT mean:

 * the numbers actually exist
 * the numbers are accepted by the regulator

Sample usage - id generation
----------------------------

```javascript
var idgen = require('idgen');
// dni and nif are two words for the same thing. 
// They are 8 digits + 1 letter and issued for people of spanish nationality
var dni = idgen.generateDNI();
var nif = idgen.generateNIF();

// NIE is X/Y/Z + 7 digits + 1 letter
var nie = idgen.generateNIE();
```

Sample usage - id validation
----------------------------
```javascript
var idgen = require('idgen');

var validDNI = '05521813L';
var fakeDNI = '05521813A'; // checksum wrong
expect(idgen.isValidDNI(validDNI)).toBe(true);
expect(idgen.isValidDNI(fakeDNI)).toBe(false);
expect(idgen.isValidNIF(validDNI)).toBe(true);
expect(idgen.isValidNIF(fakeDNI)).toBe(false);

var validNIE = 'Y7538456J';
var fakeNIE = 'Y7538456A'; // checksum wrong
expect(idgen.isValidNIE(validNIE)).toBe(true);
expect(idgen.isValidNIE(fakeNIE)).toBe(false);
```