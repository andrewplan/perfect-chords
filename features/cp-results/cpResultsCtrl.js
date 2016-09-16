angular.module( 'perfectChordsApp' )
    .controller( 'cpResultsCtrl', function( $scope, resultsService ) {
        $scope.results1564 = resultsService.getSongExamples1564();
        $scope.results1245 = resultsService.getSongExamples1245();


        /***** code for when Hooktheory API starts working *****/
        // $scope.getResults = function() {
        //   resultsService
        //     .getSongExamples()
        //     .then( function( results ) {
        //         $scope.results = results;
        //         console.log( $scope.results );
        //     } );
        // }
        //
        // $scope.getResults();
} );
