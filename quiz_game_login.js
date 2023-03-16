function addUser(){
    p1=document.getElementById("p1name").value;
    p2=document.getElementById("p2name").value;

    localStorage.setItem("player1name",p1);
    localStorage.setItem("player2name",p2);
    window.location.replace("quiz_game.html")
}
