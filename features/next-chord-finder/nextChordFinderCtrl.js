angular.module( 'perfectChordsApp' )
    .controller( 'nextChordFinderCtrl', function( $scope, resultsService, userService ) {

        $scope.getChordProgressions =  chordProg => {
            resultsService.getChordProgressions( chordProg )
                .then( results => {
                  $scope.chordProgressions = results;
                  console.log( $scope.chordProgressions );
                } )
        }

        $scope.progressionHTML = '';

        $scope.addToProgressionHTML = chord_html => {
            if ( $scope.progressionHTML === '' ) {
              $scope.progressionHTML = chord_html;
            }
            else {
              $scope.progressionHTML = $scope.progressionHTML.concat( '-' + chord_html );
            }
        };

        $scope.modes = resultsService.getModes();

    } )
