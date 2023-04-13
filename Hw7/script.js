let string = 'Привет, это мое седьмое Домашнее Задание по JS'
string = string.toUpperCase();
console.log(string);

    const searchStart = (['Кошка', 'Кит', 'Комар', 'Носорог']); 
    let search = 'ко';
    function searchWords() {
    searchStart.forEach(element => {
        if (element.toLowerCase().includes(search.toLowerCase())) {
        console.log(element);}
    });
    }
searchWords();


