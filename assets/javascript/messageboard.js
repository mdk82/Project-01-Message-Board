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
// $( window ).on( "load", function() {
//         console.log( "window loaded" );

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
		// 	put Ghost name in for val of first and last name.
		// } else {
		// 	do other display of val
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


	// Placeholder data for test //
	// firebase.database().ref().orderByChild("dataAdded").on("child_added", function(snapshot) {

	// $('.display-name').html(snapshot.val().first);
	// $('.display-location').html(snapshot.val().last);
	// $('.display-message').html(snapshot.val().email);
	// $('.display-timeDate').html(snapshot.val().phone);
	// $('.display-gif').html(snapshot.val().linkedin);
	// $('.display-gif').html(snapshot.val().portfolio);
	// $('.display-gif').html(snapshot.val().comment);
	// $('.display-gif').html(snapshot.val().dateAdded);

	// });




