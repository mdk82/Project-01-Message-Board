// call those top 5 posts from firebase, display top 5 posts to carousel.

// make button to submit review or post clickable
// .on click make page move to submit form

// call all reviews or post from firebase and display them to
// make sure only first letter of last name displays add period
// make sure that email address or phone number doesn't display
// display linkedin, facbook and any other site values as links
// 

// code out the giphy API
// make the one or two words call the giphy API value of those words
// display the value of the giphy pulled.
// allow for user to shuffle to the next giphy.
// make sure that only one giphy displays and if you do add button it replaces.

// make submit button clickable and push all data to firebase.


     // Initialize Firebase
var config = {
	apiKey: "AIzaSyC6FucDpOVW_DqaN3p4F-oc_Vmnc6uBVMY",
    authDomain: "message-board-project-dc938.firebaseapp.com",
    databaseURL: "https://message-board-project-dc938.firebaseio.com",
    projectId: "message-board-project-dc938",
    storageBucket: "message-board-project-dc938.appspot.com",
    messagingSenderId: "50008848295"
};
      
    firebase.initializeApp(config);

    

$( window ).on( "load", function() {
        console.log( "window loaded" );


$('#submit-message').on('click', function() {

});

$('.display-name').text('John Doe')
$('.display-location').text('location API call')
$('.display-message').text('message that user will submit')
$('.display-timeDate').text('date and time')
$('.display-gif').text('giphy action here')


var giphyWords = [];
var 


});



