var userChoice = prompt("Choose Rock, Paper or Scissors");
var computerChoice = Math.random();

if(computerChoice <= 0.34){
  computerChoice = "Rock";
}
else if(computerChoice>0.34 && computerChoice <= 0.67 ) {
  computerChoice = "Paper";
}

else {
  computerChoice = "Scissors";
}

choice1 = userChoice;
choice2 = computerChoice;

var compare = function(choice1, choice2){

  if(choice1 === choice2){
    return ('The result is a Tie!');
  }

  else if(choice1 === "Rock"){
    if(choice2 === "Scissors"){
      return("Rock Wins!");
    }

    else{
      return ("Paper Wins!!");
    }
  }

else if(choice1 === "Paper"){

 if(choice2 === "Rock"){
    return("Paper Wins!");

  }else{
    return ("Scissors Wins!!");
  }
}

}
compare(userChoice,computerChoice)
