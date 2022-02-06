// Changes the text on the page to "This is really cool!" when DOM content has loaded
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('text').innerHTML = "This is really cool!";
});