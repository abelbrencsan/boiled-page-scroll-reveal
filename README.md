# Boiled Page scroll reveal script

A super simple, observer-based JavaScript module for Boiled Page frontend framework to handle on-scroll animations.

## Install

Place `scroll-reveal.js` to `/assets/js` directory and add its path to `scripts` variable in `build.py` to be combined with other scripts.

## Usage

To initialize scroll reveal, call `init()` method the following way:

```js
// Initialize lazy images
ScrollReveal.init(options);
```

## Methods

### Initialize scroll reveal

`init(options)` - Initialize observer for scroll reveal.

Parameter | Type | Required | Description
----------|------|----------|------------
`options` | Object | Yes | Options

Available properties for `options` object:

Option| Type | Default | Required | Description
------|------|---------|----------|------------
`threshold` | Number | 0 | No | A number between 0 and 1 that indicates at what percentage of the element's visibility classes should be added.
`aboveViewportClass` | String | 'above-viewport' | No | Class added when viewport is above element.
`belowViewportClass` | String | 'below-viewport' | No | Class added when viewport is below element.
`inViewportClass` | String | 'in-viewport' | No | Class added when element is in viewport.

### Add new element

`add(elem)` - Add new element to observer.

Parameter | Type | Required | Description
----------|------|----------|------------
`elem` | Object | Yes | Element which scroll reveal is applied to.

### Remove element

`remove(elem)` - Remove element from observer.

Parameter | Type | Required | Description
----------|------|----------|------------
`elem` | Object | Yes | Element which scroll reveal is applied to.

## Add elements with HTML attributes

Place the following code inside `assets/js/app.js` to initialize scroll reveal:

```js
ScrollReveal.init();
```

Place the following code after initialization to add elements with `data-scroll-reveal` attribute.

```js
var scrollRevealElems = document.querySelectorAll('[data-scroll-reveal]');
for (var i = 0; i < scrollRevealElems.length; i++) {
  ScrollReveal.add(scrollRevealElems[i])
}
```