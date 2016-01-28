// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.maths = function(x, y){
    return x * y;
};

exports.calcGPA = function(req) {

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