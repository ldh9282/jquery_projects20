$.fn.getID = function() {
	return this.attr("id");
};

$.fn.getElement = function() {
	alert("You clicked on " + this.prop("tagName").toLowerCase() + " element.");
}; 