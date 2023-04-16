// changing background if correct option picked

// displaying the first block of question
document.getElementsByClassName('container')[0].style.display = 'block';



//DEFINING THE NEXT FUNCTION
function next(id) {
    document.getElementsByClassName('container')[id-1].style.display = "none"; //make them appear one after another.
    document.getElementsByClassName('container')[id].style.display = "block"; 
    document.body.style.backgroundColor = 'blue';
}

let score = 0;
function result(e) {
    let children = Array.from(e.parentElement.children);
    children.every( element => {
        if (element.id == "correct" && element.checked){
            document.body.style.backgroundColor = 'green';
            score++;
            console.log(score);
            return false;
        }else{
            document.body.style.backgroundColor = 'red';
            return true;
        }
    })
    alert('YOUR SCORE: '+ score);
}
