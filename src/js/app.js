const cells = document.querySelectorAll(".item");
const checkYou = document.querySelector('.checkYouNumber');
const checkGoblin = document.querySelector('.checkGoblinNumber');

const imgEl = document.createElement('img');
imgEl.src = 'src/goblin.png';
let indexNow = getRandomInt(0, cells.length);
cells[indexNow].appendChild(imgEl);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}

function resetGame(message) {
    setTimeout(() => {
        alert(message);
        checkYou.textContent = 0;
        checkGoblin.textContent = 0;
    }, 50)
}

setInterval(() => {
    let index = getRandomInt(0, cells.length);
    while (indexNow == index) {
        index = getRandomInt(0, cells.length);
    }
    const img = document.querySelector('img')
    cells[index].appendChild(img);
    indexNow = index;
}, 700)

cells.forEach(function(cell) {
    cell.addEventListener('click', (event) => {
        let index = Array.from(cells).indexOf(event.target);
        if (index == -1) {
            checkYou.textContent = Number(checkYou.textContent) + 1;
            if (Number(checkYou.textContent) == 5) {
                resetGame('Вы выиграли!')
            }
        } else {
            checkGoblin.textContent = Number(checkGoblin.textContent) + 1
            if (Number(checkGoblin.textContent) == 10) {
                resetGame('Вы проиграли!')
            }
        }
    }, false)
});