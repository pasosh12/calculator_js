require('./styles/calculator.css');

// Получаем элементы дисплея и кнопок
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

// Переменные для хранения текущего состояния
let firstOperand = ''; // Первый ввод
let secondOperand = ''; // Второй ввод
let operator = ''; // Текущая операция
let shouldResetDisplay = false; // Нужно ли сбросить дисплей

// Функция обновления дисплея
function updateDisplay(value) {
    display.textContent = value;
}

// Обработчик для кнопок
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;
    handleInput(buttonValue);
}

// Обработка ввода с клавиатуры
function handleKeyboardInput(event) {
    const key = event.key;

    if (!isNaN(key)) {
        handleNumber(key); // Если цифра
    } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(convertOperator(key));// Если оператор
    } else if ([',', '.'].includes(key)) {
        handleDecimalPoint(); // Если точка
    } else if (key === 'Enter' || key === '=') {
        calculateResult(); // Вычисление результата
    } else if (key === 'Escape' || key === 'Delete') {
        clearCalculator(); // Сброс калькулятора
    } else if (key === 'Backspace') {
        deleteLastDigit(); // Удаление последнего символа
    }
}

// Функция обработки ввода
function handleInput(input) {
    if (!isNaN(input)) {
        handleNumber(input); // Если это число
    } else if ([',', '.'].includes(input)) {
        handleDecimalPoint(); // Если точка
    } else if (['+', '-', '×', '÷'].includes(input)) {
        handleOperator(input); // Если это оператор
    } else if (input === '=') {
        calculateResult(); // Вычисляем результат
    } else if (input === 'AC') {
        clearCalculator(); // Сброс калькулятора
    } else if (input === '±') {
        toggleSign(); // Смена знака
    }else if (input === '%') {
        handlePercentage(); // Обработка процентов
    }
}

// Обработка ввода чисел
function handleNumber(input) {
    if (input === '.' && !operator) {
        // Для первого операнда
        if (!firstOperand.includes('.')) {
            firstOperand += firstOperand === '' ? '0.' : '.';
            updateDisplay(firstOperand);
        }
    } else if (input === '.' && operator) {
        // Для второго операнда
        if (!secondOperand.includes('.')) {
            secondOperand += secondOperand === '' ? '0.' : '.';
            updateDisplay(`${firstOperand} ${operator} ${secondOperand}`);
        }
    } else {
        // Если число введено, удаляем лишние ведущие нули
        if (shouldResetDisplay) {
            display.textContent = input;
            shouldResetDisplay = false;
        } else {
            display.textContent =
                display.textContent === '0' ? input : display.textContent + input;
        }

        // Обновляем операнд, сохраняя ведущий ноль перед точкой
        if (!operator) {
            firstOperand = formatOperand(firstOperand + input);
            updateDisplay(firstOperand);
        } else {
            secondOperand = formatOperand(secondOperand + input);
            updateDisplay(`${firstOperand} ${operator} ${secondOperand}`);
        }
    }
}

// Функция для форматирования операнда, сохраняющая "0." перед точкой
function formatOperand(operand) {
    // Если операнд начинается с точки, добавляем ведущий ноль
    if (operand.startsWith('.')) {
        operand = '0' + operand;
    }

    // Убираем лишние ведущие нули, но сохраняем "0." перед точкой
    operand = operand.replace(/^0+(?!\.)/, '');
    return operand === "" ? "0" : operand;
}

// Обработка ввода точки (дробного числа)
function handleDecimalPoint() {
    if (!operator) {
        // Работаем с первым операндом
        if (!firstOperand.includes('.') && isValidDecimal(firstOperand)) {
            firstOperand += firstOperand === '' ? '0.' : '.';
            updateDisplay(firstOperand);
        }
    } else {
        // Работаем со вторым операндом
        if (!secondOperand.includes('.') && isValidDecimal(secondOperand)) {
            secondOperand += secondOperand === '' ? '0.' : '.';
            updateDisplay(`${firstOperand} ${operator} ${secondOperand}`);
        }
    }
}

// Проверяем, если точка добавляется только после первого ненулевого символа
function isValidDecimal(operand) {
    // Убираем все начальные нули
    const trimmedOperand = operand.replace(/^0+/, '');

    // Если результат пустой (все символы были нулями), то точка допустима только один раз
    return trimmedOperand === '' || trimmedOperand.length > 0;
}

// Обработка операторов
function handleOperator(selectedOperator) {
    if (operator && secondOperand) {
        calculateResult(); // Сначала вычисляем результат, если есть два операнда
    }
    operator = selectedOperator;
    // shouldResetDisplay = true;
    updateDisplay(`${firstOperand} ${operator} ${secondOperand}`); // Отображаем оператор на дисплее
}

// Вычисление результата
function calculateResult() {
    const a = parseFloat(firstOperand);
    const b = parseFloat(secondOperand);
    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = (a - b);
            break;
        case '×':
            result = a * b;
            break;
        case '÷':
            result = b !== 0 ? a / b : 'Ошибка';
            break;
        default:
            return;
    }
    if (!Number.isInteger(result)) {
        result = result.toFixed(2); // Убираем лишние нули
    }

    updateDisplay(result);
    shouldResetDisplay = true;
    firstOperand = result.toString();
    secondOperand = '';
    operator = '';
}
// Смена знака операнда
function toggleSign() {
    if (display.textContent === '0') return; // Если на дисплее 0, ничего не делаем
    if (!operator || !secondOperand) {
        // Если оператор не выбран, изменяем знак первого операнда
        firstOperand = (parseFloat(firstOperand) * -1).toString();
        updateDisplay(firstOperand);
    } else {
        // Если оператор уже выбран, изменяем знак второго операнда
        secondOperand = (parseFloat(secondOperand) * -1).toString();
        updateDisplay(`${firstOperand} ${operator} ${secondOperand}`);
    }
}

// Удаление последнего символа
function deleteLastDigit() {
    if (shouldResetDisplay) return;
    display.textContent = display.textContent.slice(0, -1) || '0';
    if (!operator) {
        firstOperand = firstOperand.slice(0, -1);
    } else {
        secondOperand = secondOperand.slice(0, -1);
    }
}

// Сброс калькулятора
function clearCalculator() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    updateDisplay(0);
}

// Конвертация операторов клавиатуры в символы калькулятора
function convertOperator(key) {
    switch (key) {
        case '/':
            return '÷';
        case '*':
            return '×';
        default: {
            return key;
        }
    }
}
// Функция обработки процентов
function handlePercentage() {
    if (!operator) {
        // Если оператор не выбран, преобразуем первый операнд в процент
        if (firstOperand !== '') {
            firstOperand = (parseFloat(firstOperand) / 100).toString();
            updateDisplay(firstOperand);
        }
    } else {
        // Если оператор выбран, преобразуем второй операнд в процент от первого
        if (secondOperand !== '') {
            secondOperand = ((parseFloat(firstOperand) * parseFloat(secondOperand)) / 100).toString();
            updateDisplay(`${firstOperand} ${operator} ${secondOperand}`);
        }
    }
}
// Добавление обработчиков событий
buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});
document.addEventListener('keydown', handleKeyboardInput); // Обработка событий клавиатуры
