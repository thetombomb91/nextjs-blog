---
title: "The Basics of the Alexa Skill IntentSchema"
description: "The IntentSchema is an important part of your Alexa Skill. Here is what I learned building my first Alexa Skill."
date: "2017-03-08"
categories: 
  - "alexa"
  - "amazon"
coverImage: "ap_resize.png"
---

![Amazon Alexa Dot speaker with logos behind](/images/ForPosts/ap_resize.png)

In this post, I will describe the basics of designing and working with the IntentSchema for an Amazon Alexa skill. To provide some context, an Alexa skill can have multiple intents. Each intent is a specific action within the skill.

Imagine we have a calculator skill. The user can ask Alexa to add or subtract two numbers. The skill would be the calculator and the two intents would be adding and subtracting. The intent schema comes into play because we are allowing the user to add or subtract any two numbers. We use the IntentSchema.json to prepare Alexa to accept those two arguments. Note: The programming idea of an argument is referred to as a slot in the Alexa world, I will refer to them as slots for rest of post.

For our addition and subtraction intents, we would need to define two slots for both of them the first number and second number in the calculation. See below the intentSchema.json currently with only the AddIntent slots defined in it.

```
{
   "intents":\[
      {
         "intent":"AddIntent",
         "slots":\[
            {
               "name":"firstNumber",
               "type":"AMAZON.Number"
            },
            {
               "name":"secondNumber",
               "type":"AMAZON.Number"
            }
         \]
      }
   \]
}
```

You can see in the json that we have two individual slots (firstNumber & secondNumber). Each has a name and a type attribute these are required for every slot that you define.

```
{
	"intents": \[{
		"intent": "AddIntent",
		"slots": \[{
			"name": "firstnum",
			"type": "AMAZON.NUMBER"
		}, {
			"name": "secondnum",
			"type": "AMAZON.NUMBER"
		}\]
	}, {
		"intent": "SubtractIntent",
		"slots": \[{
			"name": "firstnum",
			"type": "AMAZON.NUMBER"
		}, {
			"name": "secondnum",
			"type": "AMAZON.NUMBER"
		}\]
	}\]
}
```

Above is an example with both of our intents defined inside of the intentSchema.json Notice slots within the same intent must have unique names but slots inside of a different intent are within a new scope.

All slots must have a defined types. Amazon has some default types that you can use for your apps. These types are the most common:

```
|  Slot Type |  Description |
| --- | --- |
|  AMAZON.NUMBER |  Able to recognize numbers and convert then to integers. Example: Two converts to 2 |
|  AMAZON.TIME |  Converts times into programmable values. Example: "Set alarm for seven pm". Converts to 7:00 or 18:00 depending on settings |
|  AMAZON.DURATION |  Able to change durations into usable values Example: "Set alarm for 45 minutes". Converts to PT45M |
|  AMAZON.FOUR\_DIGIT\_NUMBER |  Recognizes 4 digit number sequences like years and converts them. Example: "Wikipedia war of eighteen twelve" converts to 1812. |
|  AMAZON.DATE |  Converts dates into usable formats. Example: "What is the weather today" converts to what is the weather for 2017-3-2 |
```

If you find yourself struggling with understanding what the above types do and how they handle user input. Make sample apps and look at what Alexa returns as the data. It is useful to see the real world conversions that Alexa does.

The intentSchema makes Alexa powerful because it can make your skills more dynamic, in that you can accept all types of input from the user. It is possible to build custom slots as well as lists to really build out your skill. I will make a post in the future about these advanced topics.
