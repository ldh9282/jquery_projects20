(function($){
	$.fn.colorText = function(options) {
		return this.each(function(){
			$(this).css({
				color: options.color,
				backgroundColor: options.background
			});
		}); 
	};
})(jQuery);



