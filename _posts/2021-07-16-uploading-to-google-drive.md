---
layout: post
title:  "Uploading to Google Drive directly from a URL"
date:   2021-07-16 22:42:00 +0300
categories: blog
---

&nbsp;1. Open [Google Colab](https://colab.research.google.com/) and click "New notebook".  
&nbsp;2. Open the files tab in the sidebar and mount google drive.
<center>
<img src="{{site.baseurl}}/assets/img/driveupload/1.png" width="400px"/>
</center>
&nbsp;3. Paste the following code into a cell and run it (Ctrl+Enter).
```
!wget -P /content/drive/My\ Drive/upload_folder http://www.url.to/your/file.txt
```
replacing `upload_folder` with an existing directory on your google drive (into which the file will be uploaded) and `http://www.url.to/your/file.txt` with your files's url.  
   
I've found this method to be much faster than downloading the file onto my machine and then uploading it to google drive. 
