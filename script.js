$(function () {
	var el =  $('#slider img'),
		indexImg = 1,
		indexMax = el.length;
		
		function autoCange () {	
			indexImg++;
			if(indexImg > indexMax) {
				indexImg = 1;
			}			
			el.fadeOut(100);
			el.filter(':nth-child('+indexImg+')').fadeIn(100);
		}	
		setInterval(autoCange, 8000);	
});