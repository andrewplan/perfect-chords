angular.module( 'perfectChordsApp' )
    .directive( 'cpResult', function() {
        return {
            templateUrl: ( elem, attr ) => {
              if ( attr.type === 'cp-results' ) {
                return './features/cp-results/cp-result-directive-tmpl.html'
              }
              else if ( attr.type === 'favorites' ) {
                return './features/song-builder/song-builder-prog-directive-tmpl.html'
              }
              else if ( attr.type === 'next-chord-finder' ) {
                return './features/next-chord-finder/next-chord-finder-result-directive-tmpl.html'
              }
            }
            , restrict: 'EA'
            , replace: true
            , scope: {
                  chordProg: '='
                  , prog: '='
              }
            , controller: 'cpResultCtrl'
            , link: ( scope, elem, attr ) => {
                scope.toggleDropdownBox = function() {
                  scope.isDropdownBoxActive = !scope.isDropdownBoxActive;
                };

                elem.find( 'h3' ).on( 'click', function() {
                  elem[ 0 ].scrollIntoView();
                } );

                const examplesListWrapper = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ) );

                const nextButton = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper-show-more' ) );
                const prevButton = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper-show-previous' ) );

                nextButton.on( 'click', () => {
                  elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ).scrollTop = 0;
                  elem[ 0 ].scrollIntoView( { behavior: 'smooth' } );
                } );

                prevButton.on( 'click', () => {
                  elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ).scrollTop = 0;
                  elem[ 0 ].scrollIntoView( { behavior: 'smooth' } );
                } );

            }
    }
  } );
