angular.module( 'perfectChordsApp' )
    .controller( 'songBuilderCtrl', function( $scope, userService, dragulaService ) {
        $scope.progFavorites = userService.getProgFavorites();
        $scope.exampleFavorites = userService.getExampleFavorites();
    } );
