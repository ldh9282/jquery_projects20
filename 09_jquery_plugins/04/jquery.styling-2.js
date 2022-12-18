(function($){
	$.fn.colorText = function(options) {
		return this.css({
			color: options.color,
			backgroundColor: options.background
		});
	};
})(jQuery);



