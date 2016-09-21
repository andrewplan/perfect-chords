angular.module( 'perfectChordsApp' )
    .service( 'resultsService', function( $http, $firebaseArray ) {

        var baseUrl = 'https://api.hooktheory.com/v1/';
        var chordProgDatabase = $firebaseArray( firebase.database().ref().child( 'chord_prog_database' ) );

        /***** code to hook into Hooktheory API *****/
        this.getSongExamples = function( chordProg, pageNumber ) {

          if ( pageNumber ) {
            return $http(
                    {
                    'url': baseUrl + 'trends/songs?cp=' + chordProg + '&page=' + pageNumber
                    , 'method': "GET"
                    , 'headers': {
                      "authorization": "Bearer 242d9571482d3a77b8f00efb38f9cf50"
                      , "accept": "application/json"
                      , "content-type": "application/json"
                    }
                  }
                ).then( function( response ) {
                    if ( response.status === 200 ) {
                      console.log( "pageNumber exists, equals " + pageNumber  + response );
                      return response.data;
                    }
                    console.log( 'Error: ' + response.error );
                } );
            }
            return $http(
                    {
                    'url': baseUrl + 'trends/songs?cp=' + chordProg
                    , 'method': "GET"
                    , 'headers': {
                      "authorization": "Bearer 242d9571482d3a77b8f00efb38f9cf50"
                      , "accept": "application/json"
                      , "content-type": "application/json"
                    }
                  }
                ).then( function( response ) {
                    if ( response.status === 200 ) {
                      console.log( "No pageNumber. " + response.data );
                      return response.data;
                    }
                    console.log( 'Error: ' + response.error );
                } );

        };

        this.getChordProgDatabase = function() {
          return chordProgDatabase;
        };

        // this.getChordProgDatabase = function() {
        //   return firebase.database()
        //     .ref()
        //     .child( 'chord_prog_database' )
        //     .once( 'value' )
        //     .then( function( snapshot ) {
        //       var chordProgDatabaseObj = snapshot.val();
        //       console.log( chordProgDatabaseObj );
        //       for( var i = 0; i < chordProgDatabaseObj.length; i++ ) {
        //         chordProgDatabaseArray.push( angular.fromJson( chordProgDatabaseObj[ i ] ) );
        //       }
        //       console.log( chordProgDatabaseArray );
        //       return chordProgDatabaseArray;
        //     } );
        //
        // };
    } )
