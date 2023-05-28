//  Refactoring Class and Method Names
//
// Instructions:
//
// You will be provided with a class containing poorly chosen names for the class and its methods.
// Refactor the code by giving meaningful and descriptive names to the class and its methods.
// The class represents a social media platform, and the methods relate to user interactions.
// Consider the purpose and responsibilities of the class and methods when choosing appropriate names.

const moves = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}

class RockPaperScissors {
    static doWeHaveWinner(player, opponent){
        if (player === opponent) {
            return false;
        }

        if (player === moves.rock && opponent === moves.scissors) {
            return true;
        }

        if (player === moves.paper && opponent === moves.rock) {
            return true;
        }

        if (player === moves.scissors && opponent === moves.paper) {
            return true;
        }

        return false;
    }
}
