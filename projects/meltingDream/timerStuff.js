function dayTimer() {
    currentFrameDelay = currentFrameDelay - 1;
    trueTimer = trueTimer -1;

   // if (trueTimer <= 21000) {//
        //if (eFlag1 === false) {//
            //eFlag1 = true;//
            //electricalFaultChance = true;//
        //}//
    //}//

    if (trueTimer <= 12600) {
       if (eFlag1 === false) {
            eFlag1 = true;
            electricalFaultChance = true;
        }
    }

    if (trueTimer <= 3600) {
        if (eFlag2 === false) {
            eFlag2 = true;
            electricalFaultChance = true;
        }
    }

    if (trueTimer <= 7200) {
        if (monsterAngry === false) {
            monsterAngrySound.play();
            monsterAngry = true;
            shuffle(coverRng4, true);
        }
    }

    if (currentFrameDelay <= 0) {
      if (currentSecond >= 59) {
        if (currentHour === 12) {
          currentHour = 1;
          currentSecond = 0;
          currentFrameDelay = 60;
        } else {
          currentHour = currentHour + 1;
          currentSecond = 0;
          currentFrameDelay = 60; 
        }
      } else {
      currentSecond = currentSecond + 1
      currentFrameDelay = 60;
      }
    }
}

function timeDisplay() {
    textAlign(LEFT);
    textSize(50);
    fill(0,150,100);
    text(currentHour, 1000, 50);
    text(currentSecond, 1100, 50);
    textAlign(CENTER);
}

function batteryCheck() {

    noStroke();
    fill(0);
    rect(95, 45, 185, 80);
    stroke(0);
    strokeWeight(8);

batteryAmount = batteryAmount - 1;

if (isDoorDownA === true) {
    batteryAmount = batteryAmount - 1;
}
if (isDoorDownB === true) {
    batteryAmount = batteryAmount - 1;
}
if (isVentDown === true) {
    batteryAmount = batteryAmount - 1;
}
if (isScreenFocused === true) {
    batteryAmount = batteryAmount - 2;
}

if (batteryAmount > 0) {
   if (batteryAmount >= (startingBattery * 0.1)) {
    noStroke();
    fill(100, 255, 100);
    rect(30, 45, 30, 60);
    stroke(0);
    strokeWeight(8);
   } else if (batteryAmount >= (startingBattery * 0.05)) {
    noStroke();
    fill(255, 100, 100);
    rect(30, 45, 30, 60);
    stroke(0);
    strokeWeight(8);
   } else {
    batteryFlicker = batteryFlicker - 1;
    if (batteryFlicker <= 0) {
        if (batteryFlickerState === false) {
            batteryFlickerState = true;
            batteryFlicker = 30;
        } else {
            batteryFlickerState = false;
            batteryFlicker = 30;
        }
    }
    if (batteryFlickerState === false) {
    noStroke();
    fill(255, 100, 100);
    rect(30, 45, 30, 60);
    stroke(0);
    strokeWeight(8);
    }
   }
} else {
    isDoorDownA = false;
    isDoorDownB = false;
    isVentDown = false;
    isScreenFocused = false;
    powerOffSound.play();
}
if (batteryAmount > (startingBattery * 0.2)) {
    noStroke();
    fill(100, 255, 100);
    rect(65, 45, 30, 60);
    stroke(0);
    strokeWeight(8);
}
if (batteryAmount > (startingBattery * 0.4)) {
    noStroke();
    fill(100, 255, 100);
    rect(100, 45, 30, 60);
    stroke(0);
    strokeWeight(8);
} 
if (batteryAmount > (startingBattery * 0.6)) {
    noStroke();
    fill(100, 255, 100);
    rect(135, 45, 30, 60);
    stroke(0);
    strokeWeight(8);
}
if (batteryAmount > (startingBattery * 0.8)) {
    noStroke();
    fill(100, 255, 100);
    rect(165, 45, 20, 50);
    stroke(0);
    strokeWeight(8);
}
}