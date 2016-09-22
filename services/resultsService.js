angular.module( 'perfectChordsApp' )
    .service( 'resultsService', function( $http, $firebaseArray ) {

        const baseUrl = 'https://api.hooktheory.com/v1/';
        const chordProbPath = 'trends/nodes?cp='
        const songExamplesPath = 'trends/songs?cp='
        let chordProgDatabase = $firebaseArray( firebase.database().ref().child( 'chord_prog_database' ) );

        this.getSongExamples = ( chordProg, pageNumber ) => {

          if ( pageNumber ) {
            return $http(
                    {
                    'url': baseUrl + songExamplesPath + chordProg + '&page=' + pageNumber
                    , 'method': "GET"
                    , 'headers': {
                      "authorization": "Bearer 242d9571482d3a77b8f00efb38f9cf50"
                      , "accept": "application/json"
                      , "content-type": "application/json"
                    }
                  }
                ).then( ( response ) => {
                    if ( response.status === 200 ) {
                      return response.data;
                    }
                    console.log( 'Error: ' + response.error );
                } );
            }
            return $http(
                    {
                    'url': baseUrl + songExamplesPath + chordProg
                    , 'method': "GET"
                    , 'headers': {
                      "authorization": "Bearer 242d9571482d3a77b8f00efb38f9cf50"
                      , "accept": "application/json"
                      , "content-type": "application/json"
                    }
                  }
                ).then( ( response ) => {
                    if ( response.status === 200 ) {
                      return response.data;
                    }
                    console.log( 'Error: ' + response.error );
                } );

        };

        this.getChordProgDatabase = () => { return chordProgDatabase; };

    } )
