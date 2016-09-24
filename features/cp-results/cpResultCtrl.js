angular.module( 'perfectChordsApp' )
    .controller( 'cpResultCtrl', function( $scope, $location, $anchorScroll, resultsService, userService ) {
        $scope.isDropdownBoxActive = false;
        $scope.pageNumber = 2;

        $scope.getSongExamples = ( chordProg, $event, pageNumber ) => {
          console.log( chordProg );
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
          if ( $scope.pageNumber >= 2 ) {
            $scope.pageNumber--;
          }
          else {
            $scope.isPreviousExamplesButtonActive = false;
          }
          resultsService
            .getSongExamples( chordProg, pageNumber )
            .then( ( results ) => {
                $scope.examples = results;
                console.log( $scope.pageNumber );
            } );
        };

        $scope.addProgToFavorites = ( chordProg, $event ) => {
            $event.preventDefault();
            if ( chordProg.hasOwnProperty( 'child_path' ) ) {
              chordProg.progression = chordProg.child_path;
              chordProg.prog_html = chordProg.child_path;
            }
            userService.addProgToFavorites( chordProg );
        };

        $scope.removeProgFromFavorites = ( chordProg, $event ) => {
            $event.preventDefault();
            userService.removeProgFromFavorites( chordProg );
        };

        $scope.addExampleToFavorites = ( example, progName, $event ) => {
            $event.preventDefault();
            userService.addExampleToFavorites(
              {
                'song': example.song
                , 'artist': example.artist
                , 'section': example.section
                , 'url': example.url
                , 'progression': progName
                , 'notes': ''
              }
            );
        };

        $scope.removeExampleFromFavorites = ( example, $event ) => {
          $event.preventDefault();
          userService.removeExampleFromFavorites( example );
        };
} );
