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
            }
    }
  } );
