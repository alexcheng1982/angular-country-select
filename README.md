Country select for AngularJS
======================

A simple AngularJS directive to create country select. It uses Twitter [select2](http://select2.github.io/select2/) to create auto-complete country select. Country data is from [mledoze/countries](https://github.com/mledoze/countries).

### Usage

Make your Angular module depend on module `angular-country-select`.

```javascript
angular.module('countrySelectExample', ['angular-country-select']);
```

Then use directive `country-select`.

```html
<input country-select>
```

See `example.html` for a simple example.
