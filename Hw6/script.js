const arr = [1, 5, 4, 10, 0, 3];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == 10) break;
        console.log (arr[index]);
    }

const arr2 = [1, 5, 4, 10, 0, 3];
    console.log(arr2.indexOf(4));

const arr3 = [1, 3, 5, 10, 20];
    console.log(arr3.join(' '));

const multiArr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
    console.log(multiArr);

const arr5 = [1, 1, 1];
    arr5.push(2, 2, 2);
    console.log(arr5);

const arr6 = [9, 8, 7, 'a', 6, 5];
    arr6.sort();
    arr6.pop();
    console.log(arr6);

const arr7 = [9, 8, 7, 6, 5];
    let a = Number(prompt('Введите число от 1 до 10'));
    let search = arr7.includes(a);
    console.log(search);

let str = 'abcdef';
    str = str.split('');
    console.log(str);
    str.reverse();
    let newStr = str.join('');
    console.log(newStr);

let arr9 = [
    [1, 2, 3],
    [4, 5, 6]
];
    let str1 = arr9[0].join();
    let str2 = arr9[1].join();
    let totalStr = str1 + ',' + str2;
    totalStr = totalStr.split();
    console.log(totalStr);

let arr10 = [1, 3, 4, 8, 9, 7, 10];
    for (let index = 0; index < arr10.length-1; index++) {
        const element = arr10[index] + arr10[index+1];  
        console.log(element)
    }

function squareOfArr() {
    const arr11 = [2, 5, 5, 3];
    const newArr = arr11.map (el => el ** 2);
    console.log(newArr);
}
squareOfArr();

function getLengthWords(arr12) {
    arr12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];
    let element = arr12.map(item => item.split(''));
    elementTotal = element.map(el => el.length);
    console.log(elementTotal);
}
getLengthWords();

function negativeNums() {
    let arr13 = [5, -55, 555, 61, -7, 0, 65, 71];
    arrNegative = arr13.filter(el => el < 0);
    console.log(arrNegative);
}
negativeNums();