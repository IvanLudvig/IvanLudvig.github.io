---
layout: post
title:  "Eye following android app using face detection"
date:   2019-07-14 14:07:06 +0300
categories: blog
---

I have previously done an [app](https://github.com/IvanLudvig/Screen-to-face-distance) that detects the distance between the users face and the phone. It basically uses the distance between the user's eyes to do so. The further the user is, the shorter the distance appers. It uses this formula:

<img src="{{site.baseurl}}/assets/img/formula.png" width="400">

 Now, I made a simple 3d eye that follows your face. The 3d model is rendered using libgdx.

[The link to the project on github](https://github.com/IvanLudvig/FollowingEye)

<img src="{{site.baseurl}}/assets/img/screenshot.jpg" width="300">

