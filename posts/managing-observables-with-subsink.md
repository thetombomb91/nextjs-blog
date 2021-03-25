---
title: "Managing your RxJS Observable subscriptions in Angular with SubSink"
description: "Managing RxJS Observables in Angular can be difficult, with SubSink subscribing and unsubscribing is easy."
date: "2020-07-29"
categories: 
  - "angular"
---

![Angular Logo](/images/ForPosts/angular.png)

RxJS and Observables are HOT in Angular now. Many of us have started using them and they are not too difficult to pick up and begin using. But there is probably a small piece you are forgetting...Unsubscribing to your subscriptions.

Way too often I open up an Angular Component and inside the ngOnInit() I see a subscription that is never being unsubscribed from. Something like this:

```
  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
      this.userListSubject$.next(this.userList);
    });
  }
```

Above we have our userService, and we are subscribing to the GetAllUsers method in our service. But we never assign our call to any variable. This is an easy way to know we are never unsubscribing from this call.

Now you may have many calls like this in your app and it works fine. You don't notice any ill effects. But this is bad practice. If we subscribe we need to unsubscribe. We should not leave subscriptions laying around. We don't want to leave tons of open subscriptions. So what should the above code look like?

```
  sub: Subscription;

  ngOnInit() {
    this.sub = this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
      this.userListSubject$.next(this.userList);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
```

Above, we created our sub variable to hold onto the subscription. And in the ngOnDestroy lifecycle hook, we unsubscribe. This looks pretty easy. Just a few extra lines of code. But what if we had lots of subscriptions. Having to add many new component level variables can clutter up our file quickly. And we already have a hard time remembering to unsubscribe, is their an easier way?

This is where the package [SubSink](https://www.npmjs.com/package/subsink) developed by Ward Bell comes in. Managing subscriptions should not be difficult and SubSink makes it easy. The same code above using SubSink would look like.

```
  private subscriptions = new SubSink();

  ngOnInit() {
    // Method 1
    this.subscriptions.add(this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
      this.userListSubject$.next(this.userList);
    }));

    // Method 2
    this.subscriptions.sink = this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
      this.userListSubject$.next(this.userList);
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
```

There are two easy ways we can use SubSink shown above. In Method 1 we directly add our subscription. While in Method 2 we are using a setter to add the subscription to the sink. Both end up doing the same thing functionally but we can use either syntax.

In the ngOnDestroy, we have one simple this.subscriptions.unsubscribe() call that does all the unsubscribing to all of our subscriptions for us. SubSink makes it much easier to manage our subscriptions and gives us no excuse to not remember to unsubscribe from them.

SubSink makes our lives easier managing the subscriptions for us. Making our code easier and less cluttered is always a big win!

If you are an Angular developer check out my post on [Must-have VS Code Extensions for Angular Developers!](https://www.thetombomb.com/2020/07/27/must-have-vs-code-extensions-for-angular-typescript/)
