function rand(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumFromPx(str){
	str = str + "";
	return +(str.slice(0, str.length - 2));
}