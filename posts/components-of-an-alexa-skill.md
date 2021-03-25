---
title: "The Components that Make Up an Alexa Skill"
description: "In this post we'll dive into the main components of an Alexa Skill: Utterances, Intent Schema, & AWS Lambda"
date: "2017-03-01"
categories: 
  - "amazon"
coverImage: "amazon_alexa_app_logo.png"
---

![Amazon Alexa Dot speaker with logos behind](/images/ForPosts/amazon_alexa_app_logo.png)


This post will give the big picture of the components that make up an Amazon Alexa Skill. It will contain next to no code. But will introduce you to the pieces and terminology used in the Alexa world.

First, let us start what an Alexa skill is. The skill is essentially an action or function that your Amazon Echo device will perform. A skill is invoked by asking Alexa a specific phrase.

Examples of skills would be

- Alexa, what is the weather today?
- Alexa, where is my stuff?
- Alexa, will it rain today?

At a very high level, each of these phrases invokes a skill where Alexa will parse the words. The words are then sent to a predetermined function (set of code) in the cloud-based on what the phrase was, the function performs a series of actions, then a result is returned back to your Echo device. This high-level flow is the same for all skills. Let's dive in and get into the details of how this process works.

![amazon-echo.jpg](/images/ForPosts/amazon-echo.jpg)

The main components that makeup Alexa Skill:

- **Utterances**
- **Intent Schema**
- **AWSLambda**

### **Utterances (text)**

As I said above you have to speak a specific phrase to your Echo device in order to invoke the skill. These phrases are called utterances. Utterances are contained in a simple text file. They are the phrases that Alexa is on the lookout for and if she recognizes a user's phrase as an utterance she knows what action to perform.

```
AddIntent what is 2 plus 2
AddIntent add 2 and 2

SubtractIntent what is 5 minus 2
SubtractIntent subtract 5 and 2
```

The first words you see _AddIntent_ and _SubtractIntent_ are individual intents within a skill. Skills can have more than one intent. And in the case above it has two intents. Essentially an add and subtract. Right now the skill is extremely basic and only capable of recognizing the above hard-codes phrases.

So that is very basic and we want our users to be able to add and subtract any whole numbers. For that, we need to tell Alexa to expect any number. We do that by still using our utterances but also combining that with and intentSchema file. Here is an example of an utterances file allowing for the addition of any two whole numbers.

```
AddIntent what is {firstNumber} plus {secondNumber}
AddIntent add {firstNumber} and {secondNumber}

SubtractIntent what is {firstNumber} minus {secondNumber}
SubtractIntent subtract {firstNumber} and {secondNumber}
```

Our utterances text file now contains placeholders instead of hardcoded values, great! But how is Alexa supposed to make sense of {_firstNumber}_ and {_secondNumber}?_ That is where the intentSchema JSON file comes in.

### Intent Schema (JSON)

The intentSchema provides meaning to our variables. Instead of variables, amazon calls them slots so I will refer to them as such. Each slot is filled by whatever the user says. If the user asked, "What is 10 plus 5". Alexa would know that 10 refers to _firstNumber_ and 5 refers to _secondNumber._

Here is an example intentSchema.json file.

```
{
    "intents": \[{
		"intent": "AddIntent",
		"slots": \[{
			"name": "firstNumber",
			"type": "AMAZON.NUMBER"
		}, {
			"name": "secondNumber",
			"type": "AMAZON.NUMBER"
		}\]
	}, {
		"intent": "SubtractIntent",
		"slots": \[{
			"name": "firstNumber",
			"type": "AMAZON.NUMBER"
		}, {
			"name": "secondNumber",
			"type": "AMAZON.NUMBER"
		}\]
	}\]
}
```

By using the utterances.txt and intentSchema.json together our Echo device is capable of understanding whatever number a user says. Alexa knows to expect any potential number in our slot _firstNumber_ and _secondNumber_ because we match the same name and give it an Amazon.Number type.

I do not want to get too detailed right now into the intentSchema files but they are a powerful method for gathering dynamic user input for your skill. Expect more posts in the future getting into the more powerful aspects of the intentSchema file.

### Amazon AWS Lambda

Now that we have Alexa understanding what a user says. We need to tie that together with our function in the cloud to actually do some processing based on what the user said. We create an AWS Lambda function for this.

_**![aws-lambda](/images/ForPosts/aws-lambda.png)**_

_**"AWS Lambda** is an event-driven, serverless computing platform provided by Amazon as a part of the Amazon Web Services. It is a compute service that runs code in response to events and automatically manages the_ compute _resources required by that code."_

The lambda function is connected to our particular skill so the event that causes it to fire is the user says a specific utterance that Alexa was expecting. Alexa creates a JSON object based on the user's phrase, the lambda function performs actions on data inside of the JSON object, and last it creates a JSON object of its own to send back to Alexa as a response. It is your responsibility as the developer to write a lambda function to do the processing and creation of the JSON object to send back to Alexa.

This JSON object sent back to Alexa will contain the response for Alexa to repeat back to the user. This whole process happens very quickly. As long as your lambda function is efficient and does not need to do a lot of computing you should be able to get your response back within a second.

Currently, functions for AWS Lambda can be written in Node.js (JavaScript), Python, and Java (Java 8 compatible), as well as C#. Also, it is very noteworthy to know that as of right now Alexa skills can only be hosted on US East (N. Virginia) and EU (Ireland) regions. Lambda functions for other purposes can be hosted in many other regions but if you are creating one to be used with an Alexa skill it must be hosted in one of the mentioned regions.

To bring it all together there are three major pieces that make up an Alexa skill. We have the utterances, intentSchema, and the AWS Lambda function. Expect a more technical guide very soon on how to create your own Alexa Skill. If anything confused you in this article feel free to leave a comment and I can clarify.

![https_proxy](/images/ForPosts/https_proxy.jpg)
