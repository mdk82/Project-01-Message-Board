// Initialize Firebase //
// =================== //
var config = {
    apiKey: "AIzaSyC6FucDpOVW_DqaN3p4F-oc_Vmnc6uBVMY",
    authDomain: "message-board-project-dc938.firebaseapp.com",
    databaseURL: "https://message-board-project-dc938.firebaseio.com",
    projectId: "message-board-project-dc938",
    storageBucket: "message-board-project-dc938.appspot.com",
    messagingSenderId: "50008848295"
};
      
    firebase.initializeApp(config);
// Gloabal Variables //
// ================= //
var firstName = "";
var lastName = "";
var lastInt = "";
var email = "";
var phone = "";
var linkedin = "";
var portfolio = "";
var comment = "";
var giphyDisplay = "";
// Storing counter as 0
var counter = 0;
// Document ready ~ in click giphy-button
$(document).on('click','#giphy-button',function() {
        console.log("button clicked")
        // Pull the users' input to be used
        var gifWord = $("#giphy-word").val().trim();
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
                 //Get Source
                var gifSource = response.data[0].images.fixed_height_still.url;
                var gifStatic = response.data[0].images.fixed_height_still.url;
                var gifAnimate = response.data[0].images.fixed_height.url;
                console.log(gifAnimate);
                // Creating an image tag
                var feelingImage = $('<img>');

                feelingImage.attr("src", gifSource);
                feelingImage.attr("data-animate", gifAnimate);
                feelingImage.attr("data-still", gifStatic);
                feelingImage.attr("data-state", "still");
            
                // Shows giphy on screen
                gifDiv.html(feelingImage);
                $(".users-giphy").html(gifDiv);
        });
    });
$(document).on('click','#shuffle-button',function() {
        console.log("button clicked")
        // Pull the users' input to be used
        var gifWord = $("#giphy-word").val().trim();
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

                //Get Source
                // var gifSource = response.data[0].images.fixed_height_still.url;
                var gifStatic = response.data[0].images.fixed_height_still.url;
                var gifAnimate = response.data[0].images.fixed_height.url;
                console.log(gifAnimate);
                // Creating an image tag
                var feelingImage = $('<img>');
                

                // Setting the feelingImage a new attribute
                feelingImage.attr("src", results[counter].images.fixed_height_still.url);
                feelingImage.attr("data-animate", gifAnimate);
                feelingImage.attr("data-still", gifStatic);
                feelingImage.attr("data-state", "still");
                
                // Shows giphy on screen
                gifDiv.html(feelingImage);
                $(".users-giphy").html(gifDiv);
                // Prepend the entire giphy
                console.log(counter);
        });
    });

$(".users-giphy").on('click','img', function(){
    console.log(this);
        var state = $(this).attr("data-state"); 
        console.log(state);
        if (state === "still") {
        // $(this).attr("src",$(this).attr("data-animate"));  <---- that part might cause the trouble
        $(this).attr("data-state", "animate");
        } else {
        // $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
// On click "submit-message" push all form values to variables //
// ================================================== // 
$('#submit-message').on('click', function() {
    // test
    console.log('working');
    event.preventDefault();
        firstName = $('#first-name').val().trim();
        lastName = $('#last-name').val().trim();
        email = $('#input-email').val().trim();
        phone = $('#input-telephone').val().trim();
        linkedin = $('#input-linkedin').val().trim();
        portfolio = $('#input-portfolio').val().trim();
        comment = $('#input-message').val().trim();
        lastInt = lastName.charAt(0);
    // Push variable data to firebase //
    // ============================== //
    firebase.database().ref().push( {
        first:firstName,
        last:lastName,
        lastInt:lastInt,
        email:email,
        phone:phone,
        linkedin:linkedin,
        portfolio:portfolio,
        comment:comment,
        dateAdded:firebase.database.ServerValue.TIMESTAMP
    })
        // test variables values //
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phone);
        console.log(linkedin);
        console.log(portfolio);
        console.log(comment);
        console.log(lastInt);
    // Make all form fields go back to blank values//
    // ===================================== //
    $('#first-name').val("");
    $('#last-name').val("");
    $('#input-email').val("");
    $('#input-telephone').val("");
    $('#input-linkedin').val("");
    $('#input-portfolio').val("");
    $('#input-message').val("");
});
    firebase.database().ref().on("child_added", function(snapshot){
        // if ( hide your name ) {
        //  put Ghost name in for val of first and last name.
        // } else {
        //  do other display of val
        // }
        $('.display-gif').append("<div>" + snapshot.val().first + "</div>");
        $('.display-gif').append("<div>" + snapshot.val().lastInt + "</div>");
        $('.display-gif').append("<div>" + snapshot.val().email + "</div>");
        $('.display-gif').append("<div>" + snapshot.val().phone + "</div>");
        $('.display-gif').append("<div>" + snapshot.val().linkedin + "</div>");
        $('.display-gif').append("<div>" + snapshot.val().portfolio + "</div>");
        $('.display-gif').append("<div>" + snapshot.val().comment + "</div>");
        $('.display-gif').append("<div" + snapshot.val().dateAdded + "</div>");
        $('.display-gif').append("<hr>");
    });