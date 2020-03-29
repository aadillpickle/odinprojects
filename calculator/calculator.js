const display = document.querySelector(".display")
var displayText = '';
function add(x, y)
{ 
    return x + y;
}

function subtract (x, y) 
{
	return x-y;
}

function multiply (x, y) 
{
	return x*y;
}
function divide (x, y)
{ 
    return x/y;
}

function power(x, y) 
{
	return x**y;
}

function operate(inputStr)
{
    clearDisplay();
    solution = '';
    for (var i = 0; i < inputStr.length; i++)
    {

    }
    if (operator == '+'){
        add(x, y);
    }
    else if (operator == '-'){
        subtract(x, y);
    }
    else if (operator == '*'){
        multiply(x, y);
    }
    else if (operator == '/'){
        divide(x, y);
    }
    else if (operator == '^')
    {
        power(x, y);
    }
    addToDisplay(solution);
    displayText = solution;
}

function addToDisplay(text)
{
    display.innerHTML += text;
    displayText += text;
}
function clearDisplay()
{
    display.innerHTML = '';
}