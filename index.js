var currentPlayer = "X";
var board = ["" ,"","","","","","","",""];
var gameOver=false ;


$(".cell").click(function(){

var index = $(this).attr("data-index");

// if cell is empty and game is not over yet

if (board[index]=== "" && !gameOver) {


    board[index] = currentPlayer;
    $(this).text(currentPlayer);
//if player wins the game

if (checkWinner()) {
    $("#status").text("player " + currentPlayer + " Wins!");
    gameOver =true ; 
}

// if board gets full
else if (boardFull()){
    $("#status").text("It's a draw!");
    gameOver = true;
}

else {
    currentPlayer = (currentPlayer=== "X") ? "O" : "X";
    $("#status").text("player " + currentPlayer + "'s turn");
}

}

}) ; 
// restart button 

$("#restart").click (function(){
board = ["" , "" , "" , "" , "" , "" , "" , "" , ""] ;
$(".cell").text("");
currentPlayer = "X"; 
gameOver = false ; 
$("#status").text("Player X's turn");
}) ;


function boardFull(){
    for(var i =0 ; i<board.length; i++) {
        if (board [i]===""){
            return false;
        }
        
    }
     return true;

}

//function to check winner
function checkWinner(){
    var winPatterns = [
 [0 , 1 , 2],
 [3 , 4 , 5],
 [6 , 7 , 8],
 [0 , 3 , 6],
 [1 , 4 , 7], 
    [2 , 5 ,8],
    [0 , 4 , 8],
    [2 , 4 , 6]


    ];


    for (var i = 0; i<winPatterns.length ; i++) {
        var a = winPatterns[i][0];
        var b = winPatterns[i][1];
        var c= winPatterns[i][2];
        if (board[a] !=="" && board[a]===board[b] && board[a]===board[c]){
            return true;
        }
    }
    return false; 
};