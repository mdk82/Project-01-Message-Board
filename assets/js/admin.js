  /*------------FIREBASE-------------*/


var config = {
  apiKey: "AIzaSyC6FucDpOVW_DqaN3p4F-oc_Vmnc6uBVMY",
    authDomain: "message-board-project-dc938.firebaseapp.com",
    databaseURL: "https://message-board-project-dc938.firebaseio.com",
    projectId: "message-board-project-dc938",
    storageBucket: "message-board-project-dc938.appspot.com",
    messagingSenderId: "50008848295"
};
      
    firebase.initializeApp(config);

var dataRef = firebase.database();




/*--- Initial Variables ---*/




/*--- Load Trains from Firebase ---*/
dataRef.ref().on("child_added", function(childSnapshot) {

  // console log data from Firebase
  console.log(childSnapshot.val().first);
  console.log(childSnapshot.val().last);
  console.log(childSnapshot.val().email);
  console.log(childSnapshot.val().phone);
  console.log(childSnapshot.val().siteLink);
  // console.log(childSnapshot.val().trainPlatform);

  $(".trainSchedule").append(
      ("<tr>") + 
      ("<td>") + childSnapshot.val().first + ("</td>") +
      ("<td>") + childSnapshot.val().last + ("</td>") +
      ("<td>") + childSnapshot.val().email + ("</td>") +
      ("<td>") + childSnapshot.val().phone + ("</td>") +
      ("<td>") + childSnapshot.val().siteLink + ("</td>") +
      ("<td>") + ('<button>remove</button>') + ("</td>") +
      ("</tr>")
    );


    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
    });


