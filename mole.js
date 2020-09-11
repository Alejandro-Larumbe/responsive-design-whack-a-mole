let timerPopper;

function getRamdomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max- min + 1)) + min;
}

function popUpRandomMole() {
    let moleHeads = document.querySelectorAll(".wsg__mole-head")
    const moleIndex = getRamdomIntInclusive(1, 7);
    const moleHead = moleHeads[moleIndex]

    setTimeout(() => {

        hideMole(moleHead)
    }, 1000);
}

function hideMole(mole) {
    mole.classList.add('wgs__mole-head--hidden')
};
