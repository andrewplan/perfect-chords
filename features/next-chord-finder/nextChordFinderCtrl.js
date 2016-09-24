angular.module( 'perfectChordsApp' )
    .controller( 'nextChordFinderCtrl', function( $scope, $timeout, resultsService, userService ) {

        $scope.modes = resultsService.getModes();

        $scope.getChordProgressions = () => {
            resultsService.getChordProgressions()
                .then( results => {
                  $scope.chordProgressions = results;
                  console.log( $scope.chordProgressions );
                } )
        };

    } )
