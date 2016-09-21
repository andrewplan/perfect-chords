angular.module( 'perfectChordsApp' )
    .controller( 'cpResultsViewCtrl', function( $scope, userService, resultsService ) {
        $scope.chordProgDatabase = resultsService.getChordProgDatabase();

} );
