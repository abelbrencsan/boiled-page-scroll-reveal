/**
 * Scroll reveal - v1.0.0
 * Copyright 2023 Abel Brencsan
 * Released under the MIT License
 * 
 */

var ScrollReveal = (function(){

	'use strict';

	var observer;
	var isObserverSupported = false;
	var options = {
		threshold: 0,
		aboveViewportClass: 'above-viewport',
		belowViewportClass: 'below-viewport',
		inViewportClass: 'in-viewport',
	};

	/**
	* Initialize observer for scroll reveal. (public)
	* @param givenOptions object
	* 
	*/
	var init = function(givenOptions) {
		var observerOptions;
		if (typeof givenOptions == 'object') {
			for (var key in options) {
				if (givenOptions.hasOwnProperty(key)) {
					options[key] = givenOptions[key];
				}
			}
		}
		if ('IntersectionObserver' in window) {
			isObserverSupported = true;
			observerOptions = {
				threshold: options['threshold']
			};
			observer = new IntersectionObserver(reveal, observerOptions);
		}
	};

	/**
	* Add new element to observer. (public)
	* @param elem object
	* 
	*/
	var add = function(elem) {
		var sources;
		if (isObserverSupported) {
			observer.observe(elem);
		}
	};

	/**
	* Remove element from observer. (public)
	* @param elem object
	* 
	*/
	var remove = function(elem) {
		if (isObserverSupported) {
			observer.unobserve(elem);
		}
	};

	/**
	* Handle observer entries which enter the document viewport. (private)
	* @param observerEntries object
	* 
	*/
	var reveal = function(observerEntries) {
		var sources, isAboveViewport;
		if (navigator.onLine) {
			for (var i = 0; i < observerEntries.length; i++) {
				if (observerEntries[i].intersectionRatio >= 0) {
					isAboveViewport = (observerEntries[i].boundingClientRect.top > 0);
					handleIntersection(observerEntries[i].target, observerEntries[i].isIntersecting, isAboveViewport);
				}
			}
		}
	};

	/**
	* Add or remove classes for revealing. (private)
	* @param elem object
	* @param isIntersecting bool
	* @param isAboveViewport bool
	* 
	*/
	var handleIntersection = function(elem, isIntersecting, isAboveViewport) {
		if (isAboveViewport) {
			elem.classList.add(options.aboveViewportClass);
			elem.classList.remove(options.belowViewportClass);
		}
		else {
			elem.classList.add(options.belowViewportClass);
			elem.classList.remove(options.aboveViewportClass);
		}
		if (isIntersecting) {
			elem.classList.add(options.inViewportClass);
		}
		else {
			elem.classList.remove(options.inViewportClass);
		}
	};

	return {
		init: init,
		add: add,
		remove: remove
	};

})();