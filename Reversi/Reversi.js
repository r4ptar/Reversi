var gb = document.getElementById("gameBoard");
var ctx = gb.getContext("2d");
var board= [[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,2,1,0,0,0],
			[0,0,0,1,2,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],];

var player = 1;
drawBoard();

//ゲーム盤
function drawBoard() {
	ctx.fillStyle="green";
	ctx.fillRect(0,0,gb.width,gb.height);
	ctx.strokeStyle="black";
	for (var i = 0; i <= 8; i++){
		ctx.beginPath();
		ctx.moveTo(i*30+10,10);
		ctx.lineTo(i*30+10,250);
		ctx.moveTo(10,i*30+10);
		ctx.lineTo(250,i*30+10);
		ctx.stroke();
	}
	for(var y = 0; y <= 7; y++){
		for(var x = 0; x <=7; x++) {
			stone(x,y,board[y][x]);
		}
	}
}

//石の描画
function stone(x,y,c){
	if(c == 1) {
		ctx.fillStyle = "black";
	}else if(c == 2){
		ctx.fillStyle = "white";
	}else{
		return;
	}
	ctx.beginPath();
	ctx.arc(x*30+25,y*30+25,14,0,2*Math.PI);
	ctx.fill();
}

//マウスのクリック位置の取得
gb.onmousedown = function(e) {
	var r = gb.getBoundingClientRect();
	var x = Math.floor((e.clientX - r.left -10)/30);
	var y = Math.floor((e.clientY - r.top - 10)/30);
	//石を置いたか判断、プレイヤー交代
	if(putStone(x,y) > 0) {
		change();
		drawBoard();
	}
}

//石を置く
function putStone(x,y){
	var stone = 0;
	//色確認(縦・横・斜め）
	stone += putCheck(x,y,1,0);
	stone += putCheck(x,y,1,1);
	stone += putCheck(x,y,1,-1);
	stone += putCheck(x,y,-1,1);
	stone += putCheck(x,y,-1,-1);
	stone += putCheck(x,y,-1,0);
	stone += putCheck(x,y,0,1);
	stone += putCheck(x,y,0,-1);
	if(stone > 0) {
		board[y][x] = player;
		stone++
	}
	return stone;
}

//ひっくり返すはんだん処理
function putCheck(x,y,ox,oy){
	if(lengthCheck(x,y,0)){
		var aite = 3 - player;
		var stone = 0;
		var lenx = x + ox;
		var leny = y + oy;
		//石の個数チェック
		while(lengthCheck(lenx,leny,aite)){
			stone++;
			lenx += ox;
			leny += oy;
		}
		//石の個数分の配列チェック
		if(stone > 0 && lengthCheck(lenx,leny,player)){
			var nex = x + ox;
			var ney = y + oy;
			//相手のオセロの変更
			while (lengthCheck(nex,ney,aite)){
				board[ney][nex] = player;
				nex+=ox;
				ney+=oy;
			}
			return stone;
		}
	}
	return 0;
}

//範囲チェック
function lengthCheck(x,y,n){
	return 0 <= x && x <= 7 && 0 <= y && y <= 7 && board[y][x] == n
}

//プレイヤーチェンジ(1.黒,2.白);
function change() {
	player= 3 - player;
}



//gameBoard.onmousedown = function(e){
	//var test = gameBoard.getBoundingClientRect();
	//var x	=	Math.floor((e.clientX - test.left - 10) / 30);
	//var y	=	Math.floor((e.clientY - test.top	- 10) / 30);
	//var color = (gameCount % 2) +1;
	//stoneTest(x,y);
	//boardDai();
//}	
//function stoneTest(x,y){
	//石を置く場所のチェック
	//if(stoneCheck(x,y,0)){
		//if(stoneCheck(x+1,y,2) && stoneCheck(x+2,y,1)){
			//board[y][x] = 1;
			//board[y][x+1] = 1;
		//}
		//if(stoneCheck(x,y+1,2) && stoneCheck(x,y+1,1)){
			/board[y][x] = 1;
			//board[y+1][x] = 1;
		//}
		//if(stoneCheck(x-1,y,2) && stoneCheck(x-1,y,1)){
			//board[y][x-1] = 1;
			//board[y][x]   = 1;
		//}
		//if(stoneCheck(x,y-1,2) && stoneCheck(x,y-1,1)){
			//board[y-1][x] = 1;
			//board[y][x]   = 1;
		//}
	//}
//}
