var CssReload = (function ($) {
	files = null;

	function setup (files) {
		var time = Number(prompt('Digite em segundos o tempo de atualização'));

		if (isNaN(time)) {
			setup();
		}

		files = $('link[rel="stylesheet"]');
		time = time * 1000;
		setInterval(CssReload.refresh,time);
	}

	function refresh () {
		var reloadQueryString = '?reload=' + new Date().getTime();
		CssReload.files.each(function () {
			this.href = this.href.replace(/\?.*|$/, reloadQueryString);
		});
	}

	return setup;

})(jQuery);