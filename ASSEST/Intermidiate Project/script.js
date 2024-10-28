let history = document.getElementById('history');
let result = document.getElementById('result');

let firstNumber = '';
let operation = '';
let secondNumber = '';

function addNumber(num) {
    if (operation === '') {
        firstNumber += num;
        result.value = firstNumber;
    } else {
        secondNumber += num;
        result.value = secondNumber;
    }
    updateHistory();
}

function addOperator(op) {
    if (firstNumber !== '') {
        operation = op;
        updateHistory();
    }
}

function deleteNumber() {
    if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
        result.value = secondNumber;
    } else if (operation !== '') {
        operation = '';
    } else if (firstNumber !== '') {
        firstNumber = firstNumber.slice(0, -1);
        result.value = firstNumber;
    }
    updateHistory();
}

function clearAll() {
    firstNumber = '';
    operation = '';
    secondNumber = '';
    result.value = '';
    history.value = '';
}

function updateHistory() {
    history.value = firstNumber + ' ' + operation + ' ' + secondNumber;
}


function calculate() {
    if (firstNumber !== '' && operation !== '' && secondNumber !== '') {
        let answer = 0;
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);

        switch(operation) {
            case '+':
                answer = num1 + num2;
                break;
            case '-':
                answer = num1 - num2;
                break;
            case '*':
                answer = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    answer = num1 / num2;
                } else {
                    answer = "Error";
                }
                break;
            case '%':
                answer = num1 % num2;
                break;
        }

        
        history.value = num1 + ' ' + operation + ' ' + num2 + ' = ' + answer;
        
        result.value = answer;
        firstNumber = answer.toString();
        operation = '';
        secondNumber = '';
    }
}