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

                scope.toggleArrow = () => {
                  if ( !scope.arrowAnimate ) {
                      scope.arrowAnimate = 'dropdown-box-active';
                  }
                  else {
                    scope.arrowAnimate = '';
                  }
                };



                elem.find( 'h3' ).on( 'click', function() {
                  elem[ 0 ].scrollIntoView();
                } );

                const examplesListWrapper = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ) );

                const nextButton = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper-show-more' ) );
                const prevButton = angular.element( elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper-show-previous' ) );
                const dropdownBoxArrowButton = angular.element( elem[ 0 ].querySelector( '.cp-result-arrow-text' ) );
                const dropdownBoxArrowButtonSB = angular.element( elem[ 0 ].querySelector( '.song-builder-prog-arrow-text' ) );
                const probabilityButton = angular.element( elem[ 0 ].querySelector( '.next-chord-finder-probability-wrapper' ) );

                nextButton.on( 'click', () => {
                  elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ).scrollTop = 0;
                  elem[ 0 ].scrollIntoView( { behavior: 'smooth' } );
                } );

                prevButton.on( 'click', () => {
                  elem[ 0 ].querySelector( '.cp-result-examples-list-wrapper' ).scrollTop = 0;
                  elem[ 0 ].scrollIntoView( { behavior: 'smooth' } );
                } );

                dropdownBoxArrowButton.on( 'click', () => {
                  scope.toggleArrow();
                  scope.toggleDropdownBox();
                  scope.pageNumber = 2;
                } );

                dropdownBoxArrowButtonSB.on( 'click', () => {
                  scope.toggleArrow();
                  scope.toggleDropdownBox();
                  scope.pageNumber = 2;
                } );

            }
    }
  } );
