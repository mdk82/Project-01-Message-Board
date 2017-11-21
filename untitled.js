
$(document).ready(function(){
console.log("ready!");

// Storing counter as 0
var counter = 0;


// Document ready ~ in click giphy-button
$(document).on('click','#giphy-button',function(){
		console.log("button clicked")

		// Pull the users' input to be used
		var gifWord = $("#giphy_word").val().trim();
		console.log(gifWord)

		//Storing our giphy API URL for a ramdon cata image
		var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+ gifWord +'&api_key=RGGd6MKHcHQW7kQvmNIEHxcD0AyG9j2Q&limit=10';

		// Ajax GET request to our queryURL
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		// After the data from the AJAX request 
		.done(function(response) {
			console.log(response);

			// Storing variables
			var results = response.data;

				// Creating a div with the class "item"
				var gifDiv = $("<div class='item'>");

				// Creating an image tag
				var feelingImage = $('<img>');

				// Setting the feelingImage a new attribute
				feelingImage.attr("src", results[0].images.fixed_height.url);

				// Shows giphy on screen
				gifDiv.html(feelingImage);

				$(".users-giphy").html(gifDiv);
		});
	});

$(document).on('click','#shuffle-button',function(){
		console.log("button clicked")

		// Pull the users' input to be used
		var gifWord = $("#giphy_word").val().trim();
		console.log(gifWord)

		//Storing our giphy API URL for a ramdon cata image
		var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+ gifWord +'&api_key=RGGd6MKHcHQW7kQvmNIEHxcD0AyG9j2Q&limit=10';

		// Ajax GET request to our queryURL
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		// After the data from the AJAX request 
		.done(function(response) {
			console.log(response);
		
			counter++;
			// Storing variables
			var results = response.data;
			console.log(results);
				
				if (counter === 10){
					counter = 0;
				} 
				// Creating a div with the class "item"
				var gifDiv = $("<div class='item'>");

				// Creating an image tag
				var feelingImage = $('<img>');

				// Setting the feelingImage a new attribute
				feelingImage.attr("src", results[counter].images.fixed_height.url);

				// Shows giphy on screen
				gifDiv.html(feelingImage);

				$(".users-giphy").html(gifDiv);
				// Prepend the entire giphy
				console.log(counter);
		});
	});

});
