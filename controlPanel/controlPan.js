var mainCntrlPan = document.createElement("div");
mainCntrlPan.className = "mainCntrlPan";
document.body.appendChild(mainCntrlPan);
mainCntrlPan.innerHTML = "<div>Let's hack...</div>";
mainCntrlPan.innerHTML += "<span>Ускорение: </span><input id=\"acc\" type=\"text\"><br>";
mainCntrlPan.innerHTML += "<span>Скорость: </span><input id=\"speed\" type=\"text\"><br>";
mainCntrlPan.innerHTML += "<span>Отступ от начала пути: </span><input id=\"rass\" type=\"text\"><br>";
mainCntrlPan.innerHTML += "<br><br><span id=\"hacked\">HACK</span>";
document.getElementById("hacked").onmousedown = function(evnt){
	document.getElementById("hacked").style.opacity = "0.2";
	if(document.getElementById("acc").value)
		gmpl.env.accn = +(document.getElementById("acc").value);
	if(document.getElementById("speed").value)
		gmpl.env.speed = +(document.getElementById("speed").value);
	if(document.getElementById("rass").value){
		gmpl.env.backgrNature.style.backgroundPositionX = -1 * document.getElementById("rass").value + "px";
	}
}
document.getElementById("hacked").onmouseup = function(evnt){
	document.getElementById("hacked").style.opacity = "1";
	document.getElementById("rass").value = document.getElementById("speed").value = document.getElementById("acc").value = "";
}

