angular.module( 'perfectChordsApp' )
    .controller( 'cpResultCtrl', function( $scope, $location, $anchorScroll, resultsService, userService ) {
        $scope.isDropdownBoxActive = false;
        $scope.pageNumber = 2;
        $scope.isPreviousExamplesButtonActive = false;

        $scope.getSongExamples = function( chordProg, $event, pageNumber ) {
          $event.preventDefault();
          resultsService
            .getSongExamples( chordProg, pageNumber )
            .then( function( results ) {
                $scope.examples = results;
                $scope.pageNumber++;
            } );
        };

        $scope.getPreviousSongExamples = function( chordProg, $event, pageNumber ) {
          $event.preventDefault();
          if ( $scope.pageNumber >= 2 ) {
            $scope.pageNumber--;
          }
          else {
            $scope.isPreviousExamplesButtonActive = false;
          }
          resultsService
            .getSongExamples( chordProg, pageNumber )
            .then( function( results ) {
                $scope.examples = results;
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
