var exp = '', number, decimal, equal, operator, allowSR = true;
var textvieuw = document.forms['myForm']['textvieuw'];

function insertNum(num) {
    if (equal) {
        exp = num;
        textvieuw.value = exp;
        number = true;
        equal = false;

    }
    else {
        exp = textvieuw.value + num;
        textvieuw.value = exp;
        number = true;
    }
    if (operator) decimal = false;
    SR('a');
}

function insertOp(op) {
    textvieuw.value = exp + op;
    operator = true;
    equal = false;
    allowSR = false;
    SR('a');
}
function insertDec() {
    if (number && !decimal) {
        textvieuw.value = exp + '.';
        decimal = true;
        operator = false;

    }
}

function equalTo() {
    if (exp) {
        exp = eval(exp);
        textvieuw.value = exp;
        equal = true;
        decimal = false;
        number = false;
        allowSR = true;
        SR('a');
    }
}

function clean() {
    exp = '';
    textvieuw.value = exp;
    decimal = false;

}

function back() {
    exp = textvieuw.value;
    exp = exp.substring(0, exp.length - 1);
    textvieuw.value = exp;
}

function SR(x) {

    if (x == 's') {
        exp = exp * exp;
        textvieuw.value = exp;
    }
    else if (x == 'a' && allowSR) {

        document.getElementById('s').disabled = false;
    }
    else if (!allowSR) {

        document.getElementById('s').disabled = true;
    }
}