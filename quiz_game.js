function send() {
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box = "<br>Answer : <input type='number' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";
}
player1name = localStorage.getItem("player1name")
player2name = localStorage.getItem("player2name")

player1score = 0
player2score = 0
document.getElementById("p1name").innerHTML = player1name + " : ";
document.getElementById("p2name").innerHTML = player2name + " : ";

document.getElementById("p1score").innerHTML = player1score;
document.getElementById("p2score").innerHTML = player2score;

document.getElementById("questionTurn").innerHTML = "questionTurn= " + player1name
document.getElementById("answerTurn").innerHTML = "answerTurn= " + player2name
answer_turn = "player2"
question_turn = "player1"
function check(){
    answer=document.getElementById("input_check_box").value;
    if (answer==(number1*number2)) {
        console.log("correctanswer");

        if (answer_turn == "player1") {
            
            update_player1_score = player1score +1;
            document.getElementById("p1score").innerHTML = update_player1_score;
        }
        else{
            update_player1_score = player2score +1;
            document.getElementById("p2score").innerHTML = update_player1_score;
        }
    }
        if (question_turn == "player1") {
            question_turn = "player2"
            document.getElementById("questionTurn").innerHTML = "Question Turn = " + player2name ;

        } else {
            question_turn = "player1"
            document.getElementById("questionTurn").innerHTML = "Question Turn - " + player1name ; 
        }

        if (answer_turn == "player1") {
            answer_turn = "player2"
            document.getElementById("answerTurn").innerHTML = "Answer Turn = " + player2name ;

        } else {
            answer_turn = "player1"
            document.getElementById("answerTurn").innerHTML = "Answer Turn - " + player1name ; 
        }
        document.getElementById("output").innerHTML=""
    }
