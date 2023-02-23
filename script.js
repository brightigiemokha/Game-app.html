const correct1 = document.querySelector('correct1');
// displaying the first block of question
document.getElementsByClassName('container')[0].style.display = 'block';


//DEFINING THE NEXT FUNCTION
function next(id) {
    document.getElementsByClassName('container')[id-1].style.display = "none"; //make them appear one after another.
    document.getElementsByClassName('container')[id].style.display = "block";
}
//COMPLETION
function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }

    if (document.getElementById('correct2').checked) {
        score++;
    }

    if (document.getElementById('correct3').checked) {
        score++;
    }

    if (document.getElementById('correct4').checked) {
        score++;
    }
    alert('YOU SCORED: '+ score);
}

function myFunction() {
    var element = document.getElementById("correct1");
    element.classList.toggle("correct1");
  }

var element = document.getElementById("correct1");