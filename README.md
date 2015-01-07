Country select for AngularJS
======================

A simple AngularJS directive to create country select. It uses Twitter [typeahead.js](http://twitter.github.io/typeahead.js/) to create auto-complete country select. Country data is from [mledoze/countries](https://github.com/mledoze/countries).

### Usage

Make your Angular module depend on module `angular-country-select`.

```javascript
angular.module('countrySelectExample', ['angular-country-select']);
```

Then use directive `country-select`.

```html
<input country-select type="text">
```

See `example.html` for a simple example.
