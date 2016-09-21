angular.module( 'perfectChordsApp' )
    .directive( 'songBuilderExample', function() {
        return {
            templateUrl: function( elem, attr ) {
              if ( attr.type === 'separate-example' ) {
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
            , controller: 'cpResultCtrl'
            , link: function( scope, elem, attr ) {
                scope.songInfoSeparateExample = angular.element( elem[ 0 ].querySelector( '.song-builder-example-song-info') );

                scope.toggleDropdownBox = function() {
                  scope.isDropdownBoxActive = !scope.isDropdownBoxActive;
                };

                scope.songInfoSeparateExample.on( 'click', function() {
                  scope.songInfoSeparateExample.parent().parent().find( 'section' ).html(
                    '<iframe src="' + scope.example.url + '"' + '></iframe>'
                  )
                } );

                scope.songInfoNestedExample = angular.element( elem[ 0 ].querySelector( '.song-builder-prog-example-song-info' ) );
                scope.progName = elem.parent().parent().parent().find( 'h3' ).text().replace(' ', '');

                scope.songInfoNestedExample.on( 'click', function() {
                    elem.parent().parent().find( 'section' ).html(
                        '<iframe src="' + scope.example.url + '"' + '></iframe>'
                    );
                } );
              }
        };
    } );
