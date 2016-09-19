angular.module( 'perfectChordsApp' )
    .controller( 'signInCtrl', function( $scope, userService ) {
        $scope.signIn = function( email, password ) {
          userService.signInWithEmailAndPassword( email, password );
        };
        $scope.firebaseUser = userService.userInfo();
    }  )
