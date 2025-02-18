// function for generating random math equations
function randomMathEquations() {
    const symbols = ['+', '-', '*', '/']; // mathematical symbols
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];

    let question, answer;
    if (symbol === '/') { // to make sure the division answers wouldn't result in decimals
        const numerator = number1 * number2;
        question = `${numerator} ${symbol} ${number2} = ?`;
        answer = numerator / number2;
    } else { // generate a normal mathematical equation
        question = `${number1} ${symbol} ${number2} = ?`;
        answer = eval(`${number1} ${symbol} ${number2}`);
    }
    
    return { question, answer };
}

module.exports = randomMathEquations;
