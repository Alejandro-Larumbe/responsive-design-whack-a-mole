
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(popUpRandomMole, 0);
})

function getRamdomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max- min + 1)) + min;
}

function popUpRandomMole() {
    let moleHeads = document.getElementsByClassName('wgs__mole-head')
    let moleIndex = getRamdomIntInclusive(1, 7);
    // console.log(moleIndex);
    let moleHead = moleHeads[moleIndex]
    // console.log(moleHeads)
    console.log(moleHead)
    moleHead.classList.remove('wgs__mole-head--hidden');

    setTimeout(() => hideMole(moleHead), 1000);
}

function hideMole(mole) {
    mole.classList.add('wgs__mole-head--hidden')
    setTimeout(popUpRandomMole, 1000);
};

