//  Refactoring Class and Method Names
//
// Instructions:
//
// You will be provided with a class containing poorly chosen names for the class and its methods.
// Refactor the code by giving meaningful and descriptive names to the class and its methods.
// The class represents a social media platform, and the methods relate to user interactions.
// Consider the purpose and responsibilities of the class and methods when choosing appropriate names.

const moves = {
    Rock: 'rock',
    Paper: 'paper',
    Scissors: 'scissors'
}

class RPS{
    static winner(p1, p2){
        if (p1 === p2) {
            return false;
        }

        if (p1 === moves.Rock && p2 === moves.Scissors) {
            return true;
        }

        if (p1 === moves.Paper && p2 === moves.Rock) {
            return true;
        }

        if (p1 === moves.Scissors && p2 === moves.Paper) {
            return true;
        }

        return false;
    }
}
