const prompt = require('prompt-sync')();

// This is a class that represents a Tic Tac Toe console game.
class TicTacToeGame{
    static optionalPlayers = ['X', 'O'];
    static emptyCell = ' ';
    constructor(){
        this.board = TicTacToeGame.getInitialBoard();
        this.currentPlayer = TicTacToeGame.optionalPlayers[0];
        this.isGameOver = false;
    }

    static getInitialBoard(){
        return [
            [TicTacToeGame.emptyCell, TicTacToeGame.emptyCell, TicTacToeGame.emptyCell],
            [TicTacToeGame.emptyCell, TicTacToeGame.emptyCell, TicTacToeGame.emptyCell],
            [TicTacToeGame.emptyCell, TicTacToeGame.emptyCell, TicTacToeGame.emptyCell]
        ];
    }

    static print(message){
        console.log(message);
    }

    printBoard(){
        const delimiter = '|';
        TicTacToeGame.print(this.board[0].join(delimiter));
        TicTacToeGame.print(this.board[1].join(delimiter));
        TicTacToeGame.print(this.board[2].join(delimiter));
    }

    setIsGameOver(){
        this.isGameOver = this.isWin() || this.isDraw();
    }

    isBoardFull(){
        return this.board.every(row => row.every(cell => cell !== TicTacToeGame.emptyCell));
    }
    isDraw(){
        return !this.isWin() && this.isBoardFull();
    }

    isWin(){
        return this.isRowWin() || this.isColumnWin() || this.isDiagonalWin();
    }

    isRowWin(){
        return this.board.some(row => row.every(cell => cell === this.currentPlayer));
    }


    isColumnWin(){
        return this.board.some((_, index) => this.board.every(row => row[index] === this.currentPlayer));
    }

    isStrongDiagonalWin(){
        return this.board.every((row, index) => row[index] === this.currentPlayer);
    }

    isWeakDiagonalWin(){
        return this.board.every((row, index) => row[row.length - index - 1] === this.currentPlayer);
    }

    isDiagonalWin(){
        return this.isStrongDiagonalWin() || this.isWeakDiagonalWin();
    }

    isPositionOccupied({rowIndex, columnIndex}){
        return this.board[rowIndex][columnIndex] !== TicTacToeGame.emptyCell;
    }
    placeMark({rowIndex, columnIndex}){
        this.board[rowIndex][columnIndex] = this.currentPlayer;
    }

    setNextPlayer(){
        const currentPlayerIndex = TicTacToeGame.optionalPlayers.indexOf(this.currentPlayer);
        const nextPlayerIndex = (currentPlayerIndex + 1) % TicTacToeGame.optionalPlayers.length;
        this.currentPlayer = TicTacToeGame.optionalPlayers[nextPlayerIndex];
    }

    isInputValidNumber(input){
        return !isNaN(input);
    }

    isNumberInBoardRange(number){
        return number >= 0 && number <= 2;
    }

    isInputValid(input){
        return this.isInputValidNumber(input) && this.isNumberInBoardRange(input);
    }
    getUserNextPosition(){
        const rowNumber = Number(prompt('Enter row: '));
        const columnNumber = Number(prompt('Enter column: '));
        return {rowIndex: rowNumber - 1, columnIndex: columnNumber - 1};
    }

    getInvalidInputMessage() {
        return 'Invalid input! please enter a number between 1 and 3';
    }

    getPositionOccupiedMessage() {
        return 'Position occupied! please enter a different position';
    }

    announceWinner() {
        TicTacToeGame.print(`Player ${this.currentPlayer} wins!`);
    }

    announceDraw() {
        TicTacToeGame.print('Draw!');
    }
    verifyInput({rowIndex, columnIndex}){
        if(!this.isInputValid(rowIndex) || !this.isInputValid(columnIndex))
            throw new Error(this.getInvalidInputMessage());

        if(this.isPositionOccupied({rowIndex, columnIndex}))
            throw new Error(this.getPositionOccupiedMessage());
        
    }
    handleTurn(){
        try{
            this.printBoard();
            const {rowIndex, columnIndex} = this.getUserNextPosition();
            this.verifyInput({rowIndex, columnIndex});
            this.placeMark({rowIndex, columnIndex})
        }catch(error){
            TicTacToeGame.print(error.message);
        }
    }

    play(){
        while(!this.isGameOver){
            this.handleTurn();
            this.setIsGameOver();
            if(!this.isGameOver)
                this.setNextPlayer();
        }
        this.printBoard();
        if(this.isDraw()){
            this.announceDraw();
            return
        }
        this.announceWinner();
    }

// play(){
    //     let isGameOver = false;
    //     while(!isGameOver){
    //         this.printBoard();
    //         const {rowIndex, columnIndex} = this.getUserNextPosition();
    //         if(!this.isInputValid(rowIndex) || !this.isInputValid(columnIndex)){
    //             console.log('Invalid input! please enter a number between 1 and 3');
    //             continue;
    //         }
    //         if(this.board[rowIndex][columnIndex] !== TicTacToeGame.emptyCell){
    //             console.log('Position is occupied!, Choose different one');
    //             continue;
    //         }
    //         this.board[rowIndex][columnIndex] = this.currentPlayer;
    //         isGameOver = this.isGameOver();
    //         if(isGameOver)
    //             continue;
    //         const currentPlayerIndex = TicTacToeGame.optionalPlayers.indexOf(this.currentPlayer);
    //         const nextPlayerIndex = (currentPlayerIndex + 1) % TicTacToeGame.optionalPlayers.length;
    //         this.currentPlayer = TicTacToeGame.optionalPlayers[nextPlayerIndex];
    //     }
    //     this.printBoard();
    //     if(this.isDraw()){
    //         console.log('Draw!');
    //         return
    //     }
    //     console.log(`Player ${this.currentPlayer} wins!`);
    // }
}

const game = new TicTacToeGame();
game.play();
