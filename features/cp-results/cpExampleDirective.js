angular.module( 'perfectChordsApp' )
    .directive( 'cpExample', function() {
        return {
            templateUrl: ( elem, attr ) => {
              if ( attr.type === 'result-example' ) {
                return './features/cp-results/cp-example-directive-tmpl.html'
              }
              else if ( attr.type === 'separate-example' ) {
                return './features/song-builder/song-builder-example-directive-tmpl.html';
              }
              else if ( attr.type === 'nested-example' ) {
                return './features/song-builder/song-builder-prog-example-directive-tmpl.html'
              }
            }
            , restrict: 'EA'
            , replace: true
            , scope: {
                  example: '='
                  , type: '='
              }
            , controller: 'cpExampleCtrl'
            , link: ( scope, elem, attr ) => {
                  // scope.progName = elem.parent().parent().parent().find( 'h3' ).text().replace(' ', '');

                  scope.songInfoResultExample = angular.element( elem[ 0 ].querySelector( '.cp-result-example-song-info' ) );

                  scope.songInfoResultExample.on( 'click', () => {
                      elem.parent().parent().find( 'section' ).html(
                          '<iframe src="' + scope.example.url.replace(/http/gi, 'https') + '"' + '></iframe>'
                      );
                  } );

                  scope.songInfoSeparateExample = angular.element( elem[ 0 ].querySelector( '.song-builder-example-song-info') );

                  scope.toggleDropdownBox = () => {
                    scope.isDropdownBoxActive = !scope.isDropdownBoxActive;
                  };

                  scope.songInfoSeparateExample.on( 'click', () => {
                    scope.songInfoSeparateExample.parent().parent().find( 'section' ).html(
                      '<iframe src="' + scope.example.url + '"' + '></iframe>'
                    );
                  } );

                  scope.songInfoNestedExample = angular.element( elem[ 0 ].querySelector( '.song-builder-prog-example-song-info' ) );
                  scope.progName = elem.parent().parent().parent().find( 'h3' ).text().replace(' ', '');

                  scope.songInfoNestedExample.on( 'click', () => {
                      elem.parent().parent().find( 'section' ).html(
                          '<iframe src="' + scope.example.url + '"' + '></iframe>'
                      );
                  } );
              }
          }
  } );
