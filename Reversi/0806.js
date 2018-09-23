1,”Õ–Ê

boardCfg.strokeStyle = "black";
//üˆø‚«
for(var i = 0; i <= 8; i++){
boardCfg.beginPath()
boardCfg.moveTo(i * 30 + 10,  10);
boardCfg.lineTo(i * 30 + 10, 250);
boardCfg.moveTo(10, i * 30 + 10);
boardCfg.lineTo(250, i * 30 + 10); 
boardCfg.stroke();
}
