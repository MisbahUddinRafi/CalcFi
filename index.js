// CalcFi Code: 

const display = document.getElementById("displayField"); 

function appendItem(input) {
    if (display.value == "syntax error") {
        display.value = ""; 
    }

    let last = display.value.slice(-1); 
    let ops = "+-/*.";
    
    // TWO SUBSEQUENT OPERATORS ARE NOT ALLOWED:
    if (ops.includes(last) && ops.includes(input)) {
        return;
    }
    display.value += input;
}

function clearLast() {
    display.value = display.value.slice(0, -1); 
}

function clearAll() {
    display.value = ""; 
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "syntax error";
    }
}

