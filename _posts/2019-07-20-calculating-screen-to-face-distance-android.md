---
layout: post
title:  "Calculating screen to face distance (Android)"
date:   2019-07-20 15:15:15 +0300
categories: blog
---

While searchin for a way to detect screen to face distance on Android I found only one open source project but it lacked some explanation and was quite old and complicated. So I did it myself.

[Project on GitHub](https://github.com/IvanLudvig/Screen-to-face-distance)
[A more advanced project using this algorithm](https://github.com/IvanLudvig/FollowingEye)

The algorithm is based on the distance between eyes. The further the face, the less the distance between your eyes appears on the camera.  

The formula I used is:  

<img src="formula.png" width="600">

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
            Log.v("CAMID", camIdx+"");
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
Focal length (f in the formula) can be obtained from the CameraParameters:


```java
    Camera.Parameters campar = camera.getParameters();
    F = campar.getFocalLength();
```

### Distance between eyes
The distance between eyes will represent real height in the formula. I took the average value of 63mm.

### Image height
Image height was declared in the initialisation of the camera source preview. Look into the full code if you face difficulties.

### Object width
Object width in pixels is calculated using the formula of the distance between two points, which uses the Pythagoras theorem. 
<img src="distance.png" width="300">

In code it looks rather complicated:
```java
    float p =(float) Math.sqrt(
            (Math.pow((face.getLandmarks().get(Landmark.LEFT_EYE).getPosition().x-
                    face.getLandmarks().get(Landmark.RIGHT_EYE).getPosition().x), 2)+
                    Math.pow((face.getLandmarks().get(Landmark.LEFT_EYE).getPosition().y-
                            face.getLandmarks().get(Landmark.RIGHT_EYE).getPosition().y), 2)));
```

### Sensor width
The dimensions of the sensor can be obtained from Camera Parameters:
```java
    angleX = campar.getHorizontalViewAngle();
    angleY = campar.getVerticalViewAngle();
    sensorX = (float) (Math.tan(Math.toRadians(angleX/2))*2*F);
    sensorY = (float) (Math.tan(Math.toRadians(angleY/2))*2*F);
```
Note `sesnsorX` should be the same values as `sensorY`.

That's all we need. Thanks for reading.


The final formula in code looks like this:
```java
	float d = F*(H/sensorX)*(768/(2*p));
```


Good luck!

