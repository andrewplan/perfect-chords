angular.module( 'perfectChordsApp' )
    .service( 'resultsService', function( $http ) {

        var baseUrl = 'https://api.hooktheory.com/v1/';

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

        /**********************************/

        // var nextPage = ''; //stores the url of the next page
        //
        // this.getCharacters = function() {
        //   if ( nextPage ) {
        //     return $http.get( nextPage ).then( saveNextPage );
        //   }
        //   return $http.get( baseUrl + 'people' ).then( saveNextPage ); // returns a promise
        // };
        //
        // function saveNextPage( result ) {
        //     nextPage = result.data.next;
        //     return result; // need to return the promise so we can continue promise chaining in our controller
        // };

        /**********************************/

        this.getChordProgDatabase = function() {
          return this.chordProgDatabase;
        };

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
