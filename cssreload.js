var CssReload = {
	files: null,
	setup: function(timeInSecond){
		var timeInMilis;

		if(timeInSecond){
			timeInMilis = timeInSecond * 1000;	
		} else {
			timeInSecond = prompt('Digite o intervalo de atualização do CSS em segundos');
			timeInMilis = 1000 * parseInt(timeInSecond);
		}
		
		CssReload.files = document.querySelectorAll('link[rel="stylesheet"]');
		setInterval(CssReload.refresh, timeInMilis);
	},
	refresh: function(){
		var reloadQueryString = '?reload=' + Date.now();

		[].forEach.call(CssReload.files, function(thisFile){
			thisFile.href = thisFile.href.replace(/\?.*|$/, reloadQueryString);
		});
	}
});

CssReload.setup(2);

// "2" is the interval in seconds of updating the CSS,
// If none is set, the prompt will appear to you.
