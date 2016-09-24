angular.module( 'perfectChordsApp' )
    .directive( 'chordButton', function() {
        return {
            templateUrl: './features/next-chord-finder/chord-button-directive-tmpl.html'
            , restrict: 'EA'
            , controller: 'nextChordFinderCtrl'
            , scope: {
                chord: '='
            }
        }
    } )
