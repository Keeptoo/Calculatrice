let bouton = [...document.querySelectorAll('.key')]
let keycode = bouton.map(bouton => bouton.dataset.key)
let firstpart = document.querySelector('.firstpart')

addEventListener('click', (e) => {
    let value = e.target.dataset.key;
    calcul(value)
})

function calcul(value) {
    if (keycode.includes(value)) {
        switch (value) {
            case '8':
                firstpart.textContent = '';
                break;
            case '188':
                let calcule = eval(firstpart.textContent);
                firstpart.textContent = calcule;
                break;
            default:
                let indexkeycode = keycode.indexOf(value)
                let boutons = bouton[indexkeycode]
                firstpart.textContent += boutons.innerHTML;
                break;
        }
    }
}


