var button1: HTMLAudioElement = new Audio("assets/A.mp3");

var button2: HTMLAudioElement = new Audio("assets/C.mp3");

var button3: HTMLAudioElement = new Audio("assets/F.mp3");

var button4: HTMLAudioElement = new Audio("assets/G.mp3");

var button5: HTMLAudioElement = new Audio("assets/hihat.mp3");

var button6: HTMLAudioElement = new Audio("assets/kick.mp3");

var button7: HTMLAudioElement = new Audio("assets/laugh-1.mp3");

var button8: HTMLAudioElement = new Audio("assets/laugh-2.mp3");

var button9: HTMLAudioElement = new Audio("assets/snare.mp3");

// tslint:disable-next-line: no-any
function playSample(button: any): void {
    button.play();
    recordingTheBeat(button);
}

document.querySelector(".button1").addEventListener("click", playSample.bind(null, button1));
document.querySelector(".button2").addEventListener("click", playSample.bind(null, button2));
document.querySelector(".button3").addEventListener("click", playSample.bind(null, button3));
document.querySelector(".button4").addEventListener("click", playSample.bind(null, button4));
document.querySelector(".button5").addEventListener("click", playSample.bind(null, button5));
document.querySelector(".button6").addEventListener("click", playSample.bind(null, button6));
document.querySelector(".button7").addEventListener("click", playSample.bind(null, button7));
document.querySelector(".button8").addEventListener("click", playSample.bind(null, button8));
document.querySelector(".button9").addEventListener("click", playSample.bind(null, button9));



//Variablen für RecordButton und DeleteButton     

var recordButton: HTMLElement = document.querySelector(".RecordButton");
var deleteButton: HTMLElement = document.querySelector(".DeleteButton");

// Beat Array
var beat: HTMLAudioElement [] = [button6, button9, button5];
//Note to myself: .push() adds new items to the recordingBeat & .splice() adds/ removes items 

// boolean means on or off / true or false
var activated: boolean;


 //Funktion für das Löschen des recorded Beats/ removing items from the array recordedBeat/ recordedBeat.length ist die Anzahl 
//an aufgenommenen sounds
 
function deletingTheBeat () {
    beat.splice(0, beat.length);
    console.log(beat.length);
}

//ClickEvent für den RecordButton 
document.querySelector(".RecordButton").addEventListener("click", () => {

    if (recordButton.classList.contains("ichWurdeGeklickt")) {
        recordButton.classList.remove("ichWurdeGeklickt");
        activated = false;
    }
    else {
        recordButton.classList.add("ichWurdeGeklickt");
        activated = true;
    }
    
    recordingTheBeat;
    console.log(activated);
    console.log(beat.length);
});


 //ClickEvent für den DeleteButton 
 
document.querySelector(".DeleteButton").addEventListener("click", () => {
     deletingTheBeat();
     console.log(beat.length);
 });



//Funktion für's Recording/ Wenn die activated = true wird recorded 

function recordingTheBeat (button: HTMLAudioElement) {
    console.log(activated);
    if (activated == true) {
        beat.push(button);
        console.log(beat.length);  
    }
    
}




var playButton: HTMLElement = document.querySelector(".PlayButton");
var stopButton: HTMLElement = document.querySelector(".StopButton");
 
 // tslint:disable-next-line: no-any
var theInterval: any;
 
//ClickEvent PlayButton/ Aufgabe: Abspielen des Beat-Arrays
document.querySelector(".PlayButton").addEventListener("click",  () => {
        
        theInterval = setInterval( () => {
          
            for (var index: number = 0; index < beat.length; index++) {   
            playSample(beat[index]);
            }

         },                        600);
     
        if (playButton.classList.contains("inactive")) {
 
                playButton.classList.remove("inactive");
                stopButton.classList.add("inactive");
 
             }
             else {
 
                 stopButton.classList.remove("inactive");
                 playButton.classList.add("inactive");
         
             }
 });
 
document.querySelector(".StopButton").addEventListener("click", () => {
 
     clearInterval(theInterval);
 
     if (playButton.classList.contains("inactive")) {
 
         playButton.classList.remove("inactive");
         stopButton.classList.add("inactive");
 
      }
      else {
 
          stopButton.classList.remove("inactive");
          playButton.classList.add("inactive");
  
      }
 
 });

 