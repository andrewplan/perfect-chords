angular.module( 'perfectChordsApp' )
    .controller( 'cpResultCtrl', function( $scope, resultsService ) {

        $scope.isDropdownBoxActive = false;
        /***** code for when Hooktheory API starts working *****/
        $scope.getSongExamples = function( chordProg, $event ) {
          $event.preventDefault();
          resultsService
            .getSongExamples( chordProg )
            .then( function( results ) {
                $scope.results = results;
                console.log( $scope.results );
            } );
        };

} );
