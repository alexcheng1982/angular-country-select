angular.module('angular-country-select', [])
  .directive('countrySelect', [function() {
    return {
      restrict: 'A',
      require:'ngModel',
      link: function(scope, elem, attrs, ngModelCtrl) {
        var data = [];
        elem.select2({
          data: data
        });
        scope.$watch(attrs.ngModel, function(newValue, oldValue) {
          if (newValue) {
            elem.select2.val(newValue);
          }
        });
      }
    };
  }]);
