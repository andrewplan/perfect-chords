angular.module( 'perfectChordsApp' )
    .directive( 'cpExample', function() {
        return {
            templateUrl: './features/cp-results/cp-example-directive-tmpl.html'
            , restrict: 'EA'
            , require: '^cpResult'
            , replace: true
            , scope: {
                  example: '='
              }
            , controller: function( $scope, userService ) {
                  $scope.addExampleToFavorites = function( example, progName, $event ) {
                      $event.preventDefault();
                      userService.addExampleToFavorites(
                        {
                          'song': example.song
                          , 'artist': example.artist
                          , 'section': example.section
                          , 'url': example.url
                          , 'progression': progName
                        }
                      )
                  }
              }
            , link: function( scope, elem, attr ) {
                  scope.progName = elem.parent().parent().parent().find( 'h3' ).text().replace(' ', '');

                  scope.songInfo = angular.element( elem[ 0 ].querySelector( '.cp-result-example-song-info' ) );

                  scope.songInfo.on( 'click', function() {
                      elem.parent().parent().find( 'section' ).html(
                          '<iframe src="' + scope.example.url.replace(/http/gi, 'https') + '"' + '></iframe>'
                      );
                  } );
              }
        };
    } );
