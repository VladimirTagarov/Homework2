// // 1

// const arr = [3, 5, 6, 9, 11, 1];
//     let multiple = arr.reduce((a,b) => a * b);
//     let summarize = arr.reduce((a,b) => a + b);
  
//     function getResult(array, callback) {
//         return callback;
// }

//    console.log(getResult(arr, multiple)); 
//    console.log(getResult(arr, summarize));  

// //    2

// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

//     users.sort(function(a, b){
//         if (a.age > b.age) {
//             return 1;
//         }
//         else if (a.age < b.age) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     });
//     console.log(users);

// 3
// function each(array, callback) {
//     callback(array);
// };

// let arr = [1, '4', 9, 'two'];
// let arr2 = [1, '4', false, 9, 'two'];
// function reversArr(arr) {
//     let arr3 = arr.reverse();
//     console.log(arr3);
//     return arr3;
// };

// function toNumberArr(arr2) {
//     arr2 = arr2.map((elem) => +elem).filter(function(value){
//         return !Number.isNaN(value);
//     });
//     console.log(arr2);
// }

// each(arr, reversArr);
// each(arr2, toNumberArr);


// // 4
// let timerId = setInterval(() => console.log(new Date), 3000);


// setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// 5

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        talk()
    }, 1000);

}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);

