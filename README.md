## Overview

This is a scrolling service for AngularJS. There is no jQuery required. It will replicate the feel of using .animate() in jQuery. This will scroll the window only.

## Code Example

Inject into directive as such:

```
app.directive("stickyHeader", function (smoothScroll) {
    //directive code
});
```

Code snippet: 

```
var pos = document.getElementById("myElement").offsetTop
smoothScroll(pos, null, function () {
    //my callback after scroll complete
});
```

Arguments:

```
smoothScroll(position, timeToScroll, callback)
```

````
position: number of position for the window to be scrolled to (required)

timeToScroll: time taken to scroll to element position (optional: default 500ms)

callback: what to do when done with scroll (optional)
```

## Installation

You just need to add this .js file under your initial AngularJS instance.

```
<script src="../angular-1.5.7.min.js"></script>
<script src="../angular-smooth-scroll.js"></script>
```
