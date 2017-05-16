/**
 * jQuery Tooltip Basic
 *
 * @fileoverview  Plugin object
 * @link          https://github.com/pemre/jquery-tooltip-basic/
 * @author        Emre Piskin (http://rencs.com/)
 * @requires      jQuery 1.12.4+
 *
 * References:
 * -- CSS Tooltip Basics - http://www.w3schools.com/css/css_tooltip.asp
 * -- “Shake” CSS Keyframe Animation - https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
 * -- jQuery plugin development - http://beltslib.net/jquery-eklentisi-yazmak.html
 */

(function($) {
    "use strict";

    $.fn.tooltip = function(param) {

        // DEFAULT VARIABLES
        var params = $.extend({
            animation: 'none',      // tooltip animation:       none, fade, shake
            class: 'default',       // tooltip color:           default, green, blue
            position: 'right',      // tooltip position:        right, left, top, bottom
            type: 'html',           // tooltip source:          html, url (iframe),
                                    //                          selector (ID/class),
                                    //                          function (show javascript result on every hover),
                                    //                          functionOnce (show javascript result one time only)
            value: '',              // tooltip source value:    text, url link or a selector value
            width: '200px',         // tooltip width:           a valid CSS unit like '200px', '10em' etc.
            weight: 'bold'          // font weight of the link: normal, bold, italic
        }, param);

        // Add necessary classes/elements
        this.addClass("tooltip")
            .css({'font-weight': params.weight});                   // Apply font weight of the link
        $('<span class="tooltiptext"></span>').appendTo(this);      // Add tooltip container

        // Prevent multiple query selections, select recently added .tooltiptext container
        var child = this.children().first();

        // FILL THE TOOLTIP BY TYPE
        if (params.type == 'url')                   // Fill the tooltip with the given url (iframe)
            $('<iframe src="' + params.value + '" frameborder="0" scrolling="yes"></iframe>').appendTo(child);
        else if (params.type == 'selector')         // Fill the tooltip with selected ID or class
            child.html($(params.value).html());
        else if (params.type == 'function')         // Fill the tooltip with the return value of the javascript function (on hover)
            this.hover(function() { child.html(window[params.value]()); });
        else if (params.type == 'functionOnce')     // Fill the tooltip with the return value of the javascript function (once)
            child.html(window[params.value]());
        else                                        // Fill the tooltip with html
            child.html(params.value);

        // Define position and width of the tooltip
        child
            .addClass('t' + params.position)
            .css({'width': params.width});

        // Left-right position of 'top'/'bottom' tooltips
        if (params.position == 'top' || params.position == 'bottom') {
            var width = params.width;
            var unit = width.slice(-2);
            width = width.substring(0, width.length-2);
            child.css({'margin-left': -width/2 + unit});
        }

        // Calculate the top position of filled 'left'/'right' tooltips
        if (params.position == 'left' || params.position == 'right') {
            var height = 0;
            if (params.type == 'selector')
                height = $(params.value).height();
            else
                height = child.height();
            child.css({'top': -height/2});
        }

        // Optional CSS classes
        if (params.class != 'default') {
            this.addClass(params.class);
        }

        // Animation
        if (params.animation != 'none') {
            this.addClass("tooltip-anim-" + params.animation);
        }

        // Don't breake jQuery chain!
        return this;
    }
})(jQuery);
