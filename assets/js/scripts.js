// variables
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

// add image to overlay
$overlay.append($image);
// add overlay
$("body").append($overlay);
// Capture the click event on a link to an image

$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$overlay.show(500);

	// Update overlay with the image linked in the link
	$image.attr("src", imageLocation);
	// console.log(href);
});

$overlay.click(function(){
	$overlay.hide(500);
});

 
