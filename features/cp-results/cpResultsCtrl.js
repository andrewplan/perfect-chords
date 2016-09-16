angular.module( 'perfectChordsApp' )
    .controller( 'cpResultsCtrl', function( $scope, resultsService ) {

        $scope.chordProgDatabase = resultsService.getChordProgDatabase();
        $scope.isDropdownBoxActive = false;
        /***** code for when Hooktheory API starts working *****/
} );
