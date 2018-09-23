function test() {
var gameBoard =document.getElementById("gameBoard");

var boardCfg = gameBoard.getContext("2d");

//î’ñ 
var test = [ [0,0,0,0,0,0,0,0] , [0,0,0,0,0,0,0,0] , [0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0] , [0,0,0,0,0,0,0,0] , [0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0] , [0,0,0,0,0,0,0,0] 
           ]
           
function stone(x,y,color) {
if(1 == color){
	color = "white";
}else if(2 == color){
	color = "black";
}
boardCfg.fillStyle = color;
boardCfg.beginPath();
boardCfg.arc((x-1)*30+25,(y-1)*30+25,10,0,2*Math.PI);
boardCfg.fill();

test[x][y] = color;

}  

boardCfg.fillStyle = "green";
boardCfg.fillRect(0,0,gameBoard.width,gameBoard.height);
//èâä˙ï`âÊ
boardCfg.strokeStyle = "black";
for(var i = 0; i <= 8; i++){
boardCfg.beginPath();
boardCfg.moveTo(i * 30 + 10,  10);
boardCfg.lineTo(i * 30 + 10, 250);
boardCfg.moveTo(10, i * 30 + 10);
boardCfg.lineTo(250, i * 30 + 10); 
boardCfg.stroke();
}
//boardCfg.fillStyle = "white";
//boardCfg.beginPath();
//boardCfg.arc(115,115,10,0,2*Math.PI);
//boardCfg.fill();

stone(4,4,1);
stone(4,5,2);
stone(5,4,2);
stone(5,5,1);

//boardCfg.fillStyle = "black";
//boardCfg.beginPath();
//boardCfg.arc(115,145,10,0,2*Math.PI);
//boardCfg.fill();

//boardCfg.fillStyle = "black";
//boardCfg.beginPath();
//boardCfg.arc(145,115,10,0,2*Math.PI);
//boardCfg.fill();

//boardCfg.fillStyle = "white";
//boardCfg.beginPath();
//boardCfg.arc(145,145,10,0,2*Math.PI);
//boardCfg.fill();

}

