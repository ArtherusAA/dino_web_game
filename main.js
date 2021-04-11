var gmpl = new Gameplay;
var dino = new Dino;
var env = new Environment;
window.onload = function(e) {
	
	env.init(dino, "mat");
	gmpl.init(env);
	gmpl.env.dino.init(gmpl.env.desert.id);
	gmpl.env.plps = document.createElement("div");
	gmpl.env.plps.className = "ps";
	gmpl.env.matrix.appendChild(gmpl.env.plps);
	document.getElementById("mat").onmousedown = function(evn) {
		if(gmpl.env.plps.className != "pl"){
		if(!gmpl.controlJump)
			gmpl.env.dino.speed = (gmpl.isInAir?12:9);
		gmpl.controlJump = true;
		gmpl.env.dino.jumpOver = false;
		}
	}
	window.onkeydown = function(evnt) {
		if((evnt.keyCode == 38 || evnt.keyCode == 32) && gmpl.env.plps.className != "pl"){
			if(!gmpl.controlJump)
				gmpl.env.dino.speed = (gmpl.isInAir?12:9);
			gmpl.controlJump = true;
			gmpl.env.dino.jumpOver = false;
		}
		/* if(evnt.keyCode == null){
			gmpl.controlJump = true;
			gmpl.env.dino.jumpOver = false;
		} */
	};
	gmpl.env.plps.onmousedown = function(eveveventnt){
		if(!document.getElementById("restartButton")){
		if(gmpl.env.plps.className == "ps"){
			clearInterval(gmpl.timer);
			gmpl.env.dino.speed = 0;
			gmpl.controlJump = false;
			gmpl.env.dino.jumpOver = true;
		} else {
			gmpl.timer = setInterval(gmpl.gp, gmpl.tm);
			gmpl.env.dino.speed = 0;
			gmpl.controlJump = false;
			gmpl.env.dino.jumpOver = true;
		}
		gmpl.env.plps.className = (gmpl.env.plps.className == "ps" ? "pl" : "ps");
		}
	};
	gmpl.tm = 40;
	gmpl.timer = setInterval(gmpl.gp, gmpl.tm);
}