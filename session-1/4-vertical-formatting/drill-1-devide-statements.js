class GamePiece {
  constructor(color) {
    this.color = color;
  }
}

class CheckersGame {
  constructor() {
      this.board = CheckersGame.getInitialBoard();
      this.isWhiteTurn = true;
  }

  static getInitialBoard() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      board.push([]);
      for (let j = 0; j < 8; j++) {
        if (i < 3) {
          board[i].push(new GamePiece('white'));
        } else if (i > 4) {
          board[i].push(new GamePiece('black'));
        } else {
          board[i].push(null);
        }
      }
    }
    return board;
  }

  static isPositionValid({rowIndex, columnIndex}) {
      return rowIndex >= 0 && rowIndex < 8 && columnIndex >= 0 && columnIndex < 8;
  }
  static isIndexProvided(index) {
      return index != null;
  }

  static isIndexInteger(index) {
      return Number.isInteger(index);
  }

  isPositionOccupied({rowIndex, columnIndex}) {
     return this.board[rowIndex][columnIndex] !== null;
  }
  isInputValid({rowIndex, columnIndex}) {
      if(!CheckersGame.isIndexProvided(rowIndex) || !CheckersGame.isIndexProvided(columnIndex))
            return false;
      if(!CheckersGame.isIndexInteger(rowIndex) || !CheckersGame.isIndexInteger(columnIndex))
            return false;
      if(!CheckersGame.isPositionValid({rowIndex, columnIndex}))
            return false;
      return this.isPositionOccupied({rowIndex, columnIndex});
  }

    isInputValidComplexFunction({rowIndex, columnIndex}) {
        if(rowIndex == null || columnIndex == null) return false;
        if(typeof rowIndex !== 'number' || typeof columnIndex !== 'number')  return false;
        if(!Number.isInteger(rowIndex) || !Number.isInteger(columnIndex))  return false;
        if(rowIndex < 0 || rowIndex >= 8 || columnIndex < 0 || columnIndex >= 8)  return false;
        return this.board[rowIndex][columnIndex] !== null;
    }

}
