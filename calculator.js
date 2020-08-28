const calculator = (operator, value1, value2) => {

    switch(operator){
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
    }

    throw "This should never happen";

};


module.exports = calculator;