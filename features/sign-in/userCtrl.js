angular.module( 'perfectChordsApp' )
    .controller( 'userCtrl', function( $scope, $state, userService ) {
        $scope.firebaseUser = userService.userInfo();
        console.log( $scope.firebaseUser );

        $scope.signIn = function( email, password ) {
          userService.signInWithEmailAndPassword( email, password );
        };

        $scope.createAccount = function( email, password ) {
            userService.createUserWithEmailAndPassword( email, password );
        };

        $scope.signOut = function() {
          userService.signOut();
          userService.clearLocalStorage();
          $state.go( 'sign-out' );
          setTimeout( function() {
            $state.go( 'home-page' );
          }, 1000 );
        };
    }  )
