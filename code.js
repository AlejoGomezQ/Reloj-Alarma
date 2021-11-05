'use strict'

const addZeros = n => {
    if(n.toString().length < 2) return `0${n}`;
    return n;
}

const upgradeHour = () => {
    const time = new Date();
    let hour = addZeros(time.getHours());
    let minutes = addZeros(time.getMinutes());
    let seconds = addZeros(time.getSeconds());

    document.querySelector('.hour').textContent = hour;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
}

upgradeHour();

setInterval(upgradeHour, 1000);