// changing background if correct option picked
const correct1 = document.getElementById('correct1');
correct1.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = 'green';
});


// displaying the first block of question
document.getElementsByClassName('container')[0].style.display = 'block';



//DEFINING THE NEXT FUNCTION
function next(id) {
    document.getElementsByClassName('container')[id-1].style.display = "none"; //make them appear one after another.
    document.getElementsByClassName('container')[id].style.display = "block";
    document.body.style.backgroundColor = '#2e4376';  
}
function correct() {
  document.getElementById("correct1").innerHTML = body.correct;
}

//COMPLETION
function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    } else {
      document.body.style.backgroundColor = 'red';
    }

    if (document.getElementById('correct2').checked) {
        score++;
    } else {
      document.body.style.backgroundColor = 'red';
    }

    if (document.getElementById('correct3').checked) {
        score++;
    } else {
      document.body.style.backgroundColor = 'red';
    } 

    if (document.getElementById('correct4').checked) {
        score++;
    } else {
      document.body.style.backgroundColor = 'red';
    }
    if (document.getElementById('correct5').checked) {
      score++;
  } else {
    document.body.style.backgroundColor = 'red';
  }

  if (document.getElementById('correct6').checked) {
      score++;
  } else {
    document.body.style.backgroundColor = 'red';
  }

  if (document.getElementById('correct7').checked) {
    score++;
} else {
  document.body.style.backgroundColor = 'red';
}

if (document.getElementById('correct8').checked) {
    score++;
} else {
  document.body.style.backgroundColor = 'red';
}
if (document.getElementById('correct9').checked) {
  score++;
} else {
  document.body.style.backgroundColor = 'red';
}

if (document.getElementById('correct10').checked) {
  score++;
} else {
  document.body.style.backgroundColor = 'red';
}
    alert('YOU SCORED: '+ score);
}
