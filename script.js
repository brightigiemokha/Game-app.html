let alreadyClicked = false; // to prevent multiple clicks on the same question
let totalQuestions = 0; // to keep track of total questions
// changing background if correct option picked

// displaying the first block of question
document.getElementsByClassName('container')[0].style.display = 'block';



//DEFINING THE NEXT FUNCTION
function next(id) {
    if (!alreadyClicked) {
        return; //if alreadyClicked is false, then return
    }
    document.getElementsByClassName('container')[id-1].style.display = "none"; //make them appear one after another.
    document.getElementsByClassName('container')[id].style.display = "block"; 
    document.body.style.backgroundColor = 'lightblue';
    alreadyClicked = false; //resetting the value of alreadyClicked
}

let score = 0;
function result(e) {
    let children = Array.from(e.parentElement.children);
    children.every( element => {
        if (element.id == "correct" && element.checked){
            document.body.style.backgroundColor = 'lightgreen';
            score++;
            console.log(score);
            return false;
        }else{
            document.body.style.backgroundColor = '#facdd4';
            return true;
        }
    })
    alert('YOUR SCORE: '+ score);
}
