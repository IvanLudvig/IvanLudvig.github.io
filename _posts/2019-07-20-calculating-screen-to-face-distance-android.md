---
layout: post
title:  "Calculating screen to face distance (Android)"
date:   2019-07-20 15:15:15 +0300
categories: tech
redirect_from:
  - /tech/2019/07/20/calculating-screen-to-face-distance-android.html
  - /blog/2019/07/20/calculating-screen-to-face-distance-android.html
---

While searching for a way to detect screen to face distance on Android I found only one open source project but it lacked some explanation and was quite old and complicated. So I did it myself.

[Paper](https://www.techrxiv.org/articles/preprint/Calculating_screen_to_face_distance/12951320)   
[Project on GitHub](https://github.com/IvanLudvig/Screen-to-face-distance)  
[A more advanced project using this algorithm](https://github.com/IvanLudvig/FollowingEye)

The algorithm is based on the distance between eyes. The further the face, the less the distance between your eyes appears on the camera.  

The formula I used is:  

<img src="{{site.baseurl}}/assets/img/formula.png" width="600">

[Full code of MainActivity](https://github.com/IvanLudvig/Screen-to-face-distance/blob/master/app/src/main/java/ru/ivanludvig/screenfacedistance/MainActivity.java)

Instead of object height we'll be using width as we are using the distance between eyes as the object. I'm going to explain how to get each of the parameters required.

### Using the front camera
I got the front camera this way:
```java
private Camera frontCam() {
    int cameraCount = 0;
    Camera cam = null;
    Camera.CameraInfo cameraInfo = new Camera.CameraInfo();
    cameraCount = Camera.getNumberOfCameras();
    for (int camIdx = 0; camIdx < cameraCount; camIdx++) {
        Camera.getCameraInfo(camIdx, cameraInfo);
        if (cameraInfo.facing == Camera.CameraInfo.CAMERA_FACING_FRONT) {
            try {
                cam = Camera.open(camIdx);
            } catch (RuntimeException e) {
                Log.e("FAIL", "Camera failed to open: " + e.getLocalizedMessage());
            }
        }
    }
    return cam;
}
```

### Focal length
Focal length (`F`) can be obtained from the CameraParameters:

```java
Camera.Parameters campar = camera.getParameters();
F = campar.getFocalLength();
```

### Distance between eyes
The distance between eyes will represent real height in the formula. I took the average value of 63mm.

### Image dimensions
Image width and height were declared in the initialisation of the camera source preview. The variables `IMAGE_WIDTH`, `IMAGE_HEIGHT` are used to store these values.

### Sensor dimensions
The dimensions of the sensor can be obtained from Camera Parameters:

```java
angleX = campar.getHorizontalViewAngle();
angleY = campar.getVerticalViewAngle();
sensorX = (float) (Math.tan(Math.toRadians(angleX/2))*2*F);
sensorY = (float) (Math.tan(Math.toRadians(angleY/2))*2*F);
```

### Object width/height
The class `Face` stores eyes, ears, etc in a list of `Landmark` objects. The list can be accessed by calling `getLandmarks()`. Then, out of the list we pick the left and right eyes and store their positions. 

```java
PointF leftEyePos = face.getLandmarks().get(LEFT_EYE).getPosition();
PointF rightEyePos = face.getLandmarks().get(RIGHT_EYE).getPosition();
```
Then, we calculate the distance between eyes separately for each axis. These values are in abstract units (like pixels). 

```java
float deltaX = Math.abs(leftEyePos.x - rightEyePos.x);
float deltaY = Math.abs(leftEyePos.y - rightEyePos.y);
```
Then, the distance is calculated using the main formula. In order to increase accuracy it's calculated using either width or height depending on the axis along which the difference(`deltaX`, `deltaY`) is bigger.

```java
if (deltaX >= deltaY) {
    distance = F * (AVERAGE_EYE_DISTANCE / sensorX) * (IMAGE_WIDTH / deltaX);
} else {
    distance = F * (AVERAGE_EYE_DISTANCE / sensorY) * (IMAGE_HEIGHT / deltaY);
}
```

That's it! Thanks for reading.


Good luck!
