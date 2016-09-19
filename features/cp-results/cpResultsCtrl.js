angular.module( 'perfectChordsApp' )
    .controller( 'cpResultsCtrl', function( $scope, userService, resultsService ) {
        $scope.chordProgDatabase = resultsService.getChordProgDatabase();
        $scope.isDropdownBoxActive = false;
} );
