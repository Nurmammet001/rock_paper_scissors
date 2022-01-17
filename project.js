const winner = (playerSelection,computerSelection) => {
    if (playerSelection === computerSelection){
        return "The game is tie!";
    }
    if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return "Sorry , computer won!";
        } else {
            return 'Congratulation , you won !';
        }
    }
    if (playerSelection === 'paper'){
        if (computerSelection === 'scissors') {
            return 'Sorry , computer won !';
        } else {
            return 'Congratulation , you won !';
        }
    }
    if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            return 'Sorry , computer won!';
        }else {
            return 'Congratulation , you won!';
        }
    }
}