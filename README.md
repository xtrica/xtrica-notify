# Xtrica Notify: A javascript class for sending notifications / alerts to multiple containers at the same time, on the same page, styled however.

A new instance is constructed with a single parameter: `(HTMLElement: parentContainer)`.

An instance has two methods:
- `notify(string: html, string: cssClassNames, number: durationMilliseconds)`, which returns a promise once the notification has been displayed for the target duration.
- `cleanup()` which removes elements created by this class in the DOM.

**Notes:**
- *Multiple instances can be very useful.*
- *Before destroying an instance, you must call `.cleanup()` to avoid memory leaks.* Example in VueJS: `beforeDestroy () { this.notifyA.cleanup() }`

## Example usage within a Node.JS dev environment

**Javascript:**
```javascript
var XtricaNotify = require('xtrica-notify').default
var notificationsA = new XtricaNotify(document.getElementById('notificationContainerA'))
var notificationsB = new XtricaNotify(document.getElementById('notificationContainerB'))
var notificationsC = new XtricaNotify(document.getElementById('notificationContainerC'))
var showSomeAlerts = function () {
  notificationsA.notify('Oops!', 'alert danger', 6000).then(() => {
    notificationsB.notify('<p>asdfsdf</p>', '', 6000)
  })
  notificationsC.notify('Yay!', 'littlebox abcdefg', 4000)
}
```

**HTML:**
```html
<div id="notificationContainerA"></div>
<div id="notificationContainerB"></div>
<span id="notificationContainerC"></span>
<button onclick="showSomeNotifications()">click me</button>
```

**Custom CSS:**
```css
<style>
.alert.danger {
  background-color: #ff0000;
  color: #ffffff;
  display: block;
  padding: 6px;
  width: 100%;
}
.littlebox.abcdefg {
  background-color: #00ff00;
  color: #000000;
  display: inline-block;
  padding: 3px;
  width: auto;
}
</style>
```