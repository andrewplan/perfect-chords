angular.module( 'perfectChordsApp' )
    .controller( 'cpExampleCtrl', function( $scope, userService ) {
          $scope.isDropdownBoxActive = false;

          $scope.addExampleToFavorites = ( example, progName, $event ) => {
              $event.preventDefault();
              userService.addExampleToFavorites(
                {
                  'song': example.song
                  , 'artist': example.artist
                  , 'section': example.section
                  , 'url': example.url
                  , 'progression': progName
                  , 'notes': ''
                }
              );
          };

          $scope.removeExampleFromFavorites = ( example, $event ) => {
            $event.preventDefault();
            userService.removeExampleFromFavorites( example );
          };
      } )
