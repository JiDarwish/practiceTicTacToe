function createGame(element, body) {
    this.body = body;
    this.board = element;
    this.playerOne = 'X';
    this.playerTwo = 'O';
    this.turn = '';
    this.winner = false;
}

//Mthod will run once players start and will decide who starts and display the board
createGame.prototype.startGame = function () {
    if (this.turn == '') {
        if (Math.random() > 0.5) {
            this.turn = this.playerOne;
        } else {
            this.turn = this.playerTwo;
        }
        this.message(this.turn + " gets to start")
    }

    this.body.getElementById('gameBoard').style.display = 'table';
    this.body.getElementById('startNewGame').style.display = 'initial';
    this.body.getElementById('startGame').style.display = 'none';
}
//method invoked by pressing button will clear all the cells
createGame.prototype.startNewGame = function () {
    this.winner = false;
    this.turn = '';
    this.clearAll();
    this.startGame();
}

//once a cell is clicked by whtever player
createGame.prototype.play = function (element) {
    if (!this.winner) {
        let messege = this.message;
        if (element.innerHTML == '') {
            element.innerHTML = this.turn;
            this.swapturn();
        } else {
            this.message('No cheating! It\'s already Taken');
        }
    }
}

//Will check the board to see if there is any winner
createGame.prototype.getWinner = function () {
    if (this.getBoardState(1, 2, 3, this.turn) ||
        this.getBoardState(4, 5, 6, this.turn) ||
        this.getBoardState(7, 8, 9, this.turn) ||
        this.getBoardState(1, 4, 7, this.turn) ||
        this.getBoardState(2, 5, 8, this.turn) ||
        this.getBoardState(3, 6, 9, this.turn) ||
        this.getBoardState(1, 5, 9, this.turn) ||
        this.getBoardState(3, 5, 7, this.turn)) {
        this.winner = true;
    }
    return this.winner;
}
//Helps the getWinner function check the boxes
createGame.prototype.getBoardState = function (a, b, c, move) {
    var result = false;
    if (this.checkBox(a) === move && this.checkBox(b) === move && this.checkBox(c) === move) {
        result = true;
    }
    return result;
}
//Helps the getWinner function check the boxes
createGame.prototype.checkBox = function (num) {
    return this.body.getElementById('num' + num).innerHTML;
}

//When a player finishes his move it swaps turns
createGame.prototype.swapturn = function (turn) {
    if (this.getWinner()) {
        this.message('player ' + this.turn + ' has won!!!');
    } else {
        this.turn = (this.turn === this.playerOne) ? this.playerTwo : this.playerOne;
        this.message("It's " + this.turn + "'s turn!");
    }
}

//Changes the content of the message that tells the players what is going on
createGame.prototype.message = function (mes) {
    this.body.getElementById('message').innerHTML = mes;
}

//Will clear all the boxes once called
createGame.prototype.clearAll = function () {
    console.log();
    for (let i = 0; i <= 9; i++) {
        if (document.getElementById('num' + i) != null) {
            document.getElementById('num' + i).innerHTML = '';
        }
    }
}

//Exporting the createGame function
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = createGame;
}
