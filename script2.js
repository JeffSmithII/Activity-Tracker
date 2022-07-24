let date1 = new Date();
let date2 = new Date('12/25/2022');

let btnGet = document.querySelector('#button2');
let result = document.querySelector('h3');

btnGet.addEventListener('click', () => {
    let diff = date2.getTime() - date1.getTime();

    let msInDay = 1000 * 3600 * 24;

    result.innerText = diff/msInDay;

});