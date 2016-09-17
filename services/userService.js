angular.module( 'perfectChordsApp' )
    .service( 'userService', function() {
        var progFavorites = [];
        var exampleFavorites = [];

        this.getProgFavorites = function() {
          return progFavorites;
        };

        this.getExampleFavorites = function() {
          return exampleFavorites;
        };

        this.addProgToFavorites = function( chordProg ) {
          if ( progFavorites.indexOf( chordProg ) !== -1 ) {
            return;
          }
          progFavorites.push( chordProg );
        };

        this.addExampleToFavorites = function( example ) {
          exampleFavorites.push( example );
        };

        this.removeProgFromFavorites = function( chordProg ) {
          for ( var i = progFavorites.length - 1; i >= 0; i-- ) {
            if ( progFavorites[ i ] === chordProg ) {
              progFavorites.splice( i, 1 );
            }
          }
        };

        this.removeExampleFromFavorites = function( example ) {
          for ( var i = exampleFavorites.length - 1; i >= 0; i-- ) {
            if ( exampleFavorites[ i ] === example ) {
              exampleFavorites.splice( i, 1 );
            }
          }
        };

    } );
