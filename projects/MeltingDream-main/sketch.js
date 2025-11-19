let monsterRoom = 'B';
let moveAttempt = 300;
let monsterActive = true;
let monsterAngry = false;
let isDoorDownA = false;
let isDoorDownB = false;
let isVentDown = false;
let currentHour = 12;
let currentSecond = 0;
let currentFrameDelay = 60;
let isScreenFocused = false;
let currentCamera = 0;
let isDying = false;
let dyingTimer = 60;
let isDead = false;
let movementRng10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let coverRng4 = [1, 2, 3, 4];
let mirrorRng3 = [1, 2, 3];
let mirrorInit = false;
let batteryAmount = 43600;
let trueTimer = 21600;
//let trueTimer = 7200;//
let startingBattery = 0;
let batteryFlicker = 30;
let batteryFlickerState = false;
let electricalFaultOngoing = false;
let electricalFaultChance = false;
let electricalColors = ['Red', 'Blue', 'Green', 'Yellow'];
let eFlag1 = false;
let eFlag2 = false;
let eFlag3 = false;
let electricalFaultProgress = 0;
let currentColor = 'Blue';
let dedInit = false;
let dedTimer = 300;
let gameState = 0;
let specialTimer = 300;
let electricalDelay = 120;
let electricalScrew = false;
let ambientSounds = [];
let ambientSoundDelay = 1800

window.addEventListener("keydown", function(e) {
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
}, false);

function preload() {
  titleNormalImg = loadImage('assets/titleNormal.png');
  titleSpookyImg = loadImage('assets/titleSpooky.png');
  deathScreenImg = loadImage('assets/deathScreen.png');
  endScreenImg = loadImage('assets/endScreen.png');
  tempBackgroundImg = loadImage('assets/NewIngameOffice.png');
  leftDoorImg = loadImage('assets/leftdoor.png');
  rightDoorImg = loadImage('assets/rightdoor.png');
  ventDoorImg = loadImage('assets/ventdoor.png');
  cam1Img = loadImage('assets/Cam1.png');
  cam2Img = loadImage('assets/Cam2.png');
  cam3Img = loadImage('assets/Cam3.png');
  cam4Img = loadImage('assets/Cam4.png');
  cam5Img = loadImage('assets/Cam5.png');
  cam6Img = loadImage('assets/Cam6.png');
  cam7Img = loadImage('assets/Cam7.png');
  monCam1Img = loadImage('assets/GSC1B.png');
  monCam1AImg = loadImage('assets/GSAnrgyC1.png');
  monCam2Img = loadImage('assets/GSC4A.png');
  monCam2AImg = loadImage('assets/GSAngryC4.png');
  monCam3Img = loadImage('assets/GSC5C.png');
  monCam3AImg = loadImage('assets/GSAngryC5.png');
  monCam4Img = loadImage('assets/GSC2A.png');
  monCam4AImg = loadImage('assets/GSAngryC2.png');
  monCam6Img = loadImage('assets/GSC2B.png');
  monCam6AImg = loadImage('assets/GSAngryC3.png');
  monVentOfficeImg = loadImage('assets/monV2.png');
  monVentOfficeAImg = loadImage('assets/monV2Angry.png');
  monLeftDoorImg = loadImage('assets/GSOL.png');
  monLeftDoorAImg = loadImage('assets/GSAngryLeftDoor.png');
  monRightDoorImg = loadImage('assets/GSOR.png');
  monRightDoorAImg = loadImage('assets/GSAngryRightDoor.png');
  monCam7Img = loadImage('assets/GSC6V.png');
  monCam7AImg = loadImage('assets/GSAngryC6.png');
  monELeftAImg = loadImage('assets/GSAngryMR.png');
  monELeftImg = loadImage('assets/GSOML.png');
  monERightAImg = loadImage('assets/GSAngryML.png');
  monERightImg = loadImage('assets/GSOMR.png');
  monEUpAImg = loadImage('assets/GSAngryMU.png');
  monEUpImg = loadImage('assets/GSOMU.png');
  monKillF1Img = loadImage('assets/monKillF1.png');
  monKillF2Img = loadImage('assets/monKillF2.png');
  monKillF3Img = loadImage('assets/monKillF3.png');
  monKillF4Img = loadImage('assets/monKillF4.png');
  monKillF5Img = loadImage('assets/monKillF5.png');
  monKillF6Img = loadImage('assets/monKillF6.png');
  monKillF1AImg = loadImage('assets/monKillF1A.png');
  monKillF2AImg = loadImage('assets/monKillF2A.png');
  monKillF3AImg = loadImage('assets/monKillF3A.png');
  monKillF4AImg = loadImage('assets/monKillF4A.png');
  monKillF5AImg = loadImage('assets/monKillF5A.png');
  monKillF6AImg = loadImage('assets/monKillF6A.png');
  darkOfficeImg = loadImage('assets/TheDarkNewIngameOffice.png');
  spookyCoverImg = loadImage('assets/spookyCover.png');
  //sound stuff//
 titlescreenMusic = loadSound('assets/sound/titlescreenMusic.mp3');
 officeAmbi = loadSound('assets/sound/officeAmbience.mp3');
 doorSound = loadSound('assets/sound/doorSound.mp3');
 mirrorLaugh = loadSound('assets/sound/mirrorLaugh.mp3');
 monsterAngrySound = loadSound('assets/sound/monsterAngrySound.mp3');
 monsterKill = loadSound('assets/sound/monsterKill.mp3');
 doorBanging = loadSound('assets/sound/doorBanging.mp3');
 cameraSound = loadSound('assets/sound/cameraSound.mp3');
 powerOnSound = loadSound('assets/sound/powerOnSound.mp3');
 powerOffSound = loadSound('assets/sound/powerOffSound.mp3');
 endScreenJingle  = loadSound('assets/sound/endScreenJingle.mp3');
 electricMistake = loadSound('assets/sound/electricalMistake.mp3');
 spookyHere = loadSound('assets/sound/spookyHere.mp3');
 ambientSounds.push(ambient1 = loadSound('assets/sound/ambientSound1.mp3'));
 ambientSounds.push(ambient2 = loadSound('assets/sound/ambientSound2.mp3'));
 ambientSounds.push(ambient3 = loadSound('assets/sound/ambientSound3.mp3'));
}

function setup() {
  var canvas = createCanvas(1280, 720);
  canvas.parent("game");
  frameRate(60);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(32);
  stroke(0);
  strokeWeight(8);
  startingBattery = batteryAmount;
  //soundstuff//
  titlescreenMusic.setVolume(0.5);
  officeAmbi.setVolume(0.7);
  doorSound.setVolume(0.2);
  mirrorLaugh.setVolume(0.8);
  cameraSound.setVolume(0.1);
  monsterAngrySound.setVolume(0.1);
  ambientSounds[0].setVolume(0.6);
  ambientSounds[1].setVolume(0.6);
  ambientSounds[2].setVolume(0.6);
  endScreenJingle.setVolume(0.5);
}

function draw() {

  if (electricalScrew === true) {
    electricalDelay = electricalDelay - 1;
    if (electricalDelay <= 0) {
      electricalDelay = 120;
      electricalScrew = false;
    }
  }

  if (gameState === 0) {
    if (officeAmbi.isPlaying() === true) {
      officeAmbi.stop();
    }
    if (titlescreenMusic.isPlaying() === false) {
      titlescreenMusic.play();
    }
    specialTimer = specialTimer - 1;
    if (specialTimer >= 30) {
      image(titleNormalImg, (width/2), (height/2));
    } else {
      image(titleSpookyImg, (width/2), (height/2));
    }

    if (specialTimer <= 0) {
      specialTimer = random(300, 1200);
    }
  } else {

    if (titlescreenMusic.isPlaying() === true) {
      titlescreenMusic.stop();
    }
    if (officeAmbi.isPlaying() === false && electricalFaultOngoing === false) {
      officeAmbi.play();
    }

  ambientSoundDelay = ambientSoundDelay - 1;

  if (ambientSoundDelay <= 0) {
    ambientSoundDelay = random(1800, 7200)
    shuffle(ambientSounds, true);
    ambientSounds[0].play();
  }

  background(220);
  image(tempBackgroundImg, (width/2), (height/2));
  if (electricalFaultOngoing === true || batteryAmount <= 0) {
    image(darkOfficeImg, (width/2), (height/2));
    if (officeAmbi.isPlaying() === true) {
      officeAmbi.stop();
    }
  }

if (monsterActive === true) {
//MONSTER STUFF//
monsterAction();
//MONSTER END//

//doors...//
if (isDoorDownA === true) {
  image(leftDoorImg, (width/2), (height/2));
}
if (isDoorDownB === true) {
  image(rightDoorImg, (width/2), (height/2));
}
if (isVentDown === true) {
  image(ventDoorImg, (width/2), (height/2));
} 
//doorsend//

//CAMERA//
cameraCheck();

//TIMER//
dayTimer();

timeDisplay();

batteryCheck();

if (electricalFaultOngoing === true) {
  if (eFlag3 === false) {
    eFlag3 = true;
    shuffle(electricalColors, true);
    isDoorDownA = false;
    isDoorDownB = false;
    isVentDown = false;
    isScreenFocused = false;
    currentColor = electricalColors[0];
    powerOffSound.play();
  } else {
    //DISPLAY ORBS//
    noStroke();
    fill(electricalColors[0]);
    circle(520, 505, 45)
    fill(electricalColors[1]);
    circle(600, 505, 45)
    fill(electricalColors[2]);
    circle(680, 505, 45)
    fill(electricalColors[3]);
    circle(755, 505, 45)
    stroke(0);
    strokeWeight(8);
    //funnimonster//
    if (monsterAngry === true) {
      noStroke();
      if (coverRng4[0] === 1) {
        fill('Purple');
        circle(520, 505, 60)
        image(spookyCoverImg, 520, 505);
      } else if (coverRng4[0] === 2) {
        fill('Purple');
        circle(600, 505, 60)
        image(spookyCoverImg, 600, 505);
      } else if (coverRng4[0] === 3) {
        fill('Purple');
        circle(680, 505, 60)
        image(spookyCoverImg, 680, 505);
      } else {
        fill('Purple');
        circle(755, 505, 60)
        image(spookyCoverImg, 755, 505);
      }
      stroke(0);
      strokeWeight(8);
    }
    //orbdisplay end//
    if (electricalFaultProgress >= 1) {
      fill('white')
      circle(500, 555, 15)
    }
    if (electricalFaultProgress >= 2) {
      fill('white')
      circle(585, 555, 15)
    }
    if (electricalFaultProgress >= 3) {
      fill('white')
      circle(670, 555, 15)
    }
    //DISPLAY PROGRESS
  }
}
}

if (isDying === true) {

if (dyingTimer >= 51) {
  if (monsterAngry === true) {
    image(monKillF1AImg, (width/2), (height/2));
  } else {
    image(monKillF1Img, (width/2), (height/2));
  }
  
} else if (dyingTimer >= 41) {
  if (monsterAngry === true) {
    image(monKillF2AImg, (width/2), (height/2));
  } else {
    image(monKillF2Img, (width/2), (height/2));
  }
} else if (dyingTimer >= 31) {
  if (monsterAngry === true) {
    image(monKillF3AImg, (width/2), (height/2));
  } else {
    image(monKillF3Img, (width/2), (height/2));
  }
} else if (dyingTimer >= 21) {
  if (monsterAngry === true) {
    image(monKillF4AImg, (width/2), (height/2));
  } else {
    image(monKillF4Img, (width/2), (height/2));
  }
} else if (dyingTimer >= 11) {
  if (monsterAngry === true) {
    image(monKillF5AImg, (width/2), (height/2));
  } else {
    image(monKillF5Img, (width/2), (height/2));
  }
} else if (dyingTimer >= 1) {
  if (monsterAngry === true) {
    image(monKillF6AImg, (width/2), (height/2));
  } else {
    image(monKillF6Img, (width/2), (height/2));
  }
}
  

  dyingTimer = dyingTimer - 1;
  
  if (dyingTimer <= 0) {
    dyingTimer = 60;
    isDying = false;
    isDead = true;
  }
}

if (isDead === true) {
  if (dedInit === false) {
    monsterActive = false;
    dedInit = true;
  } else {
    image(deathScreenImg, (width/2), (height/2));
  dedTimer = dedTimer - 1;
  if (dedTimer <= 0) {
gameState = 0;
monsterRoom = 'B';
moveAttempt = 300;
monsterActive = true;
monsterAngry = false;
isDoorDownA = false;
isDoorDownB = false;
isVentDown = false;
currentHour = 12;
currentSecond = 0;
currentFrameDelay = 60;
isScreenFocused = false;
currentCamera = 0;
isDead = false;
batteryAmount = 42600;
trueTimer = 21600;
startingBattery = 0;
batteryFlicker = 30;
batteryFlickerState = false;
electricalFaultOngoing = false;
electricalFaultChance = false;
eFlag1 = false;
eFlag2 = false;
eFlag3 = false;
electricalFaultProgress = 0;
dedInit = false;
dedTimer = 300;
  }
  }
}
//end of is ded thing//

if (trueTimer <= 0) {
  monsterActive = false;
  image(endScreenImg, (width/2), (height/2));
  if (officeAmbi.isPlaying() === true) {
    officeAmbi.stop();
  }
  if (endScreenJingle.isPlaying() === false) {
    endScreenJingle.play();
  }
}
}
}

function keyPressed() {

  if (key === ' ' && electricalFaultOngoing === false && batteryAmount > 0) {

    if (gameState === 0) {
      gameState = 1;
    } else {
      if (isScreenFocused === false) {
        cameraSound.play();
        isScreenFocused = true;
      } else {
        cameraSound.play();
        isScreenFocused = false;
        if (monsterRoom === 'V2' || monsterRoom === 'I' || monsterRoom === 'G') {
          spookyHere.play();
        }
      }
    }
  } else if (key === 'W' || key === 'w') {
    if (isScreenFocused === true) {
      cameraSound.play();
      currentCamera = currentCamera - 1;

      if (currentCamera === -1) {
        currentCamera = 6;
      }

    }

  } else if (key === 'A' || key === 'a') {
    if (isScreenFocused === true) {
      cameraSound.play();
      currentCamera = currentCamera + 1;

      if (currentCamera === 7) {
        currentCamera = 0;
      }
    }

  } else if (key === 'ArrowLeft' && batteryAmount > 0 && electricalFaultOngoing === false) {
    if (isDoorDownA === false) {
      doorSound.play();
      isDoorDownA = true;
    } else {
      isDoorDownA = false;
      doorSound.play();
    }
  } else if (key === 'ArrowRight' && batteryAmount > 0 && electricalFaultOngoing === false) {
    if (isDoorDownB === false) {
      isDoorDownB = true;
      doorSound.play();
    } else {
      isDoorDownB = false;
      doorSound.play();
    }
  } else if (key === 'ArrowUp' && batteryAmount > 0 && electricalFaultOngoing === false) {
    if (isVentDown === false) {
      isVentDown = true;
      doorSound.play();
    } else {
      isVentDown = false;
      doorSound.play();
    }
  } else if (electricalFaultOngoing === true && electricalScrew === false) {



    //Yellow equals Y, Green equals U, Blue equals I, Red equals P//
    if (key === 'F' || key === 'f') {
      if (currentColor === 'Yellow') {
        electricalFaultProgress = electricalFaultProgress + 1

        if (electricalFaultProgress >= 4) {
          electricalFaultOngoing = false;
          electricalFaultProgress = 0;
          powerOnSound.play();
        } else if (electricalFaultProgress === 1) {
          currentColor = electricalColors[1];
        } else if (electricalFaultProgress === 2) {
          currentColor = electricalColors[2];
        } else if (electricalFaultProgress === 3) {
          currentColor = electricalColors[3];
        }
      } else {
        electricMistake.play();
        electricalScrew = true;
      }
    } else if (key === 'G' || key === 'g') {
      if (currentColor === 'Green') {
        electricalFaultProgress = electricalFaultProgress + 1

        if (electricalFaultProgress >= 4) {
          electricalFaultOngoing = false;
          electricalFaultProgress = 0;
          powerOnSound.play();
        } else if (electricalFaultProgress === 1) {
          currentColor = electricalColors[1];
        } else if (electricalFaultProgress === 2) {
          currentColor = electricalColors[2];
        } else if (electricalFaultProgress === 3) {
          currentColor = electricalColors[3];
        }
      } else {
        electricMistake.play();
        electricalScrew = true;
      }
    } else if (key === 'D' || key === 'd') {
      if (currentColor === 'Blue') {
        electricalFaultProgress = electricalFaultProgress + 1

        if (electricalFaultProgress >= 4) {
          electricalFaultOngoing = false;
          electricalFaultProgress = 0;
          powerOnSound.play();
        } else if (electricalFaultProgress === 1) {
          currentColor = electricalColors[1];
        } else if (electricalFaultProgress === 2) {
          currentColor = electricalColors[2];
        } else if (electricalFaultProgress === 3) {
          currentColor = electricalColors[3];
        }
      } else {
        electricMistake.play();
        electricalScrew = true;
      }
    } else if (key === 'S' || key === 's') {
      if (currentColor === 'Red') {
        electricalFaultProgress = electricalFaultProgress + 1

        if (electricalFaultProgress >= 4) {
          electricalFaultOngoing = false;
          electricalFaultProgress = 0;
          powerOnSound.play();
        } else if (electricalFaultProgress === 1) {
          currentColor = electricalColors[1];
        } else if (electricalFaultProgress === 2) {
          currentColor = electricalColors[2];
        } else if (electricalFaultProgress === 3) {
          currentColor = electricalColors[3];
        }
      } else {
        electricMistake.play();
        electricalScrew = true;
      }
    }

  }
}
