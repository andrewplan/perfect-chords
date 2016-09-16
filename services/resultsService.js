angular.module( 'perfectChordsApp' )
    .service( 'resultsService', function( $http ) {

        var baseUrl = 'https://api.hooktheory.com/v1/';

        /***** code to hook into Hooktheory API *****/
        this.getSongExamples = function( chordProg ) {

            var promise =
                $http(
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
                      return response.data;
                    }
                    console.log( 'Error: ' + response.error );
                } );
            return promise;
        };

        this.getChordProgDatabase = function() {
          return this.chordProgDatabase;
        }

        this.chordProgDatabase = [
          {
            'progression': '1,5,6,4'
          } ,
          {
            'progression': '1,5,6,3,4'
          } ,
          {
            'progression': '6,5,4,5'
          } ,
          {
            'progression': '1,6,4,5'
          } ,
          {
            'progression': '1,4,6,5'
          } ,
          {
            'progression': '1,5,4,5'
          } ,
          {
            'progression': '1,4,6,5'
          } ,
          {
            'progression': '1,56,6,5'
          } ,
          {
            'progression': '1,27,16,4'
          } ,
          {
            'progression': '1,364,6,4'
          } ,
          {
            'progression': '4,16,5'
          } ,
          {
            'progression': '4,16,2'
          } ,
          {
            'progression': '4,5,56/6,6'
          } ,
          {
            'progression': '1,5/6,6'
          } ,
          {
            'progression': '6,642,4'
          } ,
          {
            'progression': '1,57/4,4'
          } ,
          {
            'progression': '5,7/6,6'
          } ,
          {
            'progression': '4,B4,1'
          } ,
          {
            'progression': '1,b7,4,1'
          } ,
          {
            'progression': '1,B6,5'
          } ,
          {
            'progression': '1,5,4,B7,1'
          } ,
          {
            'progression': '1,5,4,B7,1'
          }
        ];
    } )
