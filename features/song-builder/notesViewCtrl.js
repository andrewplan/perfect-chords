angular.module( 'perfectChordsApp' )
    .controller( 'notesViewCtrl', function( $scope, $stateParams ) {
        console.log( $stateParams.prog );
        $scope.prog = $stateParams.prog;
    } )
