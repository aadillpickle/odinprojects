function playSoundClick (e) 
  { 
    keyNumber = e.target.getAttribute("data-key")
    console.log(keyNumber);
    var parentKeyNumber = e.target.parentElement.getAttribute("data-key");
    if(isNaN(keyNumber) || keyNumber === null ) keyNumber = parentKeyNumber;
    soundEff = null;

    if (keyNumber == 65){
      soundEff = document.getElementById('sound1')
    }
    else if (keyNumber == 83){
      soundEff = document.getElementById('sound2')
    }
    else if (keyNumber == 68){
      soundEff = document.getElementById('sound3')
    }
    else if (keyNumber == 70){
      soundEff = document.getElementById('sound4')
    }
    else if (keyNumber == 71){
      soundEff = document.getElementById('sound5')
    }
    else if (keyNumber == 72){
      soundEff = document.getElementById('sound6')
    }
    else if (keyNumber == 74){
      soundEff = document.getElementById('sound7')
    }
    else if (keyNumber == 75){
      soundEff = document.getElementById('sound8')
    }
    else if (keyNumber == 76){
      soundEff = document.getElementById('sound9')
    }
    else {
      return;
    } 
    soundEff.currentTime = 0;
    soundEff.play();
  }

  var buttonNames = []
  numButtons = 9
  for (let i = 1; i <= numButtons; i++) {
    buttonNames.push("button" + i)
  }
  for (let i = 0; i < buttonNames.length; i++){
    document.getElementById(buttonNames[i]).onclick = playSoundClick;
  }

  function playSoundButton (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing') //e is the key 
  }

  const keys = document.querySelectorAll(".key")
  keys.forEach(key => key.addEventListener("transitionend", removeTransition))

  window.addEventListener('keydown', playSoundButton);