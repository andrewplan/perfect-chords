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

        // var chordProgDatabase = [
        //   {
        //     'progression': '1,5,6,4'
        //     , 'prog_html': 'I - V - vi - IV'
        //   } ,
        //   {
        //     'progression': '1,5,6,3,4'
        //     , 'prog_html': 'I - V - vi - iii - IV'
        //   } ,
        //   {
        //     'progression': '6,5,4,5'
        //     , 'prog_html': 'vi - V - IV - V'
        //
        //   } ,
        //   {
        //     'progression': '1,6,4,5'
        //     , 'prog_html': 'I - vi - IV - V'
        //   } ,
        //   {
        //     'progression': '1,4,6,5'
        //     , 'prog_html': 'I - IV - vi - V'
        //   } ,
        //   {
        //     'progression': '1,5,4,5'
        //     , 'prog_html': 'I - V - IV - V'
        //   } ,
        //   {
        //     'progression': '1,4,6,5'
        //     , 'prog_html': 'I - IV - vi - V'
        //   } ,
        //   {
        //     'progression': '1,56,6,5'
        //     , 'prog_html': 'I - V6 - vi - V'
        //   } ,
        //   {
        //     'progression': '1,27,16,4'
        //     , 'prog_html': 'I - ii7 - I6 - IV'
        //   } ,
        //   {
        //     'progression': '1,364,6,4'
        //     , 'prog_html': 'I - iii64 - vi - IV'
        //   } ,
        //   {
        //     'progression': '4,16,5'
        //     , 'prog_html': 'IV - I6 - V'
        //   } ,
        //   {
        //     'progression': '4,16,2'
        //     , 'prog_html': 'IV - I6 - ii'
        //   } ,
        //   {
        //     'progression': '4,5,56/6,6'
        //     , 'prog_html': 'IV - V - V6/vi - vi'
        //   } ,
        //   {
        //     'progression': '1,5/6,6'
        //     , 'prog_html': 'I - V/vi - vi'
        //   } ,
        //   {
        //     'progression': '6,642,4'
        //     , 'prog_html': 'vi - vi42 - IV'
        //   } ,
        //   {
        //     'progression': '1,57/4,4'
        //     , 'prog_html': 'I - V7/IV - IV'
        //   } ,
        //   {
        //     'progression': '5,7/6,6'
        //     , 'prog_html': 'V - vii/vi - vi'
        //   } ,
        //   {
        //     'progression': '4,B4,1'
        //     , 'prog_html': 'IV - iv - I'
        //   } ,
        //   {
        //     'progression': '1,b7,4,1'
        //     , 'prog_html': 'I - bVII - IV - I'
        //   } ,
        //   {
        //     'progression': '1,B6,5'
        //     , 'prog_html': 'I - bVI - V'
        //   } ,
        //   {
        //     'progression': '1,5,4,B7,1'
        //     , 'prog_html': 'I - V - IV - bVII - I'
        //   } ,
        // ];
    } )
