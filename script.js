let btnShow = document.querySelector('button');
let output = document.getElementById('dlity');

btnShow.addEventListener('click', () => {
    let today = new Date();
    let eoy = new Date('12/31/2022')

    let difference = eoy.getTime() - today.getTime();

    let msInDay = 1000 * 3600 * 24;

    output.innerText = difference/msInDay;
})