let board = 'A fake board';
let body = 'A fake body';

let game = require('./ticTacToe');
let currentGame = new game(board, body);

describe('currentGame variables', () => {


    it('should have a board', () => {
        expect(currentGame.board).toBeDefined();
    });

    it('should have two players', () => {
        expect(currentGame.playerOne).toBeDefined();
        expect(currentGame.playerTwo).toBeDefined();
    });

    it('should have a winner variable', () => {
        expect(currentGame.winner).toBeDefined();
    });

    it('should have a turn variable', () => {
        expect(currentGame.turn).toBeDefined();
    });

});


describe('currentGame methods', () => {

    it('Should have startGame method', () => {
        expect(currentGame.startGame).toBeDefined();
    });

    it('Should have startNewGame method', () => {
        expect(currentGame.startNewGame).toBeDefined();
    });

    it('Should have play method', () => {
        expect(currentGame.play).toBeDefined();
    });

    it('Should have getWinner method', () => {
        expect(currentGame.getWinner).toBeDefined();
    });

    it('Should have getBoardState method', () => {
        expect(currentGame.getBoardState).toBeDefined();
    });

    it('Should have checkBox methode', () => {
        expect(currentGame.checkBox).toBeDefined();
    });

    it('Should have swapturn methode', () => {
        expect(currentGame.swapturn).toBeDefined();
    });

    it('Should have message methode', () => {
        expect(currentGame.message).toBeDefined();
    });


});



describe('methods check', () => {



});
