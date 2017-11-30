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




/*--- Load Trains from Firebase ---*/
dataRef.ref().on("child_added", function(childSnapshot) {

  // console log data from Firebase
  console.log(childSnapshot.val().first);
  console.log(childSnapshot.val().last);
  console.log(childSnapshot.val().email);
  console.log(childSnapshot.val().phone);
  console.log(childSnapshot.val().siteLink);
  console.log(childSnapshot.val().key);

  $(".admin-display").append(
      ("<tr>") + 
      ("<td>") + childSnapshot.val().first + ("</td>") +
      ("<td>") + childSnapshot.val().last + ("</td>") +
      ("<td>") + childSnapshot.val().email + ("</td>") +
      ("<td>") + childSnapshot.val().phone + ("</td>") +
      ("<td>") + ("<a href='") + childSnapshot.val().siteLink + ("'>PORTFOLIO</a>") +("</td>") +
      ("<td>") + ('<button class="waves-effect waves-light btn remove">remove</button>') + ("</td>") +
      ("</tr>")
    );


    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
    });


dataRef.ref().on('child_added', function(snapshot) {

    $('.remove').on('click', function() {
    console.log('working');
    snapshot.ref.remove();
    location.reload();

});

});





















//   /*------------FIREBASE-------------*/


// var config = {
//   apiKey: "AIzaSyC6FucDpOVW_DqaN3p4F-oc_Vmnc6uBVMY",
//     authDomain: "message-board-project-dc938.firebaseapp.com",
//     databaseURL: "https://message-board-project-dc938.firebaseio.com",
//     projectId: "message-board-project-dc938",
//     storageBucket: "message-board-project-dc938.appspot.com",
//     messagingSenderId: "50008848295"
// };
      
//     firebase.initializeApp(config);

// var dataRef = firebase.database();

// // var dbRef = firebase.database().ref();
// // dbRef.on('value', snapshot => {
// //   console.log(snapshot.val());
// // });



// /*--- Load Trains from Firebase ---*/
// dataRef.ref().on("child_added", function(childSnapshot) {


//   // console log data from Firebase
//   console.log(childSnapshot.val());
//   console.log(childSnapshot.val().displayName);
//   console.log(childSnapshot.val().first);
//   console.log(childSnapshot.val().last);
//   console.log(childSnapshot.val().email);
//   console.log(childSnapshot.val().phone);
//   console.log(childSnapshot.val().siteLink);
//   console.log(childSnapshot.getKey);

//   var value = childSnapshot.val();

//   $(".admin-display").append(
//       ("<tr>") + 
//       ("<td>") + childSnapshot.val().first + ("</td>") +
//       ("<td>") + childSnapshot.val().last + ("</td>") +
//       ("<td>") + childSnapshot.val().email + ("</td>") +
//       ("<td>") + childSnapshot.val().phone + ("</td>") +
//       ("<td>") + childSnapshot.val().siteLink + ("</td>") +
//       ("<td>") + ('<div class="btn remove" id="') + childSnapshot.val().phone + ('">remove</div>') +("</td>") +
//       ("</tr>")
//     );



//   document.getElementById(childSnapshot.val().phone).onclick = function fun()
//     {
//      // alert("hello");
//      ref.remove();
//      //validation code to see State field is mandatory.  
//     }  

//     // Handle the errors
//   }, function(errorObject) {
//     console.log("Errors handled: " + errorObject.code);
//     });







// // dataRef.ref().on('child_added', function() {

// //     $('.remove').on('click', function() {
// //     console.log(this.id);
// //     // snapshot.ref.remove();

// // });

// // });




