//Package Installer Excercies for Pluralsight interview


//receive packages to load
var packages = [
		'KittenService:',
		'Leetmeme: Cyberportal',
		'Cyberportal: Ice',
		'CamelCaser: KittenService',
		'Fraudstream: Leetmeme',
		'Ice:'
	];

//split the dependencies and put it into a bigger array
var packagesArr = [];

var splitDependencies = function(inpArr, outputArr) {
	//var miniArr = [];
	for (var i = 0; i < inpArr.length; i++) {
		outputArr.push(inpArr[i].split(' '));
	}
	return outputArr;
}

splitDependencies(packages, packagesArr);

//turn the packagesArr from a multidimensional array into a standard array
packagesArr = packagesArr.toString().split(',');
console.log(packagesArr);


//loop through array and remove colons at end
/*for (var i = 0; i < packagesArr.length; i++) {
	if (packagesArr[i].charAt(packagesArr[i].length - 1) === ':') {
		packagesArr[i].charAt(packagesArr[i].length - 1).splice();
	}
}

console.log(packagesArr);*/

//loop through the array and see if some items are duplicates, if they are, remove duplicates, but add number to a count to show that package as important
var countArr = [];
var imprtntPackCount = 0;

var dependent = function(inpArr, countArr) {
	for (var i = 0; i < inpArr.length; i++) {
		for (var j = 0; j < inpArr.length; j++) {
			if (inpArr[i] === inpArr[j])
		}
	}
}