// Initialize Firebase //
// =================== //

console.log('working')

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
var comment = "";

var giphyChosen;
var displayName = "";

var submitDate;

// Button "LEAVE A MESSAGE" anchor to form //
// ======================================= //

$('#anchor-button').on('click', function() {
    location.href = "#first-name";
});


// Storing counter as 0
var counter = 0;
// Document ready ~ in click giphy-button
$(document).on('click','#giphy-button',function() {
    event.preventDefault();
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
                // Creating an image tag
                var feelingImage = $('<img>');
                // Setting the feelingImage a new attribute
                feelingImage.attr("src", results[0].images.fixed_height.url);
                giphyChosen = results[0].images.fixed_height.url;
                // Shows giphy on screen
                gifDiv.html(feelingImage);
                $(".users-giphy").html(gifDiv);

                console.log(giphyChosen);
        });
    });
$(document).on('click','#shuffle-button',function() {
    event.preventDefault();
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
            console.log('response' + response);
        
            counter++;
            // Storing variables
            var results = response.data;
            console.log('results' + results);
                
                if (counter === 10){
                    counter = 0;
                } 
                // Creating a div with the class "item"
                var gifDiv = $("<div class='item'>");
                // Creating an image tag
                var feelingImage = $('<img>');
                // Setting the feelingImage a new attribute
                feelingImage.attr("src", results[counter].images.fixed_height.url);
                giphyChosen = results[counter].images.fixed_height.url
                // Shows giphy on screen
                gifDiv.html(feelingImage);
                $(".users-giphy").html(gifDiv);
                // Prepend the entire giphy
              
                console.log(giphyChosen);
        });
    });


// On click "submit-message" push all form values to variables //
// =========================================================== // 

$('#submit-button').on('click', function() {

    // test
    console.log('working');

    event.preventDefault();

        firstName = $('#first-name').val().trim();
        lastName = $('#last-name').val().trim();
        email = $('#input-email').val().trim();
        phone = $('#input-telephone').val().trim();
        siteLink = $('#input-link').val().trim();
        comment = $('#input-message').val().trim();

        lastInt = lastName.charAt(0);

        displayName = firstName + " " + lastInt + ".";

    // Adding date stamp on input with moment.js //
    // ========================================= //

        var dateFormat = "MM/DD/YYYY";
        var date = moment().format(dateFormat);
        submitDate = date;
        console.log(submitDate);



    // Push variable data to firebase //
    // ============================== //

    firebase.database().ref().push( {

        first:firstName,
        last:lastName,
        lastInt:lastInt,
        displayName:displayName,
        email:email,
        phone:phone,
        siteLink:siteLink,
        comment:comment,
        giphy:giphyChosen,
        submitDate:submitDate,
        dateAdded:firebase.database.ServerValue.TIMESTAMP

    })

    // Adding click function for hide name toggle //
    // ========================================== //

    // $('.name__switch').click(function() {
    //     if ($('.myCheckbox').prop('checked', true)) {
    //         $('.display-name').html("Ghost Name");
    //     }

    //     else if ($('.myCheckbox').prop('checked', false)) {
    //         $('.display-name').html(snapshot.val().displayName);
    //     }
    // });


        // test variable values //
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phone);
        console.log(siteLink);
        console.log(comment);
        console.log(lastInt);
        console.log(giphyChosen);

    // Make all form fields go back to blank values//
    // =========================================== //

    $('#first-name').val("");
    $('#last-name').val("");
    $('#input-email').val("");
    $('#input-telephone').val("");
    $('#input-link').val("");
    $('#input-message').val("");
    $('#giphy-word').val("");
    $(".users-giphy").empty();
});


//  firebase.database().ref().orderByChild("dataAdded").on("child_added", function(snapshot) {
    
//     // variable to hold firebase url //
//  var fireGif = snapshot.val().giphy;
//     // variable to hold new img tag with user giphy selection //
//  var $gifDiv = $('<img src="' + fireGif + '" alt="Mountain View">')
//     // display to review section //
//  $('.display-name').html(snapshot.val().displayName);
//  $('.display-message').html('" ' +snapshot.val().comment + ' "');
//     $('.display-timeDate').html(snapshot.val().submitDate);
//  $('.display-gif').html($gifDiv);
//     var siteLink = snapshot.val().siteLink

// // Button to view profolio site or linkedin //
// // ======================================== //

//  $('.message__url').on('click', function() {
//  window.open(siteLink);
//     console.log('click profile' + siteLink);
//     });

//  });

    firebase.database().ref().on("child_added", function(childSnapshot) {

    $("#display-container").append(
        ('<div class="message_container">') + 
        ('<div class="message_post">') +
        ('<div class="name__row">') +
        ('<h4 class="display-name">') + childSnapshot.val().displayName + ('</h4>') +
        ('</div>') +
        ('<div class="message__row">') +
        ('<p class="display-message">') + childSnapshot.val().comment + ('</p>') +
        ('</div>') +
        ('<div class="date__row right__align">') +
        ('<span class="display-timeDate">') + childSnapshot.val().submitDate + ('</span>') +
        ('</div>') +
        ('</div>') +
        ('<div class="giphy_post">') +
        ('<div class="display-gif">') +
        ('<img id="display-gif" src="') + childSnapshot.val().giphy + ('">') +
        ('</div>') +
        ('<div class="message__portfolio center__align">') +
        ('<button class="message__url btn__small btn__blue">') + 'Portfolio' + ('</button>') +
        ('</div>') +
        ('</div') +
        ('</div>')

    );

     var siteLink = childSnapshot.val().siteLink

        // Button to view profolio site or linkedin //
        // ======================================== //

        $('.message__url').on('click', function() {
        window.open(siteLink);
        console.log('click profile' + siteLink);
        });
     
    }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
    });

$('#reset-button').on('click', function() {

    $('#first-name').val("");
    $('#last-name').val("");
    $('#input-email').val("");
    $('#input-telephone').val("");
    $('#input-link').val("");
    $('#input-message').val("");
    $('#giphy-word').val("");
    $(".users-giphy").empty();
});