var Button1: HTMLAudioElement = new Audio('assets/A.mp3');
var Button2: HTMLAudioElement = new Audio('assets/C.mp3');
var Button3: HTMLAudioElement = new Audio('assets/F.mp3');
var Button4: HTMLAudioElement = new Audio('assets/G.mp3');
var Button5: HTMLAudioElement = new Audio('assets/hihat.mp3');
var Button6: HTMLAudioElement = new Audio('assets/kick.mp3');
var Button7: HTMLAudioElement = new Audio('assets/laugh-1.mp3');
var Button8: HTMLAudioElement = new Audio('assets/laugh-2.mp3');
var Button9: HTMLAudioElement = new Audio('assets/snare.mp3');
                                              //0    ,   1,       2
var PlayButtonBeat: HTMLAudioElement [] =  [ Button6, Button9, Button5];

function playSample( Button: any){
    Button.play();
}

document.querySelector(".button1").addEventListener("click", playSample.bind(null, Button1));
document.querySelector(".button2").addEventListener("click", playSample.bind(null, Button2));
document.querySelector(".button3").addEventListener("click", playSample.bind(null, Button3));
document.querySelector(".button4").addEventListener("click", playSample.bind(null, Button4));
document.querySelector(".button5").addEventListener("click", playSample.bind(null, Button5));
document.querySelector(".button6").addEventListener("click", playSample.bind(null, Button6));
document.querySelector(".button7").addEventListener("click", playSample.bind(null, Button7));
document.querySelector(".button8").addEventListener("click", playSample.bind(null, Button8));
document.querySelector(".button9").addEventListener("click", playSample.bind(null, Button9));



function Beat() {
    PlayButtonBeat[0].play();
    PlayButtonBeat[1].play();
    PlayButtonBeat[2].play();
    
  }


document.querySelector(".PlayButton").addEventListener("click", function() {
    setInterval(function(){
        Beat();
    }, 600);

})

