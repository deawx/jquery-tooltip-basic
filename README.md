# jQuery Tooltip Basic
A basic tooltip plugin for jQuery

## Usage
### Initialization
Pass a ID/class name to the selector to initialize the plugin. Elements with the chosen ID/class name will be activated immediately.

```js
$(document).ready(function() {
  $("#element").tooltip({
      value: 'You <b>can</b> use <i>HTML codes<i> inside the tooltips.'
  });
});
```
