// // 1
// let string = 'Привет, это мое седьмое Домашнее Задание по JS'
// string = string.toUpperCase();
// console.log(string);

// // 2
//     const searchStart = (['Кошка', 'Кит', 'Комар', 'Носорог']); 
//     let search = 'ко';
//     function searchWords() {
//     searchStart.forEach(element => {
//         if (element.toLowerCase().includes(search.toLowerCase())) {
//         console.log(element);}
//     });
//     }
// searchWords();

// // 3
// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));

// // 4
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// // 5
// function getRandomNum() {
//     console.log(Math.random() * 10);
// }
// getRandomNum()

// // 6
// function getRandomArrNumbers() {
//     let a = Number(prompt('Введите целое число'));
//     let arr = [];
//     for (let index = 0; index < (Math.floor(a / 2)); index++) {
//         arr.push(Math.round(Math.random() * a));
//     }
//     console.log(arr);
// }
// getRandomArrNumbers();

// // 7
// function getRandomNumbers() {
//     let b = Number(prompt('Введите целое число'));
//     let c = Number(prompt('Введите целое число'));
//     let numberRandom = Math.round((Math.random() * (c)) + b);
//     console.log(numberRandom);
// }
// getRandomNumbers();

// // 8
// let currentDate = new Date();
// console.log(currentDate);

// // 9
// let currentDate9 = new Date();
// currentDate9 = Number(currentDate9);
// let days73 = 73 * 24 * 60 * 60 * 1000;
// let searchDate = currentDate9 + days73;
// let days73After = new Date(searchDate);
// console.log(days73After);

// 10
function returningDateInRussianLang() {
    let inputDate = new Date(prompt('Введите дату в виде: мм.дд.гггг чч:мм:сс'));
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let fullDate = 'Дата: ' + inputDate.getDate() + months[inputDate.getMonth()] + inputDate.getFullYear() + ' - это ' + days[inputDate.getDay()];
    let fullTime = 'Время: ' + inputDate.getHours() + ':' + inputDate.getMinutes() + ':' + inputDate.getSeconds();
    console.log(fullDate);
    console.log(fullTime);
}
returningDateInRussianLang();
