---
title: "Microsoft Cognitive Services Emotion API First Impressions"
description: "I played around with Microsofts Cognitive services and had a lot of fun."
date: "2017-07-18"
categories: 
  - "programming"
coverImage: "MicrosoftCognitiveServicesEmotionAPI.png"
---

I am always interested in and looking for new libraries to put to use in Xamarin.Forms. I recently stumbled upon Microsoft Cognitive Services Emotion API and wanted to see what it was all about. After a quick look at some sample code, I knew I needed to sign up and try this library out for myself.

The sample code I had been looking at can be found here [Xamarin.Forms Emotion API sample code](https://developer.xamarin.com/samples/xamarin-forms/WebServices/TodoCognitiveServices/). The sample has some other services built into it but what really interested me the most was the [Emotion API](https://azure.microsoft.com/en-us/services/cognitive-services/emotion/).

According to comments in the code, which I am always skeptical of, the API can detect happiness, sadness, anger, fear, contempt, disgust, and neutral. It is amazing that it can determine these emotions and with great accuracy. What is even more amazing is that it basically is one line of code.

```
emotionResultLabel.Text = emotionResult.FirstOrDefault().Scores.ToRankedList().FirstOrDefault().Key;
```

This one simple line gets the first (highest percentile) emotion recognized from a picture. Using the sample code you can easily take a beautiful selfie, send it with the single API call, and within seconds get an emotion back. I am not sure yet what factors cause it to take longer but sometimes I get results back in under a second.

From my dozen or so attempts at taking a picture of myself, it gave quite accurate results. I have yet to fake fear in a picture but will see if I can make that happen.  I am very impressed with the Emotion API's ability to analyze and image and produce an emotional result. Looking forward to Microsoft adding even more emotions.

The free tier for using the API is quite impressive in terms of the number of calls available. I hope to be writing a post soon showing off an app I have made in Xamarin.Forms incorporating the emotion API.

![Xamarin.Forms Microsoft Emotion Api](/images/ForPosts/Screenshot_2017-07-16-16-45-38-576x1024.png)
