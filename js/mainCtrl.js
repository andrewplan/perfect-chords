angular.module( 'perfectChordsApp' )
    .controller( 'mainCtrl', function( $scope, $firebaseAuth, $state, userService ) {



        $scope.authObj = $firebaseAuth();

        $scope.authObj.$onAuthStateChanged( function( firebaseUser ) {
          if ( firebaseUser ) {
            console.log( 'Signed in as: ', firebaseUser.uid, firebaseUser );
            $scope.firebaseUser = firebaseUser;
            userService.setFirebaseUser( firebaseUser );
          }
          else {
            console.log( 'Signed out' );
            $scope.firebaseUser = null;
            localStorage.progFavorites = '';
            $state.go( 'home-page' );
          }
        } );


    } )
