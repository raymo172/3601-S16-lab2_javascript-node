// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnNotKittens = function(){
        return "Not Kittens!";
    };

/**
 * Takes two ints, returns their product.
 *
 * @returns {int}  - returns the two numbers multiplied together.
 */
var mult = function(x, y){
    return x * y;
}

var calcGPA = function(req) {

    var grade1 = req.body.letterGrade1;
    var grade2 = req.body.letterGrade2;
    var grade3 = req.body.letterGrade3;

    var credit1 = req.body.credit1;
    var credit2 = req.body.credit2;
    var credit3 = req.body.credit3;

    return (((getNumValue(grade1)*parseInt(credit1))+(getNumValue(grade2)*parseInt(credit2))+(getNumValue(grade3)*parseInt(credit3)))/(parseInt(credit1)+parseInt(credit2)+parseInt(credit3)))
};

var getNumValue = function(grade) {
    if (grade == "A") {
        return 4.0;
    } else if (grade == "A-") {
        return 3.67;
    } else if (grade == "B+") {
        return 3.33;
    } else if (grade == "B") {
        return 3.0;
    } else if (grade == "B-") {
        return 2.67;
    } else if (grade == "C+") {
        return 2.33;
    } else if (grade == "C") {
        return 2.0;
    } else if (grade == "C-") {
        return 1.67;
    } else if (grade == "D+") {
        return 1.33;
    } else if (grade == "D") {
        return 1.0;
    } else {
        return 0.0;
    }
};