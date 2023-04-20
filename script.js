// let a = 10;
// alert(a);

// a = 20;
// alert(a);

let yearOfIssueIphone = 2007;
alert(yearOfIssueIphone);

let languageCreator = 'Брендан Эйх';
alert(languageCreator);

let num_1 = 10;
let num_2 = 2;
alert(num_1 + num_2);
alert(num_1 - num_2);
alert(num_1 * num_2);
alert(num_1 / num_2);

let result = (2 ** 5);
alert(result);

let a = 9;
let b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = prompt('Сколько Вам лет?');
alert(age);

let user = {
        name: 'Vladimir',
        age: 32,
        isAdmin: false
    };
user['city of residence'] = 'Moscow';
user.age = 37;
delete user['city of residence'];

let info = prompt('Какую информацию хотите узнать о пользователе?', 'name');
alert(user[info]);

let yourName = prompt('Введите ваше имя');
alert(`Привет, ${yourName}!`);
