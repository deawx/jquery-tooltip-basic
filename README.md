# jQuery Tooltip Basic
A basic tooltip plugin for jQuery

## Demo
[View Demo](http://rencs.com/demo/jquery-tooltip-basic/)

## Usage
### Getting Started
* Download the latest stable release from here or install `jquery-tooltip-basic` from npm.
```bash
npm install jquery-tooltip-basic
```
* Add the JavaScript and CSS file references to your web site.
* Select the elements you want to show tooltips for.
* Run the *tooltip()* method on those elements with the options you want.

### Initialization
The basic initialization example:
```js
$(document).ready(function() {
  $("#element").tooltip({
      value: 'A simple tooltip text for the #element to show on hover.'
  });
});
```

Initialization example with all options set:
```js
$(document).ready(function() {
  $("#element").tooltip({
    animation: 'fade',
    class: 'green',
    position: 'top',
    type: 'html',
    value: 'Another simple tooltip text for the #element to show on hover.',
    width: '20em',
    weight: 'bold'
  });
});
```

## Plugin Options
- `animation`: Animation effect of the tooltip. Options are `none`, `fade`, `shake`. Default is `none`.
- `class`: CSS class name to add to the tooltip. Options are `default`, `green`, `blue`. Default is `default`.
- `position`: Position of the tooltip. Options are `right`, `left`, `top`, `bottom`. Default is `right`.
- `type`: Type of the tooltip source. Default is `html`. Options are:
  - `html`: Shows directly the HTML code
  - `url`: Shows the url in an iframe element
  - `selector`: Shows the content of an ID or a class
  - `function`: Shows the every result of the given javascript function
  - `functionOnce`: Shows the first result of the given javascript function
- `value`: Tooltip source value. Can be HTML text, url link or a selector. Default is an empty string: `''`.
- `width`: Tooltip width. Must be a valid CSS unit like `200px`, `10em` etc. Default is `200px`.
- `weight`: Font weight of the link. Options are: `normal`, `bold`, `italic`. Default is `bold`.

## Development
After cloning the repo and making your changes, you can use `gulp` command to minify/uglify js and css files.

## Reporting Bugs
For bug reports, questions, feature requests, or other suggestions the best way to contact me is to [create an issue][newissue] on GitHub.

[newissue]: https://github.com/pemre/jquery-tooltip-basic/issues/new

## Contributor Guide
Make the plugin better! Join the [contributors] today by submitting a patch! The best way to submit patches is to [fork this project][fork] on GitHub and submit a pull request. But if you are unwilling or unable to use GitHub I will accept patches in any way you can get them to me (JSFiddle, Pastebin, text file, whatever).

[contributors]: https://github.com/pemre/jquery-tooltip-basic/graphs/contributors
[fork]: https://github.com/pemre/jquery-tooltip-basic/fork

## References
Thanks to these valuable sources, I could start this project.

- CSS Tooltip Basics - http://www.w3schools.com/css/css_tooltip.asp
- “Shake” CSS Keyframe Animation - https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
- jQuery plugin development - http://beltslib.net/jquery-eklentisi-yazmak.html