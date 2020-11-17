/*Calculator*/

let numbers = document.querySelectorAll('.numbers'),
    operations = document.querySelectorAll('.operation'),
    cleaners = document.querySelectorAll('.delete'),
    result = document.getElementById('view-res'),
    decimal = document.querySelector('.decimal'),
    mines = document.querySelector('.mines'),
    newOrCurrent = false,
    globalNumber = '0',
    pendingOperation = '',
    radixControl = '';

numbers.forEach(el => {
    el.addEventListener('click', (e) => {
        showNumbers(e.target.innerText);
    });
});

operations.forEach(el => {
    el.addEventListener('click', (e) => {
        doSomeOperation(e.target.innerText);
    });
});

cleaners.forEach(el => {
    el.addEventListener('click', (e) => {
        deleteValue(e.target.innerText);
    });
});

decimal.addEventListener('click', (e) => {
    decimalNumber();
});

mines.addEventListener('click', (e) => {
    addOrDeleteMines();
});

function showNumbers(numbers) {
    if (radixControl != '-') {
        if (newOrCurrent || result.value == '0') {
            result.value = numbers;
            newOrCurrent = false;
        } else {
            if (numbers === '0' && result.value.length === 0) {
                result.value += '0';
            } else {
                result.value += numbers;
            }
        }
    } else {
        result.value += numbers;
    }
}

function decimalNumber() {
    if (newOrCurrent) {
        result.value = '0.';
        newOrCurrent = false;
    } else {
        if (!result.value.includes('.')) {
            if (result.value.length === 0 || result.value[0] === '-' && result.value[1] !== '0') {
                result.value += '0.';
                newOrCurrent = false;
            } else {
                result.value += '.';
                newOrCurrent = false;
            }
        }
    }
}


function doSomeOperation(operation) {
    if (newOrCurrent && pendingOperation !== '=') {
        result.value = globalNumber;
    } else if (operation == '√') {
        globalNumber = Math.sqrt(parseFloat(result.value));
        radixControl = '-';
        result.value = globalNumber;
        if (result.value == 'NaN') {
            result.value = 'Error. Click AC';
        }
    } else {
        newOrCurrent = true;
        if (pendingOperation == '-') {
            globalNumber = (parseFloat(globalNumber) - parseFloat(result.value)).toFixed(10).replace(/0*$/, '');
            if (globalNumber[globalNumber.length - 1] == '.') {
                globalNumber = globalNumber.slice(0, globalNumber.length - 1)
            }
        } else if (pendingOperation == '+') {
            globalNumber = (parseFloat(globalNumber) + parseFloat(result.value)).toFixed(10).replace(/0*$/, '');
            if (globalNumber[globalNumber.length - 1] == '.') {
                globalNumber = globalNumber.slice(0, globalNumber.length - 1)
            }
        } else if (pendingOperation == '/') {
            globalNumber = (parseFloat(globalNumber) / parseFloat(result.value)).toFixed(10).replace(/0*$/, '');
            if (globalNumber[globalNumber.length - 1] == '.') {
                globalNumber = globalNumber.slice(0, globalNumber.length - 1)
            }
        } else if (pendingOperation == '*') {
            globalNumber = (parseFloat(globalNumber) * parseFloat(result.value)).toFixed(10).replace(/0*$/, '');
            if (globalNumber[globalNumber.length - 1] == '.') {
                globalNumber = globalNumber.slice(0, globalNumber.length - 1)
            }
        } else if (pendingOperation.includes('n')) {
            globalNumber = (Math.pow(parseFloat(globalNumber), parseFloat(result.value))).toFixed(10).replace(/0*$/, '');
            if (globalNumber[globalNumber.length - 1] == '.') {
                globalNumber = globalNumber.slice(0, globalNumber.length - 1)
            }
        } else {
            globalNumber = result.value;
        }

        radixControl = '';
        result.value = globalNumber;
        pendingOperation = operation;
        if (result.value == 'NaN') {
            result.value = 'Error. Tab AC';
        }
    }
}

function deleteValue(deletes) {
    if (deletes == 'DEL') {
        let arr = result.value.split('');
        arr.pop();
        arr = arr.join('');
        result.value = arr;
        radixControl = '';
        newOrCurrent = false;
        if (result.value.length === 0) {
            result.value = '0';
            newOrCurrent = true;
        }
    } else {
        newOrCurrent = true;
        result.value = '0';
        globalNumber = '0';
        pendingOperation = '';
        radixControl = '';
    }
}

function addOrDeleteMines() {
    if (newOrCurrent) {
        result.value = '-';
        newOrCurrent = false;
    } else {
        if (!result.value.includes('-')) {
            result.value = '-' + result.value;
        } else {
            let deleteMines = result.value.split('');
            deleteMines.shift();
            deleteMines = deleteMines.join('');
            result.value = deleteMines;
        }
    }
}

/*Instruction*/

const showInstruction = document.getElementById('show-instruction'),
    instruction = document.querySelector('.instruction'),
    closeInstruction = document.getElementById('close');

showInstruction.addEventListener('click', () => {
    instruction.style.display = 'block'
    document.documentElement.style.overflow = 'hidden';
});

closeInstruction.addEventListener('click', () => {
    instruction.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
});