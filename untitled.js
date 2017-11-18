
// Pull the users input to be used - remember it will be using .val().trim() - Trim is important "#giphy_word"
// On click "#giphy-button"
// Set up Giphy URL to allow the searched value to be plugged in
// Combine the users search term into the url
// get at least 10 giphy items- console.log() the results
// have just 1 giphy item to display
// On click "#shuffle-button"
// Shuffle button should replace the Giphy with a new Giphy by moving to the next giphy from the array of 10

$(function(){
	console.log("Page Load")


	$(document).on('click','#giphy-button',function(){
		console.log("button clicked")


		var gifWord = $("#giphy_word").val().trim();
		console.log(gifWord)


		var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+ gifWord +'&api_key=RGGd6MKHcHQW7kQvmNIEHxcD0AyG9j2Q&limit=10';
		console.log(queryURL)


		$.ajax({
			url: queryURL,
			type: "GET"
		}).done(function(response){

			for(var i=0;i<response.data.length;i++){
				var searchDiv = $('<div class="search-item">');
				var animated = response.data[i].images.fixed_height.url;
				var still = response.data[i].images.fixed_height_still.url;
				var image = $ ('<img>');
				image.attr('src',still);
				image.attr('src',still);
				image.attr('data-animated',animated);
				image.attr('data-sate',still);
				searchDiv.append(image);
				$()
			}
		})
	})
});