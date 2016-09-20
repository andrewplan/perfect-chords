angular.module( 'perfectChordsApp' )
    .controller( 'registerCtrl', function( $scope, userService ) {
        $scope.createAccount = function( email, password ) {
            userService.createUserWithEmailAndPassword( email, password );
        };
    } )
