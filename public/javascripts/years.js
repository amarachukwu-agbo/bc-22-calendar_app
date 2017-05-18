window.onload = function(){
	var len = 130;
	startYear = 1970;
	for(var count = 0; count<= len; count++){
		var year = document.getElementsByTagName('td')[count];
		year.innerText = startYear;
		startYear++;
	}
}