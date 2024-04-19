/* select elements  */
const startBtn= document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakbBtn = document.querySelector("#speak");

//----------------------------------------------------------------------------------------------------------------------------
//   Build speech recognition setup >>>

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// speech recog. start

recognition.onstart  = function(){

console.log("vr active");

}

//sr result

recognition.onresult= function(event){
  let current = event.resultIndex;
  let transcript= event.results[current][0].transcript;
  transcript = transcript.toLowerCase();
  console.log(`my words: ${transcript}`);
  //  readOut(transcript);



   // THIS IS RANDOM COMMAND-->
   if(transcript.includes("please active")|| transcript.includes("hello rungta") ||transcript.includes("hello Rungta")){
    readOut("now i am active");
   }

   if(transcript.includes("what's your name?")|| transcript.includes("what is your name?") ||transcript.includes("whats your name?")){
    readOut("devil sam");
  }


  if(transcript.includes("how are you")){
    readOut("i am good !! and you?");
  }

  if(transcript.includes("what is your future plan")|| transcript.includes("whats your future plan") ||transcript.includes("what's your future plan")){
    readOut("i dont know about this but My future plan has been decided in Satish Sir");
  }
  if(transcript.includes("are you married")){
    readOut("yes, my wife name is siri");
  }

  if(transcript.includes("can you speak hindi")){
    readOut("yes, but that version is coming very soon");
  }

  if(transcript.includes("can you find vijay")|| transcript.includes("can you find vijay chandra")){
    readOut("yes");
    window.open("https://www.instagram.com/__vijay__19/")

  }

  
  if(transcript.includes("can you find yuvi")|| transcript.includes("can you find yuvraj sen")|| transcript.includes("can you find yuvraj singh")){
    readOut("yes");
    window.open("https://www.instagram.com/yuvrajsen_17?igsh=ZmQ3MGRrNmo0dGZp")

  }

  
  if(transcript.includes("can you find vivek kumar")|| transcript.includes("can you find bokaro")){
    readOut("yes");
    window.open("https://www.instagram.com/1vivekkumar700?igsh=aHJ2YThlczRqdXEx")

  }

  if(transcript.includes("can you download commands")|| transcript.includes("download command")|| transcript.includes("download commands")){
    readOut("click download button for download commandsx");
   

  }




   // THIS IS SERVER BASE COMMAND-->
   if(transcript.includes("open youtube")){
    readOut("opening..");
    window.open("https://www.youtube.com/")

   }

   if(transcript.includes("open geet")||transcript.includes("open git")||transcript.includes("open github")){
    readOut("this is your github account...");
    window.open("https://github.com/Satish2004")

   }


   if(transcript.includes("open")||transcript.includes("din")){
    readOut("no");
  

   }

   if(transcript.includes("shut down")||transcript.includes("shoot down")){
    readOut("shutting down");
  

   }


   if(transcript.includes("open linkedin")||transcript.includes("open link din")||transcript.includes("open my linkdin profile")){
    readOut("opening");
    window.open("https://www.linkedin.com/in/satish-chandra-9844b5250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")

   }

   if(transcript.includes("open google")){
    readOut("opening google..");
    window.open("https://www.google.com/")

   }

   if(transcript.includes("open whatsapp")){
    readOut("opening whatsapp");
    window.open("https://web.whatsapp.com/")
   }

   if(transcript.includes("open facebook")){
    readOut("no");
   }

   if(transcript.includes("about rungta college")){
    readOut("yes! here is the result");
    window.open("https://www.rungta.ac.in/")
   }

   if(transcript.includes("open instagram")){
    readOut("sorry");
    
   }
   if(transcript.includes("open my instagram profile")|| transcript.includes("open my instagram")){
    readOut("okay then, opening");
    window.open("https://www.instagram.com/i_am_sa30_?igsh=bXAyNTR6aDN4ZzFq");
   }

 
 
   if(transcript.includes("search for")){
    readOut("here's the result in google");
    let input = transcript.split("");
    input.splice(0,11);

    input.pop;
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.google.com/search?q=${input}`);


   }

   if(transcript.includes("play")){
    readOut("here's the result in youtube");
    let input = transcript.split("");
    input.splice(0,5);

    input.pop;
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.youtube.com/results?search_query=${input}`);




   if(transcript.includes("open firebase")|| transcript.includes("open fire base")){
    readOut("ok opening firbase console...");


    /**this is for another acc */
    // let accId = transcript;
    // accId= accId.split("");
    // accId.pop();
    // accId= accId[accId.length-1];
    // console.logt(`accId:${accId}`);


    window.open("https://console.firebase.google.com/");
   }
  }
}


// speech recog. stop

recognition.onend= function(){

console.log("vr deactive");

}
// sr continuous
recognition.continuous = true;


startBtn.addEventListener("click", ()=>{
  recognition.start();

})


stopBtn.addEventListener("click", ()=>{
  recognition.stop();
  
})

/*speech */
function readOut(message){
  const speech =  new SpeechSynthesisUtterance();
  // different voice like we can change pitch default comes male voice;
  const allVoices= speechSynthesis.getVoices();
  // console.log(speechSynthesis.getVoices());
 speech.voice= allVoices[3]; // 12 is a female voice
 speech.text = message;
 speech.volume= 1;
 window.speechSynthesis.speak(speech);


}

speakbBtn.addEventListener("click",()=>{
  readOut("activate")
});
/**this is default voice recogntion  to set in female voice*/
window.onload = function(){
  readOut(" ");

}


//------------------------------------------------------------------------------------------------------------------------------