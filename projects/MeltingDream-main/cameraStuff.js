function cameraCheck() {
    if (isScreenFocused === true) {
        strokeWeight(12);
        stroke(0);
        fill(20, 20, 60);
        rect((width/2), (height/2), 1080, 608)
      
        if (currentCamera === 0) {
          image(cam1Img, (width/2), (height/2));
      
          //monsterRoomCheck//
          if (monsterRoom === 'B') {
            if (monsterAngry === true) {
              image(monCam1AImg, (width/2), (height/2));
            } else {
              image(monCam1Img, (width/2), (height/2));
            }
          }
      
      
        } else if (currentCamera === 1) {
          image(cam2Img, (width/2), (height/2));
      
          //monsterRoomCheck//
          if (monsterRoom === 'A') {
            if (monsterAngry === true) {
              image(monCam2AImg, (width/2), (height/2));
            } else {
              image(monCam2Img, (width/2), (height/2));
            }
          }
          
        } else if (currentCamera === 2) {
          image(cam3Img, (width/2), (height/2));
      
          //monsterRoomCheck//
          if (monsterRoom === 'C') {
            if (monsterAngry === true) {
              image(monCam3AImg, (width/2), (height/2));
            } else {
              image(monCam3Img, (width/2), (height/2));
            }
          }
        } else if (currentCamera === 3) {
          image(cam4Img, (width/2), (height/2));
      
          //monsterRoomCheck//
          if (monsterRoom === 'D') {
            if (monsterAngry === true) {
              image(monCam4AImg, (width/2), (height/2));
            } else {
              image(monCam4Img, (width/2), (height/2));
            }
          }
        } else if (currentCamera === 4) {
          image(cam5Img, (width/2), (height/2));
      
        } else if (currentCamera === 5) {
          image(cam6Img, (width/2), (height/2));
      
          //monsterRoomCheck//
          if (monsterRoom === 'F') {
            if (monsterAngry === true) {
              image(monCam6AImg, (width/2), (height/2));
            } else {
              image(monCam6Img, (width/2), (height/2));
            }
          }
        } else if (currentCamera === 6) {
          image(cam7Img, (width/2), (height/2));
      
          //monsterRoomCheck//
          if (monsterRoom === 'V1') {
            if (monsterAngry === true) {
              image(monCam7AImg, (width/2), (height/2));
            } else {
              image(monCam7Img, (width/2), (height/2));
            }
          }
        }
        strokeWeight(8);
      } 
}