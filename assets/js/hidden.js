function check_input() {
    if(input == secret) {
    var audio = new Audio('sail-awolnation.mp3');
	audio.play();
	document.body.style.background = "#000";
    // document.getElementsByClassName('hidden__button').innerHTML
    var hiddenButton = document.getElementById("hidden__button");
    hiddenButton.style.display = "flex";
    hiddenButton.style.justifyContent = "flex-end";
            }       
         }
//sets up var for event      
var secret = "38384040373937396665", 
input = "", 
timer;

// function hiddenButton() {
//     var x = document.getElementsByClassName('hidden__button');
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }


// actual onkeydown event
document.onkeydown = function(e){
    input += e.which; 
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 1000);
    check_input();
    }