function monsterAction() {
    if (monsterActive === true) {

      if (mirrorInit === false && monsterRoom === 'E') {
        shuffle(mirrorRng3, true);
        mirrorLaugh.play();
        mirrorInit = true;
      }

        if (moveAttempt <= 0) {
          

          let selectedMove = random(movementRng10);
          //room movement variable//
      
          if (selectedMove === 1 && monsterAngry === false) {
            if (monsterRoom === 'B' && electricalFaultChance === true) {
              electricalFaultChance = false;
              electricalFaultOngoing = true;
            } else {
              
            }
            
          } else if (selectedMove === 2 && monsterAngry === false) {
            if (monsterRoom === 'B' && electricalFaultChance === true) {
              electricalFaultChance = false;
              electricalFaultOngoing = true;
            } else {
              
            }
          } else {
      
          if (monsterRoom === 'A') {
            //movement check//
            if (selectedMove <= 8) {
              monsterRoom = 'D';
            } else {
              monsterRoom = 'B';
            }
            //movement check end//
          } else if (monsterRoom === 'B') {
            //movement check//
            if (electricalFaultChance === true) {
              electricalFaultChance = false;
              electricalFaultOngoing = true;
            } else if (selectedMove <= 6) {
                monsterRoom = 'A';
              } else {
                monsterRoom = 'C';
              }
            //movement check end//
          } else if (monsterRoom === 'C') {
            //movement check//
            if (selectedMove <= 8) {
              monsterRoom = 'F';
            } else {
              monsterRoom = 'B';
            }
            //movement check end//
          } else if (monsterRoom === 'D') {
            //movement check//
            if (selectedMove <= 6) {
              monsterRoom = 'G';
            } else {
              monsterRoom = 'E';
            }
            //movement check end//
          } else if (monsterRoom === 'E') {
            //movementcheck//
            if (selectedMove >= 3) {
              if (mirrorRng3[0] === 1) {
                monsterRoom = 'D';
                mirrorInit = false;
              } else if (mirrorRng3[0] === 2) {
                monsterRoom = 'F';
                mirrorInit = false;
              } else {
                monsterRoom = 'V1';
                mirrorInit = false;
              }
            }
            //movement check end//
          } else if (monsterRoom === 'F') {
            //movement check//
            if (selectedMove <= 6) {
              monsterRoom = 'I';
            } else {
              monsterRoom = 'E';
            }
            //movement check end//
          } else if (monsterRoom === 'G') {
            //movement check//
            if (isDoorDownA === true) {
              monsterRoom = 'B';
              doorBanging.play();
            } else {
              monsterRoom = 'H';
            } 
            //movement check end//
          } else if (monsterRoom === 'H') {
            //movement check//
            
              if (isDying === false) {
                monsterKill.play();
                isDying = true;
              }
            
            //movement check end//
          } else if (monsterRoom === 'I') {
            //movement check//
            if (isDoorDownB === true) {
              monsterRoom = 'B';
              doorBanging.play();
            } else {
              monsterRoom = 'H';
            } 
            //movement check end//
          } else if (monsterRoom === 'V1') {
            monsterRoom = 'V2';
            
          } else if (monsterRoom === 'V2') {
            if (isVentDown === true) {
              monsterRoom = 'B';
              doorBanging.play();
            } else {
              monsterRoom = 'H';
            } 
          }
          
        }
          //room movement variable end//
          
          moveAttempt = random(180, 300);
        } else {
          moveAttempt = moveAttempt - 1;
        }
      
      
      //oops am i here?//
      if (monsterRoom === 'V2'  && isVentDown === false) {
        if (monsterAngry === true) {
        image(monVentOfficeAImg, (width/2), (height/2));
        } else {
          image(monVentOfficeImg, (width/2), (height/2));
        }
      } else if (monsterRoom === 'E') {
        if (mirrorRng3[0] === 1) {
          if (monsterAngry === true) {
            image(monELeftAImg, (width/2), (height/2));
          } else {
          image(monELeftImg, (width/2), (height/2));
          }
        } else if (mirrorRng3[0] === 2) {
          if (monsterAngry === true) {
            image(monERightAImg, (width/2), (height/2));
          } else {
          image(monERightImg, (width/2), (height/2));
          }
        } else {
          if (monsterAngry === true) {
            image(monEUpAImg, (width/2), (height/2));
          } else {
          image(monEUpImg, (width/2), (height/2));
          }
        }
      } else if (monsterRoom === 'G' && isDoorDownA === false) {
        if (monsterAngry === true) {
          image(monLeftDoorAImg, (width/2), (height/2));
        } else {
        image(monLeftDoorImg, (width/2), (height/2));
        }
      } else if (monsterRoom === 'I' && isDoorDownB === false) {
        if (monsterAngry === true) {
          image(monRightDoorAImg, (width/2), (height/2));
        } else {
        image(monRightDoorImg, (width/2), (height/2));
        }
      } else if (monsterRoom === 'H') {
        
      }
      //goodbye//
      }
}