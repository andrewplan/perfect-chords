angular.module( 'perfectChordsApp' )
    .controller( 'signInCtrl', function( $scope, userService ) {
        $scope.signIn = function( email, password ) {
          $scope.firebaseUser = userService.signInWithEmailAndPassword( email, password );
        };

    }  )
