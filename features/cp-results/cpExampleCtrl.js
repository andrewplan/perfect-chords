angular.module( 'perfectChordsApp' )
    .controller( 'cpExampleCtrl', function( $scope, userService ) {
          $scope.isDropdownBoxActive = false;

          $scope.addExampleToFavorites = ( example, progName, $event ) => {
              $event.preventDefault();
              userService.addExampleToFavorites( example, progName );
          };

          $scope.removeExampleFromFavorites = ( example, $event ) => {
            $event.preventDefault();
            userService.removeExampleFromFavorites( example );
          };
      } )
