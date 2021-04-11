function Environment(){
	var that = this;
	this.stones = [];
	this.cactuses = [];
	this.speed = 1.1;
	this.position = 0;
	this.accn = 0.001;
	this.pters = [];
	this.skobs = [];
	this.spobs = [];
	this.nextS = 0;
	this.nextC = 0;
	this.nextP = 0;
	this.nextSk = Infinity;
	this.nextSp = Infinity;
	this.init = function(dino, matid){
		that.dino = dino;
		that.matrix = document.getElementById(matid);
		that.desert = document.createElement("div");
		that.desert.setAttribute("id", "sand");
		that.matrix.appendChild(that.desert);
		that.backgrNature = document.createElement("div");
		that.backgrNature.className = "backgr1";
		that.backgrNature.style.backgroundPositionX = "0px";
		that.backgrNature.style.backgroundPositionY = "300px";
		that.matrix.appendChild(that.backgrNature);
	};
	that.changeWing = 2;
	this.move = function(){
		that.position = getNumFromPx(that.backgrNature.style.backgroundPositionX);
		that.speed = that.speed + that.accn;
		if(that.backgrNature)
			that.backgrNature.style.backgroundPositionX = (getNumFromPx(that.backgrNature.style.backgroundPositionX) - (that.speed / 10)) + "px";
		that.dino.run();
		if(that.nextP <= 0 && that.counter > 100){
			that.nextP = rand(40, 200);
			var newP = that.pters.length;
			that.pters[newP] = document.createElement("div");
			that.pters[newP].className = "pterR";
			that.pters[newP].style.marginLeft = "790px";
			that.desert.appendChild(that.pters[newP]);
		}
		/* if(that.nextS == 0){
			that.nextS = rand(5, 50);
			var newS = that.stones.length;
			that.stones[newS] = document.createElement("div");
			that.stones[newS].className = "stone";
			that.stones[newS].style.marginLeft = "790px";
			that.desert.appendChild(that.stones[newS]);
		}; */
		if(that.nextC == 0){
			if(that.counter > 100){
				if(that.nextP <= 40)
					that.nextP = 40;
			}
			that.nextC = rand(30, 60);
			var newC = that.cactuses.length;
			that.cactuses[newC] = document.createElement("div");
			that.cactuses[newC].className = ((-1*that.position%5000 >= 2950 && -1*that.position%5000 < 4800) ? "winobjs":"cactus") + ((-1*that.position%5000 >= 2950 && -1*that.position%5000 < 4800) ? "":rand(1, 3));
			that.cactuses[newC].style.marginLeft = "790px";
			that.desert.appendChild(that.cactuses[newC]);
		};
		if(that.nextSk <= 0){
			that.nextSk = rand(30, 130);
			var newSk = that.skobs.length;
			that.skobs[newSk] = document.createElement("div");
			that.skobs[newSk].className = "skob" + rand(1,3);
			that.skobs[newSk].style.marginLeft = "790px";
			that.skobs[newSk].style.marginTop = (-1 * rand(70, 200)) + "px";
			that.desert.appendChild(that.skobs[newSk]);
		};
		if(that.nextSp <= 0){
			that.nextSp = rand(30, 130);
			var newSp = that.spobs.length;
			that.spobs[newSp] = document.createElement("div");
			that.spobs[newSp].className = "spob" + rand(1,4);
			that.spobs[newSp].style.marginLeft = "790px";
			that.spobs[newSp].style.marginTop = (-1 * rand(70, 200)) + "px";
			that.desert.appendChild(that.spobs[newSp]);
		};
		/* for(var i = 0; i < that.stones.length; i++){
			that.stones[i].style.marginLeft = (getNumFromPx(that.stones[i].style.marginLeft) - (10 * (that.speed))) + "px";
		}; */
		for(var i = 0; i < that.cactuses.length; i++){
			that.cactuses[i].style.marginLeft = (getNumFromPx(that.cactuses[i].style.marginLeft) - (10 * (that.speed))) + "px";
		};
		if(that.skobs.length > 0)
		for(var i = 0; i < that.skobs.length; i++){
			that.skobs[i].style.marginLeft = (getNumFromPx(that.skobs[i].style.marginLeft) - (3 * (that.speed))) + "px";
		};
		if(that.spobs.length > 0)
		for(var i = 0; i < that.spobs.length; i++){
			that.spobs[i].style.marginLeft = (getNumFromPx(that.spobs[i].style.marginLeft) - (0.5 * (that.speed))) + "px";
		};
		if(that.nextP > 0)
		for(var i = 0; i < that.pters.length; i++){
			that.pters[i].style.marginLeft = (getNumFromPx(that.pters[i].style.marginLeft) - (20 * (that.speed))) + "px";
			that.changeWing--;
			if(that.changeWing <= 0){
				that.pters[i].className = (that.pters[i].className == "pterR" ? "pterL" : "pterR");
				that.changeWing = 2;
			}
		};
		/* if(that.stones.length > 0)
		if(getNumFromPx(that.stones[0].style.marginLeft) < 0){
			that.desert.removeChild(that.stones[0]);
			that.stones.shift();
		}; */
		that.desert.style.backgroundPositionX = (getNumFromPx(that.desert.style.backgroundPositionX) - (10 * that.speed)) + "px";
		if(that.cactuses.length > 0)
		if(getNumFromPx(that.cactuses[0].style.marginLeft) < 0){
			that.desert.removeChild(that.cactuses[0]);
			that.cactuses.shift();
		};
		if(that.pters.length > 0)
		if(getNumFromPx(that.pters[0].style.marginLeft) < 0){
			that.desert.removeChild(that.pters[0]);
			that.pters.shift();
		};
		if(that.skobs.length > 0)
		if(getNumFromPx(that.skobs[0].style.marginLeft) < 0){
			that.desert.removeChild(that.skobs[0]);
			that.skobs.shift();
		};
		if(that.spobs.length > 0)
		if(getNumFromPx(that.spobs[0].style.marginLeft) < 0){
			that.desert.removeChild(that.spobs[0]);
			that.spobs.shift();
		};
		/* that.nextS--; */
		that.nextC--;
		that.nextP--;
		that.nextSk--;
		that.nextSp--;
	};
}