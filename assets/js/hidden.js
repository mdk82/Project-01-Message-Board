function check_input() {
    if(input == secret) {
    alert("Que The Music!");
    var audio = new Audio('sail-awolnation.mp3');
	audio.play();
	document.body.style.backgroundColor = 'pink';
            }       
         }
//sets up var for event      
var secret = "38384040373937396665", 
input = "", 
timer;

// actual onkeydown event
document.onkeydown = function(e){
    input += e.which; 
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 1000);
    check_input();
    }