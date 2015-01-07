angular.module('angular-country-select', [])
  .directive('countrySelect', [function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var countries = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          limit: 10,
          remote: {
            url: '../data/countries.json',
            filter: function(countries) {
              return $.map(countries, function(country) {
                return {
                  name: country.name.common
                };
              });
            }
          }
        });

        countries.initialize();
        
        elem.typeahead(null, {
          name: 'countries',
          displayKey: 'name',
          source: countries.ttAdapter()
        });
      }
    };
  }]);
