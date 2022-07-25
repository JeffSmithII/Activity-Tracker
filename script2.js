let date1 = document.querySelector('#input1').value;
let date2 = document.querySelector('#input2').value;

let btnGet = document.querySelector('#button2');
let result = document.querySelector('h3');

btnGet.addEventListener('click', () => {
    let diff = date2.getTime() - date1.getTime();

    let msInDay = 1000 * 3600 * 24;

    result.innerText = diff/msInDay;

});