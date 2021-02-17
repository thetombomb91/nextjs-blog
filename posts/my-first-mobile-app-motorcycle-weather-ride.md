---
title: "My First Mobile App: Motorcycle Riding Weather"
description: "I built and published my first mobile app Weather Ride an app for motorcycle riders to check the weather available on Android and iOS."
date: "2018-08-01"
coverImage: "seabass-creatives-56935-unsplash.jpg"
categories: 
  - "xamarin"
---

![Artistic photo of a motorcycle](/images/ForPosts/seabass-creatives-56935-unsplash.jpg) 

## Motorcycle Riding Weather

Just recently I put my first app into the Android Play Store, [Motorcycle Riding Weather](https://play.google.com/store/apps/details?id=com.thetombomb.motorcycleridingweather). A 2018 goal of mine was to release a mobile app, and I have achieved that! It is a simple app where users manipulate settings to determine if the upcoming days will be good for riding their motorcycle.

I released the app as an MVP (Minimum Viable Product). It is barebones for right now. I plan is to continuously improve the app with more features and more riding settings to configure.

It was a fun experience putting together the MVP. I have taken some shortcuts in the code in places, and have a little bit of messy hard to extend the code. This gives me plenty of work to do in the coming months. But I released, I have something that provides value to users even in its most basic state.

### Technology used

The app is 100% developed using Xamarin.Forms. I have only released the app on the Android Play Store for right now because that is the only app market I have paid to be on. Android's $25 lifetime developer access is much more affordable to me compared to iOS's $100 a year. Technically, my app works on iOS but I cannot see myself paying $100 a year right now.

Along with Xamarin.Forms I am using Prism 7 framework and .Net Standard 2.0. I had not had much experience with these latest versions. The features they provide make development more streamlined.

The [Dark Sky API](https://darksky.net/dev) is what I use to all weather data. It has a free tier with plenty of API calls for my current needs. I found it to provide the right balance between up to date information and free API calls available.

### Plans for improvement

Plenty of things need improving but a list that will change over time is below:

- Add more configurable settings: Wind, Rain type, Snowfall, etc..
- Ability to not consider certain timeframes in the riding conditions such as nighttime
- Allow for more than just zip code to determine the location
- Write Unit Test and UI Tests
- Abstract out services instead of doing lots of work in view models.
- Incorporate more analytics events

 

Check out [Motorcycle Riding Weather](https://play.google.com/store/apps/details?id=com.thetombomb.motorcycleridingweather) in the Play Store now! I look forward to posting my progress on the app as I release updates.
