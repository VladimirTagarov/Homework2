function findMinNumber(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

console.log(findMinNumber(2, 3)); 
console.log(findMinNumber(6, 6)); 

let isOddNumber = function() {
    let num = prompt('Введите число');
    if ((num % 2) == 0) {
        alert('Число четное');        
    } else {
        alert('Число нечетное');         
    }
}
isOddNumber();

let getSquareOfNumber = function() {
    let c = prompt('Введите число');
    
    console.log(c ** 2);
}
getSquareOfNumber();

let getSquareNumber = function() {
    let c = prompt('Введите число');
    
    alert(c ** 2);
}
getSquareNumber();

function howOldAreYou() {
    let age = prompt("Сколько Вам лет?");
    if (age < 0) {
        alert ('Вы ввели неправильное значение');
    } 
    else if (age < 13) {
        alert ('Привет, друг!');
    
    }
    else{
        alert ('Добро пожаловать!')
    }
}
howOldAreYou();

function isCorrectNumber() {
    let firstNum = prompt('Введите первое число');
    let secondNum = prompt('Введите второе число');
    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert ('Одно или оба значения не являются числом');
    } else {
        alert (firstNum * secondNum);
    }

}
isCorrectNumber();

function cubing() {
    let num = prompt('Введите число');
    if (isNaN(num)) {
        alert ('То, что вы ввели не является числом');
    } else {
        alert (`${num} в кубе равняется ${num ** 3}`);
    }
}
cubing();

const circle1 = {
    radius : 3,
    getArea() {
        alert(Math.PI * (circle1.radius ** 2));
    },
    getPerimeter() {
        alert(2* Math.PI * circle1.radius);
    }
}
const circle2 = {
    radius : 5,
    getArea() {
        alert(Math.PI * (circle2.radius ** 2));
    },
    getPerimeter() {
        alert(2* Math.PI * circle2.radius);
    }
}

circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();
