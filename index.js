let roundCounter = 0;

let sizeRows = 0;
let sizeCols = 0;
let winAmount = 0;

let minRounds = 0;

let wonAlready = false;

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'rgb(31, 31, 31)';
    body.style.color = 'white';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';

    const kezdoDiv = document.createElement('div');
    body.appendChild(kezdoDiv);
    kezdoDiv.setAttribute('id', 'kezdoDiv');
    kezdoDiv.style.height = '100px';
    kezdoDiv.style.display = 'flex';
    // kezdoDiv.style.flexDirection = 'column';
    kezdoDiv.style.justifyContent = 'flex-start';
    kezdoDiv.style.width = '80%';
    kezdoDiv.style.height = '150px';

    const kDiv = document.createElement('div');
    kezdoDiv.appendChild(kDiv);
    // kDiv.style.border = '1px solid white';
    kDiv.style.display = 'flex';
    kDiv.style.flexDirection = 'column';
    kDiv.style.justifyContent = 'center';
    kDiv.style.gap = '15px';
    kDiv.style.width = '50%';
    kDiv.style.height = '100%';

    const kDiv1 = document.createElement('div');
    kDiv.appendChild(kDiv1);
    kDiv1.style.display = 'flex';
    kDiv1.style.justifyContent = 'space-between';
    kDiv1.style.width = '100%';

    const label1 = document.createElement('label');
    kDiv1.appendChild(label1);
    label1.setAttribute('for', 'textBox1');
    label1.innerHTML = 'Sorok száma: ';

    const textBox1 = document.createElement('input');
    kDiv1.appendChild(textBox1);
    textBox1.setAttribute('type', 'text');
    textBox1.setAttribute('id', 'textBox1');
    // textBox1.style.width = '50%';

    const kDiv2 = document.createElement('div');
    kDiv.appendChild(kDiv2);
    kDiv2.style.display = 'flex';
    kDiv2.style.justifyContent = 'space-between';
    kDiv2.style.width = '100%';

    const label2 = document.createElement('label');
    kDiv2.appendChild(label2);
    label2.setAttribute('for', 'textBox2');
    label2.innerHTML = 'Oszlopok száma: ';

    const textBox2 = document.createElement('input');
    kDiv2.appendChild(textBox2);
    textBox2.setAttribute('type', 'text');
    textBox2.setAttribute('id', 'textBox2');
    // textBox2.style.width = '50%';

    const kDiv3 = document.createElement('div');
    kDiv.appendChild(kDiv3);
    kDiv3.style.display = 'flex';
    kDiv3.style.justifyContent = 'space-between';
    kDiv3.style.width = '100%';

    const label3 = document.createElement('label');
    kDiv3.appendChild(label3);
    label3.setAttribute('for', 'textBox3');
    label3.innerHTML = 'Pont a nyeréshez: ';

    const textBox3 = document.createElement('input');
    kDiv3.appendChild(textBox3);
    textBox3.setAttribute('type', 'text');
    textBox3.setAttribute('id', 'textBox3');
    // textBox3.style.width = '50%';

    const btnDiv = document.createElement('div');
    kezdoDiv.appendChild(btnDiv);
    // btnDiv.style.border = '1px solid white';
    btnDiv.style.display = 'flex';
    btnDiv.style.justifyContent = 'center';
    btnDiv.style.alignItems = 'center';
    btnDiv.style.width = '55%';
    // btnDiv.style.height = '250px';

    const generateBtn = document.createElement('input');
    btnDiv.appendChild(generateBtn);
    generateBtn.setAttribute('type', 'button');
    generateBtn.setAttribute('value', 'Létrehozás');
    generateBtn.style.width = '35%';
    generateBtn.style.height = '35%';
    generateBtn.style.fontSize = '150%';
    generateBtn.style.borderRadius = '5px';
    generateBtn.addEventListener('click', Generate);

    // TODO
    // if: abban az esetben, ha a textboxok egyike ures
    // textbox tartalmanak lekerese, felhasznalasa
    // uj div es gomb letrehozasa, uj jatek kezdese vele
    // meg egy textbox, a winAmount-hoz
});

const Generate = () => {
    const textBox1 = document.getElementById('textBox1');
    const textBox2 = document.getElementById('textBox2');
    const textBox3 = document.getElementById('textBox3');

    if (textBox1.value === '' || textBox2.value === '' || textBox3.value === '') {
        alert('Nem adott meg elég adatot!');
        console.log('Nem adott meg elég adatot!');
    } else if (
        textBox1.value < 3 ||
        textBox2.value < 3 ||
        textBox3.value < 3 ||
        textBox1.value > 100 ||
        textBox2.value > 100 /*||*/
        // textBox3.value > textBox1.value ||
        // textBox3.value > textBox2.value
    ) {
        alert('Nem megfelelőek a megadott számok!');
    } else {
        sizeRows = textBox1.value * 1;
        sizeCols = textBox2.value * 1;
        winAmount = textBox3.value * 1;

        const body = document.getElementsByTagName('body')[0];

        const kezdoDiv = document.getElementById('kezdoDiv');
        body.removeChild(kezdoDiv);

        const playField = document.createElement('div');
        body.appendChild(playField);
        playField.setAttribute('id', 'playField');
        playField.style.display = 'flex';
        playField.style.flexDirection = 'column';
        playField.style.border = '3px solid lightblue';

        for (let i = 0; i < sizeRows; i++) {
            const row = document.createElement('div');
            row.setAttribute('id', `row${i + 1}`);
            row.style.width = `${sizeRows * 100}}px`;
            row.style.height = '100px';
            row.style.border = '2px solid white';
            row.style.display = 'flex';
            row.style.flexDirection = 'row';
            playField.appendChild(row);
            for (let j = 0; j < sizeCols; j++) {
                const col = document.createElement('div');
                col.setAttribute('id', `col${i + 1}${j + 1}`);
                col.style.width = '100px';
                col.style.height = '100px';
                col.style.border = '1px solid white';
                col.style.backgroundColor = 'gray';
                col.setAttribute('class', 'playTiles');
                col.style.display = 'flex';
                col.style.justifyContent = 'center';
                col.style.alignItems = 'center';
                col.style.fontSize = '300%';
                col.style.color = 'white';
                col.dataset.id = `${i * sizeCols + j + 1}`;
                col.dataset.x = `${j + 1}`;
                col.dataset.y = `${i + 1}`;

                row.appendChild(col);
            }
        }

        const tilesArray = Array.from(document.getElementsByClassName('playTiles'));
        // console.log(tilesArray);
        for (let item of tilesArray) {
            item.addEventListener('click', placeMark);
        }
    }
};

function placeMark() {
    // console.log(this.getAttribute('data-id'));
    const tilesArray = Array.from(document.getElementsByClassName('playTiles'));
    for (let item of tilesArray) {
        item.style.backgroundColor = 'gray';
    }

    this.style.backgroundColor = 'pink';

    if (roundCounter % 2 == 0) {
        this.innerHTML = 'X';
        this.dataset.symbol = 'X';
    } else {
        this.innerHTML = 'O';
        this.dataset.symbol = 'O';
        this.style.color = 'black';
    }
    roundCounter++;
    this.removeEventListener('click', placeMark);

    minRounds = winAmount * 2 - 1;
    // console.log(minRounds);
    // console.log(roundCounter);

    let playFieldSize = sizeRows * sizeCols;
    // console.log(playFieldSize);

    if (roundCounter === playFieldSize && !wonAlready) {
        setTimeout(() => {
            if (!wonAlready) {
                console.log('Vége a játéknak!');
                console.log('Nincs nyertes.');
                setTimeout(() => {
                    alert('Vége a játéknak! Döntetlen!');
                    newGame();
                }, 1000);
            }
        }, 1000);
    }
    if (roundCounter >= minRounds) {
        checkWin(this);
    }
}

const checkWin = (element) => {
    console.log(element);
    const tiles = document.getElementsByClassName('playTiles');
    // console.log(tiles);
    const dataSymbol = element.getAttribute('data-symbol');
    // console.log(dataSymbol);
    const x = element.getAttribute('data-x') * 1;
    const y = element.getAttribute('data-y') * 1;
    // console.log(x);
    // console.log(y);

    // col:
    const col = [];

    for (let i = 0; i < tiles.length; i++) {
        for (let j = winAmount * -1 + 1; j < winAmount; j++) {
            if (tiles[i].getAttribute('data-x') == x && tiles[i].getAttribute('data-y') == y + j) {
                col.push({
                    x: tiles[i].getAttribute('data-x') * 1,
                    y: tiles[i].getAttribute('data-y') * 1,
                    symbol: tiles[i].innerHTML,
                });
            }
        }
    }
    // console.log(col);

    let colWinCounter = 0;
    let colWin = false;
    for (let item of col) {
        if (item.symbol == dataSymbol) {
            colWinCounter++;
            if (colWinCounter === winAmount) {
                colWin = true;
            }
        } else if (item.symbol !== dataSymbol) {
            colWinCounter = 0;
        }
    }
    // console.log(`${colWinCounter} and ${colWin}`);

    if (colWin) {
        const tilesArray = Array.from(document.getElementsByClassName('playTiles'));
        for (let item of tilesArray) {
            item.removeEventListener('click', placeMark);
        }

        console.log(`${dataSymbol} wins!`);
        wonAlready = true;
    } else {
        // row:

        // console.log('no col win');

        const row = [];
        for (let i = 0; i < tiles.length; i++) {
            for (let j = winAmount * -1 + 1; j < winAmount; j++) {
                if (
                    tiles[i].getAttribute('data-y') == y &&
                    tiles[i].getAttribute('data-x') == x + j
                ) {
                    row.push({
                        x: tiles[i].getAttribute('data-x') * 1,
                        y: tiles[i].getAttribute('data-y') * 1,
                        symbol: tiles[i].innerHTML,
                    });
                }
            }
        }
        // console.log(row);

        let rowWinCounter = 0;
        let rowWin = false;
        for (let item of row) {
            if (item.symbol == dataSymbol) {
                rowWinCounter++;
                if (rowWinCounter === winAmount) {
                    rowWin = true;
                }
            } else if (item.symbol !== dataSymbol) {
                rowWinCounter = 0;
            }
        }
        // console.log(`${rowWinCounter} and ${rowWin}`);

        if (rowWin) {
            const tilesArray = Array.from(document.getElementsByClassName('playTiles'));
            for (let item of tilesArray) {
                item.removeEventListener('click', placeMark);
            }

            console.log(`${dataSymbol} wins!`);
            wonAlready = true;
        } else {
            // 1st cross:
            // bal lentrol jobb fentre

            // console.log('no row win');

            const cross1 = [];
            for (let i = 0; i < tiles.length; i++) {
                for (let j = winAmount * -1 + 1; j < winAmount; j++) {
                    if (
                        tiles[i].getAttribute('data-x') == x + j &&
                        tiles[i].getAttribute('data-y') == y - j
                    ) {
                        cross1.push({
                            x: tiles[i].getAttribute('data-x') * 1,
                            y: tiles[i].getAttribute('data-y') * 1,
                            symbol: tiles[i].innerHTML,
                        });
                    }
                }
            }
            // console.log(cross1);

            let cross1WinCounter = 0;
            let cross1Win = false;
            for (let item of cross1) {
                if (item.symbol == dataSymbol) {
                    cross1WinCounter++;
                    if (cross1WinCounter === winAmount) {
                        cross1Win = true;
                    }
                } else if (item.symbol !== dataSymbol) {
                    cross1WinCounter = 0;
                }
                // console.log(cross1WinCounter);
            }
            // console.log(`${cross1WinCounter} and ${cross1Win}`);

            if (cross1Win) {
                const tilesArray = Array.from(document.getElementsByClassName('playTiles'));
                for (let item of tilesArray) {
                    item.removeEventListener('click', placeMark);
                }

                console.log(`${dataSymbol} wins!`);
                wonAlready = true;
            } else {
                // 2nd cross:
                // bal fentrol jobb lentre ??

                console.log('no cross1 win');

                const cross2 = [];
                for (let i = 0; i < tiles.length; i++) {
                    for (let j = winAmount * -1 + 1; j < winAmount; j++) {
                        if (
                            tiles[i].getAttribute('data-x') == x + j &&
                            tiles[i].getAttribute('data-y') == y + j
                        ) {
                            cross2.push({
                                x: tiles[i].getAttribute('data-x') * 1,
                                y: tiles[i].getAttribute('data-y') * 1,
                                symbol: tiles[i].innerHTML,
                            });
                        }
                    }
                }
                console.log(cross2);

                let cross2WinCounter = 0;
                let cross2Win = false;
                for (let item of cross2) {
                    if (item.symbol == dataSymbol) {
                        cross2WinCounter++;
                        if (cross2WinCounter === winAmount) {
                            cross2Win = true;
                        }
                    } else if (item.symbol !== dataSymbol) {
                        cross2WinCounter = 0;
                    }
                    console.log(cross2WinCounter);
                }
                // console.log(`${cross2WinCounter} and ${cross2Win}`);

                if (cross2Win) {
                    const tilesArray = Array.from(document.getElementsByClassName('playTiles'));
                    for (let item of tilesArray) {
                        item.removeEventListener('click', placeMark);
                    }

                    console.log(`${dataSymbol} wins!`);
                    wonAlready = true;
                }
            }
        }
    }

    if (wonAlready) {
        setTimeout(() => {
            alert(`${dataSymbol} a nyertes!`);
            // setTimeout(() => {
            newGame();
            // }, 2000);
        }, 1000);
    }
};

const newGame = () => {
    const body = document.getElementsByTagName('body')[0];
    // const playField = document.getElementById('playField');
    // body.removeChild(playField);

    const newDiv = document.createElement('div');
    body.appendChild(newDiv);
    // newDiv.style.border = '1px solid white';
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'center';
    newDiv.style.alignItems = 'center';
    newDiv.style.width = '20%';
    newDiv.style.height = '100px';
    newDiv.style.marginTop = '50px';

    const newGameBtn = document.createElement('input');
    newDiv.appendChild(newGameBtn);
    newGameBtn.setAttribute('type', 'button');
    newGameBtn.setAttribute('value', 'Új játék');
    newGameBtn.style.width = '40%';
    newGameBtn.style.height = '50%';
    newGameBtn.style.borderRadius = '5px';
    newGameBtn.style.fontSize = '150%';
    newGameBtn.addEventListener('click', Refresh);
};

const Refresh = () => {
    location.reload();
};
