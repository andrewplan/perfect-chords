angular.module( 'perfectChordsApp' )
    .service( 'resultsService', function( $http, $firebaseArray ) {

        const baseUrl = 'https://api.hooktheory.com/v1/';
        const chordProbPath = 'trends/nodes?cp='
        const songExamplesPath = 'trends/songs?cp='
        let chordProgDatabase = $firebaseArray( firebase.database().ref().child( 'chord_prog_database' ) );

        this.getModes = () => this.modes;
        // this.getMajorChords = () => this.majorChords;
        // this.getMinorChords = () => this.minorChords;
        // this.getDorianChords = () => this.dorianChords;
        // this.getPhrygianChords = () => this.phrygianChords;
        // this.getLydianChords = () => this.lydianChords;
        // this.getMixolydianChords = () => this.mixolydianChords;
        // this.getLocrianChords = () => this.locrianChords;

        this.getChordProgressions = ( chordProg ) => {
            return $http(
              {
                'url': baseUrl + chordProbPath + chordProg
                , 'method': "GET"
                , 'headers': {
                  "authorization": "Bearer 242d9571482d3a77b8f00efb38f9cf50"
                  , "accept": "application/json"
                  , "content-type": "application/json"
                }
              }
            )
            .then( response => {
                if ( response.status === 200 ) {
                    console.log( response )
                    for ( let i = 0; i < response.data.length; i++ ) {
                      response.data[ i ].probability = ( ( response.data[ i ].probability * 100 ).toFixed( 1 ) );
                    }
                    return response.data;
                }
                else {
                  console.log( 'Error: ', response.error );
                }
            } );
        };

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
                      console.log( response.data );
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

        this.getChordProgDatabase = () => chordProgDatabase;

        this.majorChords = [
            {
              roman_numeral: 'I'
              , keystrokes: '1'
              , chord_html: 'I'
            }
            , {
              roman_numeral: 'ii'
              , keystrokes: '2'
              , chord_html: 'ii'
            }
            , {
              roman_numeral: 'iii'
              , keystrokes: '3'
              , chord_html: 'iii'
            }
            , {
              roman_numeral: 'IV'
              , keystrokes: '4'
              , chord_html: 'IV'
            }
            , {
              roman_numeral: 'V'
              , keystrokes: '5'
              , chord_html: 'V'
            }
            , {
              roman_numeral: 'vi'
              , keystrokes: '6'
              , chord_html: 'vi'
            }
            , {
              roman_numeral: 'viiº'
              , keystrokes: '7'
              , chord_html: 'viiº'
            }
        ];

        this.minorChords = [
            {
              roman_numeral: 'i'
              , keystrokes: 'B1'
              , chord_html: 'i'
            }
            , {
              roman_numeral: 'iiº'
              , keystrokes: 'B2'
              , chord_html: 'iiº'
            }
            , {
              roman_numeral: 'bIII'
              , keystrokes: 'B3'
              , chord_html: 'bIII'
            }
            , {
              roman_numeral: 'iv'
              , keystrokes: 'B4'
              , chord_html: 'iv'
            }
            , {
              roman_numeral: 'v'
              , keystrokes: 'B5'
              , chord_html: 'v'
            }
            , {
              roman_numeral: 'bVI'
              , keystrokes: 'B6'
              , chord_html: 'bVI'
            }
            , {
              roman_numeral: 'bVII'
              , keystrokes: 'B7'
              , chord_html: 'bVII'
            }
        ];

        this.dorianChords = [
            {
              roman_numeral: 'i'
              , keystrokes: 'D1'
              , chord_html: 'i'
            }
            , {
              roman_numeral: 'ii'
              , keystrokes: 'D2'
              , chord_html: 'ii'
            }
            , {
              roman_numeral: 'bIII'
              , keystrokes: 'D3'
              , chord_html: 'bIII'
            }
            , {
              roman_numeral: 'IV'
              , keystrokes: 'D4'
              , chord_html: 'IV'
            }
            , {
              roman_numeral: 'v'
              , keystrokes: 'D5'
              , chord_html: 'v'
            }
            , {
              roman_numeral: 'viº'
              , keystrokes: 'D6'
              , chord_html: 'viº'
            }
            , {
              roman_numeral: 'bVII'
              , keystrokes: 'D7'
              , chord_html: 'bVII'
            }
        ];

        this.phrygianChords = [
            {
              roman_numeral: 'i'
              , keystrokes: 'Y1'
              , chord_html: 'i'
            }
            , {
              roman_numeral: 'bII'
              , keystrokes: 'Y2'
              , chord_html: 'bII'
            }
            , {
              roman_numeral: 'bIII'
              , keystrokes: 'Y3'
              , chord_html: 'bIII'
            }
            , {
              roman_numeral: 'iv'
              , keystrokes: 'Y4'
              , chord_html: 'iv'
            }
            , {
              roman_numeral: 'vº'
              , keystrokes: 'Y5'
              , chord_html: 'vº'
            }
            , {
              roman_numeral: 'bVI'
              , keystrokes: 'Y6'
              , chord_html: 'bVI'
            }
            , {
              roman_numeral: 'bvii'
              , keystrokes: 'Y7'
              , chord_html: 'bvii'
            }
        ];

        this.lydianChords = [
            {
              roman_numeral: 'I'
              , keystrokes: 'L1'
              , chord_html: 'I'
            }
            , {
              roman_numeral: 'II'
              , keystrokes: 'L2'
              , chord_html: 'II'
            }
            , {
              roman_numeral: 'iii'
              , keystrokes: 'L3'
              , chord_html: 'iii'
            }
            , {
              roman_numeral: '#ivº'
              , keystrokes: 'L4'
              , chord_html: '#ivº'
            }
            , {
              roman_numeral: 'V'
              , keystrokes: 'L5'
              , chord_html: 'V'
            }
            , {
              roman_numeral: 'vi'
              , keystrokes: 'L6'
              , chord_html: 'vi'
            }
            , {
              roman_numeral: 'vii'
              , keystrokes: 'L7'
              , chord_html: 'vii'
            }
        ];

        this.mixolydianChords = [
            {
              roman_numeral: 'I'
              , keystrokes: 'M1'
              , chord_html: 'I'
            }
            , {
              roman_numeral: 'ii'
              , keystrokes: 'M2'
              , chord_html: 'ii'
            }
            , {
              roman_numeral: 'iiiº'
              , keystrokes: 'M3'
              , chord_html: 'iiiº'
            }
            , {
              roman_numeral: 'IV'
              , keystrokes: 'M4'
              , chord_html: 'IV'
            }
            , {
              roman_numeral: 'v'
              , keystrokes: 'M5'
              , chord_html: 'v'
            }
            , {
              roman_numeral: 'vi'
              , keystrokes: 'M6'
              , chord_html: 'vi'
            }
            , {
              roman_numeral: 'bVII'
              , keystrokes: 'M7'
              , chord_html: 'bVII'
            }
        ];

        this.locrianChords = [
            {
              roman_numeral: 'iº'
              , keystrokes: 'C1'
              , chord_html: 'iº'
            }
            , {
              roman_numeral: 'bII'
              , keystrokes: 'C2'
              , chord_html: 'bII'
            }
            , {
              roman_numeral: 'biii'
              , keystrokes: 'C3'
              , chord_html: 'biii'
            }
            , {
              roman_numeral: 'iv'
              , keystrokes: 'C4'
              , chord_html: 'iv'
            }
            , {
              roman_numeral: 'bV'
              , keystrokes: 'C5'
              , chord_html: 'bV'
            }
            , {
              roman_numeral: 'bVI'
              , keystrokes: 'C6'
              , chord_html: 'bVI'
            }
            , {
              roman_numeral: 'bvii'
              , keystrokes: 'C7'
              , chord_html: 'bvii'
            }
        ];

        this.modes = [
          {
            name: 'Major'
            , chords: this.majorChords
          }
          , {
            name: 'Minor'
            , chords: this.minorChords
          }
          , {
            name: 'Dorian'
            , chords: this.dorianChords
          }
          , {
            name: 'Phrygian'
            , chords: this.phrygianChords
          }
          , {
            name: 'Lydian'
            , chords: this.lydianChords
          }
          , {
            name: 'Mixolydian'
            , chords: this.mixolydianChords
          }
          , {
            name: 'Locrian'
            , chords: this.locrianChords
          }
        ];

    } )
