let alreadyClicked = false; // to prevent multiple clicks on the same question
let totalQuestions = 0; // to keep track of total questions
// changing background if correct option picked
​
// displaying the first block of question
document.getElementsByClassName("container")[0].style.display = "block";
​
//DEFINING THE NEXT FUNCTION
function next(id) {
  if (!alreadyClicked) {
    return; //if alreadyClicked is false, then return
  }
  document.getElementsByClassName("container")[id - 1].style.display = "none"; //make them appear one after another.
  document.getElementsByClassName("container")[id].style.display = "block";
  document.body.style.backgroundColor = "lightblue";
  alreadyClicked = false; //resetting the value of alreadyClicked
}
​
let score = 0;
function result(e) {
  let children = Array.from(e.parentElement.children);
  children.every((element) => {
    if (element.id == "correct" && element.checked) {
      document.body.style.backgroundColor = "lightgreen";
      if (!alreadyClicked) {
        //if alreadyClicked is false, then only increment the score
        score++;
        console.log(score);
        return false;
      }
    } else {
      document.body.style.backgroundColor = "red";
      return true;
    }
  });
  if (!alreadyClicked) {
    //if alreadyClicked is false, then only increment the totalQuestions
    totalQuestions++;
    document.getElementsByClassName("instruction")[0].style.display = "none"; // deletes the instruction after first answer submitted
  }
  document.getElementById("right-answers").innerHTML = score; //displaying the score
  document.getElementById("total-questions").innerHTML = totalQuestions; //displaying the total questions
  if (totalQuestions == 10) {
    document.getElementsByClassName("end-message")[0].style.display = "block";
​
    //if totalQuestions is 10, then display the result message
    if (score == 10) {
      document.getElementById("end-message").innerHTML =
        "THE END. Amazing! You are a genius!";
    } else if (score >= 7) {
      document.getElementById("end-message").innerHTML =
        "THE END. Congratulations! You are very good!";
    } else if (score >= 5) {
      document.getElementById("end-message").innerHTML =
        "THE END. Ok. That wasn't so bad, but nothing special!";
    } else if (score >= 1) {
      document.getElementById("end-message").innerHTML =
        "THE END. Shame. It's not something I would talk about in the future!";
    } else {
      document.getElementById("end-message").innerHTML =
        "THE END. Bad, bad, bad! Go to Google!";
    }
  }
  //   alert("YOUR SCORE: " + score);
  alreadyClicked = true; //setting alreadyClicked to true
}