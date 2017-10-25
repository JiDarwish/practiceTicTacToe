


function createGame(element) {
    this.board = element;
    this.playerOne = 'X';
    this.playerTwo = 'O';
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
    module.exports = createGame;
}
