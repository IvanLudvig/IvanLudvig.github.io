---
layout: post
title:  "Turning faces into emojis using Deepface with ChatGPT's help"
date:   2023-02-20 12:00:00 +0300
categories: tech
redirect_from:
  - /tech/2023/02/20/pasteface.html
---
<b>[Web demo](https://ivanludvig.github.io/pasteface)</b>  
<b>[Code on GitHub](https://github.com/IvanLudvig/pasteface)</b>


Have you ever sent a 🤣 with a completely straight face? 
My idea is to make an app to analyze your face and suggest a relevant emoji. Pressing a key combination will paste your face as an emoji. This will bring us closer to achieving the peak of human communication. We'll call it _Pasteface_.


The [deepface](https://github.com/serengil/deepface) Python library lets us analyze a face for emotions. Just like this:
```python
face_analysis = DeepFace.analyze(
    img_path=image,
    actions=['emotion']
)
```
It outputs percentages of the base emotions. Here's an example of the output for my usual face:
```json
'emotion': {
    'angry': 0.04853346908930689, 
    'disgust': 0.000273070281764376,
    'fear': 0.8516134694218636, 
    'happy': 0.15016489196568727,
    'sad': 0.6890629883855581, 
    'surprise': 0.08423920371569693,
    'neutral': 98.17611575126648
}
```
If you're wondering what I am so afraid of all the time, the answer is simple: it's ChatGPT.

In order to convert this output into emojis we need to come up with some sort of mapping. The conventional way to do this is either by NLP or labelling emojis manually. But I'll assign this task to the almighty ChatGPT because that's trendy and requires minimal effort.

<img src="{{site.baseurl}}/assets/img/pasteface/prompt1.png">

Seems alright. The neutral emoji couldn't possibly be more neutral. 

Let's gather more emojis.
<img src="{{site.baseurl}}/assets/img/pasteface/prompt2.png">

Could've been more accurate, but we'll take it.

Now we have 50+ emojis with their vectors so let's fire everything up. 

Loading the data and splitting emojis (`keys`) and their vectors (`values`):
```python
data = np.recfromcsv('data.csv', delimiter=',')
columns = ['angry', 'disgust', 'fear', 'happy', 'sad', 'surprise', 'neutral']

keys = [d[0] for d in data]
values = [np.array(list(d)[1:]) for d in data]
```

The deepface output is converted into a vector and then the closest emoji is chosen:
```
vector = np.array([face['emotion'][col] * 0.01 for col in columns])
distances = np.linalg.norm(values - vector, axis=1)
output = keys[np.argsort(distances)[0]]
````

Simple as that. 

After some more coding I made a Python app which pastes your face when pressing `Ctrl+alt+F`. [Full code](https://github.com/IvanLudvig/pasteface).

I also made a [web demo](https://ivanludvig.github.io/pasteface) Please make the 🦕 face. Warning: the web app may become unavailable or not work at times because it uses free services to host the API.


> Making the world more cringe one app at a time
