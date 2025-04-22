let quizData = {
    q1: "Morado",
    q2: "Los dos",
    q3: "Cocinar",
    q4: "Frio",
    q5: "4",
    q6: "Hamburguesa"
};

function startQuiz() {
    let name = document.getElementById("name").value;
    if (name) {
        document.getElementById("quiz-container").style.display = "block";
        document.getElementById("score-table-container").style.display = "none";
    } else {
        alert("Por favor ingresa tu nombre.");
    }
}

function submitQuiz() {
    let correctAnswers = 0;  

    
    for (let question in quizData) {
        let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        
      
        if (selectedOption) {
            let userAnswer = selectedOption.value.trim().toLowerCase();  
            let correctAnswer = quizData[question].trim().toLowerCase();  
   
            if (userAnswer === correctAnswer) {
                correctAnswers++;
            }
        }
    }

   
    saveScore(correctAnswers);
}

function saveScore(correctAnswers) {
    let name = document.getElementById("name").value;
    let scoreTable = document.getElementById("score-table");

    
    let newRow = scoreTable.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = correctAnswers;  

 
    document.getElementById("score-table-container").style.display = "block";
    document.getElementById("quiz-container").style.display = "none";
}