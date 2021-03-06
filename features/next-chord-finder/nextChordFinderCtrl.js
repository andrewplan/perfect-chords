angular.module( 'perfectChordsApp' )
    .controller( 'nextChordFinderCtrl', function( $scope, $timeout, resultsService, userService ) {

        $scope.modes = resultsService.getModes();
        $scope.isChordButtonWrapperActive = true;

        $scope.getChordProgressions = () => {
            resultsService.getChordProgressions()
                .then( results => {
                    $scope.chordProgressions = results;
                    console.log( $scope.chordProgressions );
                } );
        };

        $scope.resetNextChordSearch = () => {
            resultsService.resetNextChordSearch();
            $scope.chordProgressions = '';
            angular.element( document.querySelector( ".next-chord-finder-progression-display") ).text( 'Input your progression and discover the possibilities!' );
        };

        $scope.toggleProbArrow = () => {
          if ( !$scope.probArrowAnimate ) {
              $scope.probArrowAnimate = 'rotate-active';
          }
          else {
            $scope.probArrowAnimate = '';
          }
        };

    } )
