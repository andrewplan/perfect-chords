angular.module( 'perfectChordsApp' )
    .controller( 'cpResultCtrl', function( $scope, resultsService, userService ) {
        $scope.isDropdownBoxActive = false;

        $scope.getSongExamples = function( chordProg, $event ) {
          $event.preventDefault();
          resultsService
            .getSongExamples( chordProg )
            .then( function( results ) {
                $scope.examples = results;
                console.log( $scope.examples );
            } );
        };

        $scope.addProgToFavorites = function( chordProg, $event ) {
            $event.preventDefault();
            userService.addProgToFavorites( chordProg );
        };

        $scope.removeProgFromFavorites = function( chordProg, $event ) {
            $event.preventDefault();
            userService.removeProgFromFavorites( chordProg );
        };
} );
