(function(abc){
	// alias를 바꿀 수 있음
	abc.fn.getID = function() {
		this.append("<p class='details'>The id of this element is " + abc(this).attr("id") + "</p>");
		abc(".details").slideUp(5000);
		// return this 하면 함수 chain 할 수 있음
		return this;
	};

	abc.fn.getElement = function() {
		alert("This is a/an " + abc(this).prop("tagName").toLowerCase() + " element.");			
		
		return this;
	}; 	
})(jQuery);

