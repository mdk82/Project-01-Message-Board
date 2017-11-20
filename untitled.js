
$(document).ready(function(){
console.log("ready!");


// Document ready ~ in click giphy-button
$(document).on('click','#giphy-button',function(){
		console.log("button clicked")

		// Pull the users' input to be used
		var gifWord = $("#giphy_word").val().trim();
		console.log(gifWord)

		//Storing our giphy API URL for a ramdon cata image
		var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+ gifWord +'&api_key=RGGd6MKHcHQW7kQvmNIEHxcD0AyG9j2Q&limit=1';

		// Ajax GET request to our queryURL
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		// After the data from the AJAX request 
		.done(function(response) {
			
			$("#giphy_word").empty();

			// Storing variables
			var results = response.data;

			// Looping over every result item
			for (var i = 0; i < results.length; i++) {
			
				// Creating a div with the class "item"
				var gifDiv = $("<div class='item'>");

				// Creating an image tag

				var feelingImage = $('<img>');

				// Setting the feelingImage a new attribute
				feelingImage.attr("src", results[i].images.fixed_height.url);
				feelingImage.attr("alt", "your opinion is pointless");

				// Appending 
				gifDiv.append(feelingImage);

				// Prepending the gifDiv
				$(".users-giphy").prepend(gifDiv);
				// Prepend the entire giphy
			}	
		});
	});
});
