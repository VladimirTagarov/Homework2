let i = 1;
while (i < 3){
    console.log('Привет');
    i++;
}

let j = 1;
while (j <= 5){
    console.log(j);
    j++;
}

let k = 7;
while(k <= 22){
    console.log(k);
    k++;
}

let obj = {
'Коля' : '200',
'Вася' : '300',
'Петя' : '400'
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
    }

let n = 1000;
let num = 0;
while(n > 50){
    console.log(n);
    n = n / 2;
    num++;
}
console.log(num);

let firstFriday = 4;
for(firstFriday; firstFriday < 32; firstFriday = firstFriday + 7){
    console.log(`Сегодня пятница ${firstFriday}-е число. Необходимо подготовить отчет`);    
}
