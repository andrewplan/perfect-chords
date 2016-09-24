angular.module( 'perfectChordsApp' )
    .directive( 'chordButton', function( resultsService ) {
        return {
            templateUrl: './features/next-chord-finder/chord-button-directive-tmpl.html'
            , restrict: 'EA'
            , controller: 'nextChordFinderCtrl'
            , scope: {
                chord: '='
            }
            , link ( scope, elem, attr ) {

                scope.progressionDisplay = elem.parent().parent().parent().parent().parent().find( 'h2' );

                elem.on( 'click', function() {
                    console.log( scope.progressionDisplay.text() );
                    if ( !scope.progressionDisplay.text() ) {
                      elem.parent().parent().parent().parent().parent().find( 'h2' ).text( scope.chord.chord_html );
                    }
                    else {
                      elem.parent().parent().parent().parent().parent().find( 'h2' ).append( '<span> - </span>' + scope.chord.chord_html );
                    }

                    resultsService.addToChordProgHTMLArray( scope.chord.chord_html );
                    resultsService.addToChordProgArray( scope.chord.keystrokes );
                } );

            }
        }
    } )
