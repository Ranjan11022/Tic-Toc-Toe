const boxes = Array.from(document.getElementsByClassName('box'))
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', reset);
const headerText = document.getElementById('header')
const areas = [null, null, null, null, null, null, null, null, null]
const o_text = 'O';
const x_text = 'X';
let currentPlayer = x_text;
let winBoxs = [];

function bindClickEvent() {
    boxes.forEach(box => {
        box.addEventListener('click', handleBoxClick);
    })
}
bindClickEvent();
function handleBoxClick(e) {
    if (winBoxs.length > 0) {
        return
    }
    const id = e.target.id;
    if (!areas[id]) {
        areas[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;

        if (hasPlayerWon(currentPlayer)) {
            headerText.innerHTML = `${currentPlayer} has won!!`;
            headerText.style.background = 'lightgreen';
            changeWinBoxesbg();
            return
        }
        currentPlayer = currentPlayer === o_text ? x_text : o_text;
    }
    
}
function hasPlayerWon(cPlayer){
    if (areas[0] === cPlayer) {
        if (areas[1] === cPlayer && areas[2] === cPlayer) {
            winBoxs = [0, 1, 2];
            return true;
        }
        if (areas[3] === cPlayer && areas[6] === cPlayer) {
            winBoxs = [0, 3, 6];
            return true;
        }
        if (areas[4] === cPlayer && areas[8] === cPlayer) {
            winBoxs = [0, 4, 8];
            return true;
        }
    }
    if (areas[4] === cPlayer) {
        if (areas[1] === cPlayer && areas[7] === cPlayer) {
            winBoxs = [4, 1, 7];
            return true;
        }
        if (areas[2] === cPlayer && areas[6] === cPlayer) {
            winBoxs = [4, 2, 6];
            return true;
        }
        if (areas[3] === cPlayer && areas[5] === cPlayer) {
            winBoxs = [4, 3, 5];
            return true;
        }
    }
    if (areas[8] === cPlayer) {
        if (areas[7] === cPlayer && areas[6] === cPlayer) {
            winBoxs = [8, 7, 6];
            return true;
        }
        if (areas[5] === cPlayer && areas[2] === cPlayer) {
            winBoxs = [8, 5, 2];
            return true;
        }
    }
}
function changeWinBoxesbg() {
    winBoxs.forEach(id => {
        boxes[id].style.background = 'lightgreen'
    })
    boxes.forEach(box => {
        box.style.cursor = 'not-allowed'
    })
}
function reset() {
    winBoxs = [];
    areas.forEach((val, index) => {
        areas[index] = null;

    })
    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.background = '';
        box.style.cursor ='pointer'
    })
    headerText.innerHTML = "Let's Play!!";
    headerText.style.background = '';
    currentPlayer = o_text;
}