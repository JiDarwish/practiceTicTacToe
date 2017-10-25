


function createGame() {
    this.board = document.getElementById('gameBoard');
    this.playerOne = 'X';
    this.playerTwo = 'O';
}






let blaGame = new createGame;
console.log(blaGame.board);


module.exports = createGame;