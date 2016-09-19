angular.module( 'perfectChordsApp' )
    .controller( 'homePageCtrl', function( $scope, userService ) {
        $scope.firebaseUser = userService.userInfo();
    } )
