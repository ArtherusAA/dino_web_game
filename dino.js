function Dino(){
	var that = this;
	this.partOfJmp = -1;
	this.init = function(desid) {
		that.obj = document.createElement("div");
		that.obj.className = "Dstopped";
		that.obj.style.marginTop = "-70px";
		document.getElementById(desid).appendChild(that.obj);
	}
	this.toChangeImg = 0;
	this.run = function(){
		if(that.toChangeImg == 0) {
			switch(that.obj.className){
				case "Dstopped":
					that.obj.className = "Drun";
					that.toChangeImg = 2;
					break;
				case "Drun":
					that.obj.className = "Dstopped";
					that.toChangeImg = 2;
					break;
				case "DstoppedInSp":
					that.obj.className = "DrunInSp";
					that.toChangeImg = 2;
					break;
				case "DrunInSp":
					that.obj.className = "DstoppedInSp";
					that.toChangeImg = 2;
					break;
				case "DstoppedInSn":
					that.obj.className = "DrunInSn";
					that.toChangeImg = 2;
					break;
				case "DrunInSn":
					that.obj.className = "DstoppedInSn";
					that.toChangeImg = 2;
					break;
			}
			/* if(that.obj.className == "Dstopped")
				that.obj.className = "Drun";
			else
				that.obj.className = "Dstopped"; */
			
		}
		if(that.jumpOver)
			that.toChangeImg--;
	}
	this.jumpOver = true;
	this.jump = function(){
		that.obj.style.marginTop = (getNumFromPx(that.obj.style.marginTop) - 2.5*(that.speed)) + "px";
		that.speed -= 0.98;
		
		/* that.obj.style.marginTop = (getNumFromPx(that.obj.style.marginTop) + (that.partOfJmp*7)) + "px";
		if(getNumFromPx(that.obj.style.marginTop) < -150){
			that.partOfJmp = 1;
		} */
		if(getNumFromPx(that.obj.style.marginTop) >= -70){
			that.obj.style.marginTop = "-70px";
			that.partOfJmp = -1;
			that.jumpOver = true;
		}
	}
}