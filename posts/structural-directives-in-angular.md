---
title: "What are Structural Directives in Angular?"
description: "Let's review *ngIf and *ngFor in Angular"
date: "2019-10-24"
categories: 
  - "angular"
---

Structural Directives in Angular modify what is displayed in a view. They live directly in the HTML. They modify our HTML by adding, removing, or manipulating elements.

Why are they called structural directives? It is because they modify the structure of the Document Object Model (DOM).

Structural directives are easy to spot. They will begin with an asterisk (\*). And the two most common structural directives are **[\*ngIf](https://angular.io/api/common/NgIf)** and **[\*ngFor](https://angular.io/guide/template-syntax#ngFor)**.

```
<div *ngIf="TheTomBomb">Thomas Is The Best</div>
```

Above is how we use a **\*ngIf**. The if statement will evaluate on _TheTomBomb_ and only if that is true will it include "Thomas is the best" into our DOM and viewable to the user.

If _TheTomBomb_ evaluates to false "Thomas is the best" will not display. And not only that, but it will also not be present in the DOM.

```
<ul>
  <li *ngFor="let website of websites">{{website.url}}</li>
</ul>
```
The above **\*ngFor** will print out a list of website url's. The _websites_ variable is a list of websites and we will loop of that and generate a new _<li>_ for each one in our collection. So a new _<li>_ element will be created in the DOM for each item in _websites_.

Structural directives are popular and give us added capabilities inside of our HTML. \*ngIf is perfect for showing and hiding data. \*ngFor is great when we need to generate repeated HTML.

To learn more check out the Angular documentation on [Structural Directives](https://angular.io/guide/structural-directives).
