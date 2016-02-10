function swapElegant(element) {
	'use strict';
	// This function changes the letters in "Elegant"
	
	var createdString = "";
	
	// Easier to end the function than to vary interval length
	if (Math.random() > 0.08) {
		return;
	}
	
	// Short form conditionals used for readability
	// Adds a random combination of 313 and Ele to the string
	createdString += (Math.random() > 0.5 ? "E" : "3");
	createdString += (Math.random() > 0.5 ? "l" : "1");
	createdString += (Math.random() > 0.5 ? "e" : "3");
	createdString += "gant";
	
	// Set html and data-text, so CSS based glitching works too
	$(element).html(createdString);
	$(element).attr("data-text", createdString);
}

$(".glitch").each(function () {
	setInterval(swapElegant, 50, this);
});