angular.module( 'perfectChordsApp' )
    .directive( 'cpResult', function() {
        return {
            templateUrl: function( elem, attr ) {
              if ( attr.type === 'cp-results' ) {
                return './features/cp-results/cp-result-directive-tmpl.html'
              }
              else if ( attr.type === 'favorites' ) {
                return './features/song-builder/song-builder-prog-directive-tmpl.html'
              }
            }
            , restrict: 'EA'
            , replace: true
            , scope: {
                  chordProg: '='
                  , prog: '='
              }
            , controller: 'cpResultCtrl'
            , link: function( scope, elem, attr ) {
                scope.toggleDropdownBox = function() {
                  scope.isDropdownBoxActive = !scope.isDropdownBoxActive;
                };

                elem.find( 'h3' ).on( 'click', function() {
                  elem[ 0 ].scrollIntoView();
                } );

                var examplesListWrapper = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ) );

                var nextButton = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper-show-more' ) );
                var prevButton = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper-show-previous' ) );

                nextButton.on( 'click', function() {
                  elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ).scrollTop = 0;
                  elem[ 0 ].scrollIntoView( { behavior: 'smooth' } );
                } );

                prevButton.on( 'click', function() {
                  elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ).scrollTop = 0;
                  elem[ 0 ].scrollIntoView( { behavior: 'smooth' } );
                } );

            }
    }
  } );
