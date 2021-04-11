function Gameplay() {
	var that = this;
	var sunLeftS = 0.2, sunTopS = 0.1;
	cntrs = 40;
	this.isInAir = false;
	this.setSunset = function(){
		that.env.matrix.style.backgroundColor;
	};
	
	var isOverSpeed = false, isInSky = false, isInSpace = false, isOverSpaceSpeed = false;
	
	this.sunChange = function(){
		if(getNumFromPx(that.env.sun.style.marginTop) < -250)
			sunTopS *= -1;
		that.env.sun.style.marginLeft = (getNumFromPx(that.env.sun.style.marginLeft) - (sunLeftS * (that.env.speed))) + "px";
		if(getNumFromPx(that.env.sun.style.marginTop) < -250 && cntrs > 0){
			cntrs--;
		} else 
			that.env.sun.style.marginTop = (getNumFromPx(that.env.sun.style.marginTop) - (sunTopS * (that.env.speed))) + "px";
		if(that.timeOfDay == "day"){
			if(that.nextCloud <= 0){
				that.nextCloud = rand(100, 1000);
				var newCl = that.clouds.length;
				that.clouds[newCl] = document.createElement("div");
				that.clouds[newCl].className = "cloud";
				that.clouds[newCl].style.marginLeft = "700px";
				that.env.desert.appendChild(that.clouds[newCl]);
			}
			that.nextCloud--;
			if(getNumFromPx(that.env.sun.style.marginTop) > -90){
				that.timeOfDay = "sunset";
				that.env.backgr.className = "backgr sunset";
			}
		} else if(that.timeOfDay == "sunset"){
			if(getNumFromPx(that.env.sun.style.marginTop) >= 0){
				that.timeOfDay = "night";
				that.env.backgr.className = "backgr night";
				that.env.sun.style.backgroundImage = "url(imgs/moon.png)";
				sunTopS *= -1;
				that.env.sun.style.marginLeft = "700px";
			}
		} else if(that.timeOfDay == "night"){
			if(getNumFromPx(that.env.sun.style.marginTop) > -90 && getNumFromPx(that.env.sun.style.marginLeft) < 400){
				that.timeOfDay = "sunrise";
				that.env.backgr.className = "backgr sunrise";
				that.env.sun.style.backgroundImage = "url(imgs/sun.png)";
				sunTopS *= -1;
				that.env.sun.style.marginLeft = "700px";
				that.env.sun.style.marginTop = "0px";
			}
			
		} else if(that.timeOfDay == "sunrise"){
			if(getNumFromPx(that.env.sun.style.marginTop) < -90){
				that.timeOfDay = "day";
				that.env.backgr.className = "backgr day";
			}
		}
		if(that.clouds.length > 0){
			for(var  i = 0; i < that.clouds.length; i++){
				that.clouds[i].style.marginLeft = (getNumFromPx(that.clouds[i].style.marginLeft)  - (Math.abs(sunTopS) * (that.env.speed)))+"px";
			}
			if(getNumFromPx(that.clouds[0].style.marginLeft) < -10){
				that.env.desert.removeChild(that.clouds[0]);
				that.clouds.shift();
			}
		}
	};
	
	
	
	this.isInCact = function(){
		if(that.env.cactuses.length > 0){
		if(getNumFromPx(that.env.cactuses[0].style.marginLeft) < 160){
			/* if(getNumFromPx(that.env.cactuses[0].style.marginLeft) > 137 && getNumFromPx(that.env.dino.obj.style.marginTop) > -87 )
				return true; */
			if((getNumFromPx(that.env.cactuses[0].style.marginLeft) > 116) && (getNumFromPx(that.env.dino.obj.style.marginTop) > -87) )
				return true;
			else 
			if((getNumFromPx(that.env.cactuses[0].style.marginLeft) > 94) && (getNumFromPx(that.env.dino.obj.style.marginTop) > -117 ) && (getNumFromPx(that.env.cactuses[0].style.marginLeft) < 116))
				return true;
		}
		}
		if(that.env.skobs.length > 0){
			if(that.env.skobs[0].className == "skob1"){
				if(getNumFromPx(that.env.skobs[0].style.marginLeft) < 160){
					if((-1*(getNumFromPx(that.env.dino.obj.style.marginTop) - 65)) > (getNumFromPx(that.env.skobs[0].style.marginTop)*-1)){
						if((-1 * getNumFromPx(that.env.dino.obj.style.marginTop)) < (-1*(getNumFromPx(that.env.skobs[0].style.marginTop) - 50))){
							return true;
						}
					}
				}
			}
			if(that.env.skobs[0].className == "skob2"){
				if(getNumFromPx(that.env.skobs[0].style.marginLeft) < 160){
					if((-1*(getNumFromPx(that.env.dino.obj.style.marginTop) - 65)) > (getNumFromPx(that.env.skobs[0].style.marginTop)*-1)){
						if((-1 * getNumFromPx(that.env.dino.obj.style.marginTop)) < (-1*(getNumFromPx(that.env.skobs[0].style.marginTop) - 40))){
							return true;
						}
					}
				}
			}
			if(that.env.skobs[0].className == "skob3"){
				if(getNumFromPx(that.env.skobs[0].style.marginLeft) < 160){
					if((-1*(getNumFromPx(that.env.dino.obj.style.marginTop) - 65)) > (getNumFromPx(that.env.skobs[0].style.marginTop)*-1)){
						if((-1 * getNumFromPx(that.env.dino.obj.style.marginTop)) < (-1*(getNumFromPx(that.env.skobs[0].style.marginTop) - 50))){
							return true;
						}
					}
				}
			}
		}
		if(that.env.spobs.length > 0){
			if(that.env.spobs[0].className == "spob1"){
				if(getNumFromPx(that.env.spobs[0].style.marginLeft) < 160){
					if((-1*(getNumFromPx(that.env.dino.obj.style.marginTop) - 65)) > (getNumFromPx(that.env.spobs[0].style.marginTop)*-1)){
						if((-1 * getNumFromPx(that.env.dino.obj.style.marginTop)) < (-1*(getNumFromPx(that.env.spobs[0].style.marginTop) - 60))){
							return true;
						}
					}
				}
			}
			if(that.env.spobs[0].className == "spob2"){
				if(getNumFromPx(that.env.spobs[0].style.marginLeft) < 160){
					if((-1*(getNumFromPx(that.env.dino.obj.style.marginTop) - 65)) > (getNumFromPx(that.env.spobs[0].style.marginTop)*-1)){
						if((-1 * getNumFromPx(that.env.dino.obj.style.marginTop)) < (-1*(getNumFromPx(that.env.spobs[0].style.marginTop) - 50))){
							return true;
						}
					}
				}
			}
			if(that.env.spobs[0].className == "spob3"){
				if(getNumFromPx(that.env.spobs[0].style.marginLeft) < 160){
					if((-1*(getNumFromPx(that.env.dino.obj.style.marginTop) - 65)) > (getNumFromPx(that.env.spobs[0].style.marginTop)*-1)){
						if((-1 * getNumFromPx(that.env.dino.obj.style.marginTop)) < (-1*(getNumFromPx(that.env.spobs[0].style.marginTop) - 70))){
							return true;
						}
					}
				}
			}
			if(that.env.spobs[0].className == "spob4"){
				if(getNumFromPx(that.env.spobs[0].style.marginLeft) < 160){
					if((-1*(getNumFromPx(that.env.dino.obj.style.marginTop) - 65)) > (getNumFromPx(that.env.spobs[0].style.marginTop)*-1)){
						if((-1 * getNumFromPx(that.env.dino.obj.style.marginTop)) < (-1*(getNumFromPx(that.env.spobs[0].style.marginTop) - 50))){
							return true;
						}
					}
				}
			}
		}
		return false;
	};
	
	
	this.isInPter = function() {
		if(that.env.pters.length > 0){
		if(getNumFromPx(that.env.pters[0].style.marginLeft) < 160 && getNumFromPx(that.env.pters[0].style.marginLeft) > 60){
			/* if(getNumFromPx(that.env.cactuses[0].style.marginLeft) > 137 && getNumFromPx(that.env.dino.obj.style.marginTop) > -87 )
				return true; */
			if(false){
				if(getNumFromPx(that.env.dino.obj.style.marginTop) > -155 && getNumFromPx(that.env.dino.obj.style.marginTop) < -120  )
					return true;
			} else if(getNumFromPx(that.env.pters[0].style.marginLeft) > 120){
				if(getNumFromPx(that.env.dino.obj.style.marginTop) > -155 && getNumFromPx(that.env.dino.obj.style.marginTop) < -120)
					return true;
			} else if(getNumFromPx(that.env.pters[0].style.marginLeft) > 80){
				if(getNumFromPx(that.env.dino.obj.style.marginTop) > -180 && getNumFromPx(that.env.dino.obj.style.marginTop) < -125)
					return true;
			}
		}
		}
		return false;
	};
	
	
	this.restart = function(env){
		that.env.nextSk = Infinity;
		that.env.nextSp = Infinity;
		sunTopS = 0.1;
		for(var i = 0; i < that.env.skobs.length; i++){
			that.env.desert.removeChild(that.env.skobs[i]);
		}
		for(var i = 0; i < that.env.spobs.length; i++){
			that.env.desert.removeChild(that.env.spobs[i]);
		}
		for(var i = 0; i < that.env.stones.length; i++){
			that.env.desert.removeChild(that.env.stones[i]);
		}
		for(var i = 0; i < that.env.cactuses.length; i++){
			that.env.desert.removeChild(that.env.cactuses[i]);
		}
		for(var i = 0; i < that.env.pters.length; i++){
			that.env.desert.removeChild(that.env.pters[i]);
		}
		for(var i = 0; i < that.clouds.length; i++){
			that.env.desert.removeChild(that.clouds[i]);
		}
		that.env.matrix.removeChild(that.env.cntrlPanel);
		that.env.desert.removeChild(that.env.dino.obj);
		that.env.desert.removeChild(that.env.sun);
		that.env.matrix.removeChild(that.resButton);
		that.env = new Environment;/* 
		that.env.sun = document.createElement("div");
		that.env.sun.className = "sun";
		that.env.sun.style.marginTop = "-100px";
		that.env.sun.style.marginLeft = "700px"; */
		that.init(env);
		that.env.dino.init(that.env.desert.id);/* 
		that.env.desert.appendChild(that.sun); */
		that.env.stones = [];
		that.env.cactuses = [];
		that.env.pters = []
		that.env.nextS = 0;
		that.env.nextC = 0;
		that.env.nextP = 0;
		that.env.skobs = [];
		that.env.spobs = [];
		that.env.speed = 1.1;
		that.env.position = 0;
		that.env.accn = 0.001;
		that.env.desert.style.backgroundImage = "url(imgs/desbi.png)";
		that.env.desert.style.backgroundPositionX = "0px";
		that.env.desert.style.width = "800px";
		that.env.backgrNature.style.backgroundPositionY = "300px";
		that.env.backgrNature.style.backgroundPositionX = "0px";
		that.env.dino.obj.className = "Drun";
		isOverSpeed = false;
		isInSky = false;
		isInSpace = false;
		isOverSpaceSpeed = false;
		that.isInAir = false;
		that.timer = setInterval(that.gp, 40);
	};
	
	
	this.init = function(env){
		that.env = env;
		that.env.cntrlPanel = document.createElement("div");
		that.env.cntrlPanel.className = "cntrlPanel";
		that.env.matrix.appendChild(that.env.cntrlPanel);
		that.env.backgr = document.createElement("div");
		that.env.backgr.className = "backgr day";
		that.env.matrix.appendChild(that.env.backgr);
		that.env.cntrlPanel.innerHTML = "0";
		that.env.counter = 0;
		that.env.sun = document.createElement("div");
		that.env.sun.className = "sun";
		that.env.sun.style.marginTop = "-100px";
		that.env.sun.style.marginLeft = "700px";
		that.env.desert.appendChild(that.env.sun);
		this.clouds = [];
		this.timeOfDay = "day";
		this.nextCloud = rand(2, 100);
	};
	
	
	function flyToSky(){
		that.env.backgrNature.style.backgroundPositionY = (getNumFromPx(that.env.backgrNature.style.backgroundPositionY) + 5) + "px";
		if(getNumFromPx(that.env.backgrNature.style.backgroundPositionY) >= 600){
			isInSky = true;
			clearInterval(tosktimer);
		}
	};
	
	function flyToSpace(){
		that.env.backgrNature.style.backgroundPositionY = (getNumFromPx(that.env.backgrNature.style.backgroundPositionY) + 5) + "px";
		if(getNumFromPx(that.env.backgrNature.style.backgroundPositionY) >= 1000){
			isInSpace = true;
			clearInterval(tosktimer);
		}
	};
	
	var tosktimer;
	this.gp = function() {
		if(isInSky && !isInSpace)
		if(isOverSpeed && !isInSky && !tosktimer){
			
		}
		if(-1*that.env.position%5000 > 1700){
			that.env.desert.style.backgroundImage = "url(imgs/grassbi.png)";
			if(!isOverSpaceSpeed)
				that.env.dino.obj.className = "Drun";
		}
		if(-1*that.env.position%5000 > 2950){
			that.env.desert.style.backgroundImage = "url(imgs/snowbi.png)";
			if(!isOverSpaceSpeed)
				that.env.dino.obj.className = "DrunInSn";
		}
		if(-1*that.env.position%5000 > 4800){
			that.env.desert.style.backgroundImage = "url(imgs/desbi.png)";
			if(!isOverSpaceSpeed)
				that.env.dino.obj.className = "Drun";
		}
		if(!isOverSpaceSpeed)
			that.sunChange();
		that.env.move();
		that.env.counter += 0.2*(that.env.speed);
		that.env.cntrlPanel.innerHTML = Math.floor(that.env.counter);	
		if(that.controlJump){
			that.env.dino.jump();
			if(that.env.dino.jumpOver){
				that.controlJump = false;
			}
		}
		if(10 * (that.env.speed) > 80 && !isOverSpeed){
			that.isInAir = true;
			that.env.nextS = that.env.nextC = that.env.nextP = Infinity;
			isOverSpeed = true;
			that.env.dino.obj.className = "Drun";
			console.log("OVER SPEED");
			that.env.desert.style.width = "0px";
			that.env.nextSk = rand(100, 200);
			tosktimer = setInterval(flyToSky, that.tm);
		}
		if(10 * (that.env.speed) > 200 && isOverSpeed && !isOverSpaceSpeed){
			that.env.nextS = that.env.nextC = that.env.nextP = that.env.nextSk = Infinity;
			isOverSpaceSpeed = true;
			that.env.dino.obj.className = "DrunInSp";
			console.log("OVER SPACE SPEED");
			that.env.nextSp = rand(100, 200);
			/* that.env.desert.removeChild(that.env.sun); */
			tosktimer = setInterval(flyToSpace, that.tm);
		}
		if(that.isInCact() || that.isInPter()) {
			var restart = document.createElement("a");
			restart.setAttribute("href", "javascript:gmpl.restart(env);");
			restart.setAttribute("id", "restartButton");
			restart.innerHTML = "<img src='imgs/rel.png' style='margin-top: 130px; margin-left: 390px;'>";
			that.resButton = restart;
			that.env.matrix.appendChild(that.resButton);
			clearInterval(that.timer);
		}
	};
	this.controlJump = false;
}