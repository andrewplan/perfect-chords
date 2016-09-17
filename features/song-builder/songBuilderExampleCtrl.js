angular.module( 'perfectChordsApp' )
    .controller( 'songBuilderExampleCtrl', function( $scope, userService ) {

        $scope.isDropdownBoxActive = false;

        $scope.removeExampleFromFavorites = function( example, $event ) {
          $event.preventDefault();
          userService.removeExampleFromFavorites( example );
        };

    } );
