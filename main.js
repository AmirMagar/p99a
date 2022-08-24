var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 Content = event.results[0][0].transcript.toLowerCase();
   console.log(Content);
   if (Content == "selfie") {
    speak();
    }

}


function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    
    

    

}

 
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

