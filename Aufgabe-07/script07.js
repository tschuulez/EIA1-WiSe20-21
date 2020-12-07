var Button1 = new Audio('assets/A.mp3');
var Button2 = new Audio('assets/C.mp3');
var Button3 = new Audio('assets/F.mp3');
var Button4 = new Audio('assets/G.mp3');
var Button5 = new Audio('assets/hihat.mp3');
var Button6 = new Audio('assets/kick.mp3');
var Button7 = new Audio('assets/laugh-1.mp3');
var Button8 = new Audio('assets/laugh-2.mp3');
var Button9 = new Audio('assets/snare.mp3');
function playSample1(Button) {
    Button.play();
}
document.querySelector(".button1").addEventListener("click", playSample1.bind(null, Button1));
document.querySelector(".button2").addEventListener("click", playSample1.bind(null, Button2));
document.querySelector(".button3").addEventListener("click", playSample1.bind(null, Button3));
document.querySelector(".button4").addEventListener("click", playSample1.bind(null, Button4));
document.querySelector(".button5").addEventListener("click", playSample1.bind(null, Button5));
document.querySelector(".button6").addEventListener("click", playSample1.bind(null, Button6));
document.querySelector(".button7").addEventListener("click", playSample1.bind(null, Button7));
document.querySelector(".button8").addEventListener("click", playSample1.bind(null, Button8));
document.querySelector(".button9").addEventListener("click", playSample1.bind(null, Button9));
//0    ,   1,       2
var PlayButtonBeat = [Button6, Button9, Button5];
var index = 0;
document.querySelector(".PlayButton").addEventListener("click", function () {
    setInterval(function () {
        PlayButtonBeat[index].play();
        index = index + 1;
    }, 600);
});
//# sourceMappingURL=script07.js.map