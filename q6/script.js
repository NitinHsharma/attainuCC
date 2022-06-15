var turn = "X";
var rows = document.querySelectorAll('.row');

rows.forEach(row => {
    row.addEventListener('click', function () {
        console.log("CLicked on row");
        if (row.innerHTML == "") {
            row.innerHTML = turn;
            checkWin()
            switchTurn();
        } else {
            alert("This spot is already taken!");
        }
    });
});

function checkWin() {
    var winingConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for (var i = 0; i < winingConditions.length; i++) {
        var row = winingConditions[i];
        var row1 = document.querySelectorAll('.row')[row[0]];
        var row2 = document.querySelectorAll('.row')[row[1]];
        var row3 = document.querySelectorAll('.row')[row[2]];
        if (row1.innerHTML == row2.innerHTML && row2.innerHTML == row3.innerHTML && row1.innerHTML != "") {
            alert(row1.innerHTML + " wins!");
            break;
        }
    }
}


function switchTurn() {
    if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }
}
