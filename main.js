var allBoxes = [...document.querySelectorAll(".box")];

var reloadButon = document.getElementById("reload");
var playerO = document.getElementById("player1");
var PlayerT = document.getElementById("player2");
var option = "X";

var players = [];

function reloadBtn() {
    location.reload();
}

function startGame() {
    players = [
        {
            name: playerO.value,
            option: "X"
        }, {
            name: PlayerT.value,
            option: "O"
        },
    ];

    playerO.disabled = true;
    PlayerT.disabled = true;
    reloadButon.disabled = false;

    allBoxes.forEach(box => {
        box.addEventListener("click", (event) => {
            event.target.disabled = true;
            event.target.innerText = option;
            checkWinner(option);
            if (option == "X") {
                option = "O"
            } else {
                option = "X"
            }
        })
    })
}

function checkWinner(opt) {
    if (allBoxes[0].innerText == opt && allBoxes[1].innerText == opt && allBoxes[2].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[0].innerText == opt && allBoxes[4].innerText == opt && allBoxes[8].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[0].innerText == opt && allBoxes[3].innerText == opt && allBoxes[6].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[1].innerText == opt && allBoxes[4].innerText == opt && allBoxes[7].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[2].innerText == opt && allBoxes[5].innerText == opt && allBoxes[8].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[6].innerText == opt && allBoxes[7].innerText == opt && allBoxes[8].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[3].innerText == opt && allBoxes[4].innerText == opt && allBoxes[5].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else if (allBoxes[2].innerText == opt && allBoxes[4].innerText == opt && allBoxes[6].innerText == opt) {
        alert('Winner Is: ' + getWinner(opt));
    } else {
        var count = 0;
        allBoxes.forEach((box) => {
            if (box.innerText != "") {
                count++;
            }
            if (count == 9) {
                alert("Game Over (Tie)")
            }
        })
    }
}

function getWinner(opt) {
    allBoxes.forEach(box => {
        box.disabled = true;
    })

    return players.filter(o => o.option == opt)[0].name;
}