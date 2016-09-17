angular.module( 'perfectChordsApp' )
    .directive( 'songBuilderProg', function() {
        return {
            templateUrl: './features/song-builder/song-builder-prog-directive-tmpl.html'
            , restrict: 'EA'
            , replace: true
            , scope: {
                  prog: '='
              }
            , controller: 'cpResultCtrl'
            , link: function( scope, element, attributes ) {
                scope.toggleDropdownBox = function() {
                  scope.isDropdownBoxActive = !scope.isDropdownBoxActive;
                };
            }
    }
  } );
