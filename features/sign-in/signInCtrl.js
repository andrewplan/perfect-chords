angular.module( 'perfectChordsApp' )
    .controller( 'signInCtrl', function( $scope, userService, $state ) {
        $scope.signIn = function( email, password ) {
          userService.signInWithEmailAndPassword( email, password );
        };
        $scope.firebaseUser = userService.userInfo();
        $scope.signOut = function() {
          userService.signOut();
          userService.clearLocalStorage();
          $state.go( 'sign-out' );
          setTimeout( function() {
            $state.go( 'home-page' );
          }, 1000 );
        };
    }  )
