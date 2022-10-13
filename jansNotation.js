function jansNotation(arr) {
    let res = [];
    let number = [];
    let operators = [];

    let opertionEnum = {
        "+":(a,b) => a + b,
        "-":(a,b) => a - b,
        "*":(a,b) => a * b,
        "/":(a,b) => a / b
    }                                //енумерация

    for (let el of arr) {
        if (typeof (el) === "number") {
            number.push(el);        // така ще има два масива.Единият ще е числата, а другия с операторите.
        } else {
            operators.push(el);
        }
    }

    if (operators.length < number.length - 1) {          //ако дължината на масива от числа е по малък от операторите 
        console.log("Error: too many operands!")
        return;                                          //хвърля грешка. Напр. 2 числа 1 оператор
    } else if (number.length === operators.length || number.length === 0) {
        console.log("Error: not enough operands!")                                          //хвърля грешка. Напр. 2 числа 1 оператор
        return;
    }


    for (let el of arr){
        if (typeof(el) === "number"){
            res.push(el);
            continue;
        }
        let numA = res.pop(); // покава резултата наобратно, както е по условие.
        let numB = res.pop();
        let result = opertionEnum[el](numB, numA)
        res.push(result)
    }
console.log(res.join());
}


jansNotation([5,
    3,
    4,
    '*',
    '-'])
   