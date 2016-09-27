angular.module( 'perfectChordsApp' )
    .controller( 'cpResultCtrl', function( $scope, $state, $location, $anchorScroll, resultsService, userService ) {
        $scope.isDropdownBoxActive = false;
        $scope.isDefaultArrowTextActive = true;

        $scope.getSongExamples = ( chordProg, $event, pageNumber ) => {
          $event.preventDefault();
          resultsService
            .getSongExamples( chordProg )
            .then( function( results ) {
                $scope.examples = results;
                $scope.pageNumber = 2;
            } );
        };

        $scope.getMoreSongExamples = ( chordProg, $event, pageNumber ) => {
          $event.preventDefault();
          resultsService
            .getSongExamples( chordProg, pageNumber )
            .then( function( results ) {
                $scope.examples = results;
                $scope.pageNumber++;
                console.log( $scope.pageNumber );
            } );
        };

        $scope.getPreviousSongExamples = ( chordProg, $event, pageNumber ) => {
          $event.preventDefault();
          resultsService
            .getSongExamples( chordProg, pageNumber )
            .then( ( results ) => {
                $scope.examples = results;
                if ( $scope.pageNumber >= 2 ) {
                  $scope.pageNumber--;
                }
                else {
                  $scope.isPreviousExamplesButtonActive = false;
                }
                console.log( $scope.pageNumber );
            } );
        };

        $scope.addProgToFavorites = ( chordProg, $event ) => {
            $event.preventDefault();
            userService.addProgToFavorites( chordProg );
        };

        $scope.removeProgFromFavorites = ( chordProg, $event ) => {
            $event.preventDefault();
            userService.removeProgFromFavorites( chordProg );
        };


} );
