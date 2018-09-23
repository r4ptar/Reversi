function test() {
var gameBoard =document.getElementById("gameBoard");

var boardCfg = gameBoard.getContext("2d");

boardCfg.strokeStyle = "black";
boardCfg.beginPath();
boardCfg.moveTo(10,10);
boardCfg.lineTo(20,20);
boardCfg.stroke();

boardCfg.strokeStyle="red";
boardCfg.beginPath();
boardCfg.arc(20,20,10,0,2*Math.PI);
boardCfg.stroke();

boardCfg.fillStyle ="blue"
boardCfg.fillRect(40,10,20,20);
}