var CssReload = {
	files: null,
	setup: function(){
		CssReload.files = $('link[rel="stylesheet"]');
		var time = prompt('Digite em segundos o tempo de atualização');
		time = time * 1000;
		setInterval(CssReload.refresh,time);
	},
	refresh: function(){
		var reloadQueryString = '?reload=' + new Date().getTime();
		CssReload.files.each(function () {
			this.href = this.href.replace(/\?.*|$/, reloadQueryString);
		});
	}
};

CssReload.setup();