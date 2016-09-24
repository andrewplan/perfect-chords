angular.module( 'perfectChordsApp' )
    .directive( 'modeButtonsWrapper', function() {
        return {
            templateUrl: './features/next-chord-finder/mode-buttons-wrapper-directive-tmpl.html'
            , restrict: 'EA'
            , controller: 'nextChordFinderCtrl'
            , scope: {
                mode: '='
            }
        }
    } )
