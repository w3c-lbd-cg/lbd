/* from http://bootswatch.com/js/bootswatch.js */

$('a[rel=tooltip]').tooltip({
	'placement': 'bottom'
});


$('.navbar a').smoothScroll();

$('.side a').smoothScroll();

$('.main a').smoothScroll();

$('.social a').smoothScroll();

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
});


/* jump to anchor position on document load */
// custom_offset was defined as a global variable in jquery.smooth-scroll.min.js

$(document).ready(function(){
    var url = document.location.toString();
	if(url.match("#") && !(url[url.length-1] === "#")) {
		var jump = "#" + url.split("#")[1];
		var jump_escaped = jump.replace(/(:|\.)/g,"\\\\$1");
		var new_position = $(jump_escaped).offset();
		window.scrollTo(new_position.left, new_position.top+custom_offset);
		return false;
	}
});

$(window).load(function() {
    // $(document).ready fires too early
   	var url = document.location.toString();
	if(url.match("#") && !(url[url.length-1] === "#")) {
		var jump = "#" + url.split("#")[1];
		var jump_escaped = jump.replace(/(:|\.)/g,"\\$1");
		var new_position = $(jump_escaped).offset();
		window.scrollTo(new_position.left, new_position.top+custom_offset);
		return false;
	} 
});