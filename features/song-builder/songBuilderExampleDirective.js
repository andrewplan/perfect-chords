angular.module( 'perfectChordsApp' )
    .directive( 'songBuilderExample', function() {
        return {
            templateUrl: './features/song-builder/song-builder-example-directive-tmpl.html'
            , restrict: 'EA'
            , replace: true
            , scope: {
                  example: '='
              }
            , controller: 'cpExampleCtrl'
            , link: function( scope, elem, attr ) {
                scope.songInfo = angular.element( elem[ 0 ].querySelector( '.song-builder-example-song-info') );

                scope.toggleDropdownBox = function() {
                  scope.isDropdownBoxActive = !scope.isDropdownBoxActive;
                };

                scope.songInfo.on( 'click', function() {
                  scope.songInfo.parent().parent().find( 'section' ).html(
                    '<iframe src="' + scope.example.url + '"' + '></iframe>'
                  )
                } )
              }
        };
    } );
