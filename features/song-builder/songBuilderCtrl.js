angular.module( 'perfectChordsApp' )
    .controller( 'songBuilderCtrl', function( $scope, userService, dragulaService ) {

        $scope.firebaseUser = userService.userInfo();

        $scope.progFavorites = userService.getProgFavorites();

        $scope.exampleFavorites = userService.getExampleFavorites();

    } );
