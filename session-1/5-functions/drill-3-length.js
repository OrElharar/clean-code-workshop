const prompt = require('prompt-sync')();

// This is a class that represents a Tic Tac Toe console game.
class TicTacToeGame{
    static optionalPlayers = ['X', 'O'];
    static emptyCell = ' ';
    constructor(){
        this.board = TicTacToeGame.getInitialBoard();
        this.currentPlayer = TicTacToeGame.optionalPlayers[0];
    }

    static getInitialBoard(){
        return [
            [TicTacToeGame.emptyCell, TicTacToeGame.emptyCell, TicTacToeGame.emptyCell],
            [TicTacToeGame.emptyCell, TicTacToeGame.emptyCell, TicTacToeGame.emptyCell],
            [TicTacToeGame.emptyCell, TicTacToeGame.emptyCell, TicTacToeGame.emptyCell]
        ];
    }

    printBoard(){
        const delimiter = '|';
        console.log(this.board[0].join(delimiter));
        console.log(this.board[1].join(delimiter));
        console.log(this.board[2].join(delimiter));
    }

    isGameOver(){
        return this.isWin() || this.isDraw();
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

    // This method checks if the game is won by a column.
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
    handleTurn(){
        this.printBoard();
        const {rowIndex, columnIndex} = this.getUserNextPosition();
        if(!this.isInputValid(rowIndex) || !this.isInputValid(columnIndex)){
            console.log('Invalid input! please enter a number between 1 and 3');
            return;
        }
        if(this.isPositionOccupied({rowIndex, columnIndex})){
            console.log('Place is occupied!, Choose different one');
            return;
        }
        this.placeMark({rowIndex, columnIndex});
    }

    // play(){
    //     let isGameOver = false;
    //     while(!isGameOver){
    //         this.handleTurn();
    //         isGameOver = this.isGameOver();
    //         if(isGameOver)
    //             continue;
    //         this.setNextPlayer();
    //     }
    //     this.printBoard();
    //     if(this.isDraw()){
    //         console.log('Draw!');
    //         return
    //     }
    //     console.log(`Player ${this.currentPlayer} wins!`);
    //
    // }

    play(){
        let isGameOver = false;
        while(!isGameOver){
            this.printBoard();
            const {rowIndex, columnIndex} = this.getUserNextPosition();
            if(!this.isInputValid(rowIndex) || !this.isInputValid(columnIndex)){
                console.log('Invalid input! please enter a number between 1 and 3');
                continue;
            }
            if(this.board[rowIndex][columnIndex] !== TicTacToeGame.emptyCell){
                console.log('Position is occupied!, Choose different one');
                continue;
            }
            this.board[rowIndex][columnIndex] = this.currentPlayer;
            isGameOver = this.isGameOver();
            if(isGameOver)
                continue;
            const currentPlayerIndex = TicTacToeGame.optionalPlayers.indexOf(this.currentPlayer);
            const nextPlayerIndex = (currentPlayerIndex + 1) % TicTacToeGame.optionalPlayers.length;
            this.currentPlayer = TicTacToeGame.optionalPlayers[nextPlayerIndex];
        }
        this.printBoard();
        if(this.isDraw()){
            console.log('Draw!');
            return
        }
        console.log(`Player ${this.currentPlayer} wins!`);
    }
}

const game = new TicTacToeGame();
game.play();
