angular.module( 'perfectChordsApp' )
    .directive( 'cpResult', function() {
        return {
            templateUrl: './features/cp-results/cp-result-directive-tmpl.html'
            , restrict: 'EA'
            , replace: true
            , scope: {
                  chordProg: '='
              }
            , controller: 'cpResultCtrl'
            , link: function( scope, element, attributes ) {
                scope.toggleDropdownBox = function() {
                  scope.isDropdownBoxActive = !scope.isDropdownBoxActive;
                };

              //   var cpResultExample = angular.element( element[0].querySelector( 'cp-result-example-wrapper' ) );
              //   var cpResultExampleLink = angular.element( element[0].querySelector( 'cp-result-example-link' ) );
              //   var hooktheoryWebsiteWrapper = angular.element( element[0].querySelector( 'hooktheory-website-wrapper' ) );
              //
              //   cpResultExample.on( 'click', function() {
              //     alert( 'this works!' );
              //
              // } );
            }

    }
  } );
