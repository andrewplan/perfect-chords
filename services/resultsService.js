angular.module( 'perfectChordsApp' )
    .service( 'resultsService', function( $http ) {

        var baseUrl = 'https://api.hooktheory.com/v1/';

        /***** code to use once Hooktheory API works *****/
        // this.getSongExamples = function() {
        //     var promise =
        //         $http(
        //             {
        //             "url": "https://api.hooktheory.com/v1/trends/nodes",
        //             "method": "GET",
        //             "headers": {
        //               "authorization": "Bearer 242d9571482d3a77b8f00efb38f9cf50",
        //               "accept": "application/json",
        //               "content-type": "application/json"
        //             }
        //           }
        //         ).then( function( response ) {
        //             if ( response.status === 200 ) {
        //               console.log( response );
        //               return response;
        //             }
        //             console.log( 'Error: ' + response.error );
        //         } );
        //
        //     return promise;
        // };

        this.getSongExamples1564 = function() {
          return this.songExamples1564;
        };

        this.getSongExamples1245 = function() {
          return this.songExamples1245;
        };

        this.songExamples1564 = [
          {
            "artist": "3 Doors Down",
            "song": "Be Like That",
            "section": "Intro",
            "url": "http://www.hooktheory.com/theorytab/view/3-doors-down/be-like-that#intro"
          },
          {
            "artist": "3 Doors Down",
            "song": "Be Like That",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/3-doors-down/be-like-that#verse"
          },
          {
            "artist": "Adele",
            "song": "Someone Like You",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/adele/someone-like-you#chorus"
          },
          {
            "artist": "Avril Lavigne",
            "song": "Girlfriend",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/avril-lavigne/girlfriend#chorus"
          },
          {
            "artist": "Bon Jovi",
            "song": "Living On A Prayer",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/bon-jovi/living-on-a-prayer#chorus"
          },
          {
            "artist": "Bruno Mars",
            "song": "Grenade",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/bruno-mars/grenade#chorus"
          },
          {
            "artist": "Carly Rae Jepsen",
            "song": "Call Me Maybe",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/carly-rae-jepsen/call-me-maybe#chorus"
          },
          {
            "artist": "Carrie Underwood",
            "song": "So Small",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/carrie-underwood/so-small#chorus"
          },
          {
            "artist": "Carrie Underwood",
            "song": "So Small",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/carrie-underwood/so-small#verse"
          },
          {
            "artist": "Cascada",
            "song": "Every Time We Touch",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/cascada/every-time-we-touch#verse"
          },
          {
            "artist": "Cheryl Cole",
            "song": "Parachute",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/cheryl-cole/parachute#verse"
          },
          {
            "artist": "Christina Perri",
            "song": "Jar Of Hearts",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/christina-perri/jar-of-hearts#chorus"
          },
          {
            "artist": "Erasure",
            "song": "Always",
            "section": "Pre-Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/erasure/always#pre-chorus"
          },
          {
            "artist": "Evanescence",
            "song": "Bring Me To Life",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/evanescence/bring-me-to-life#chorus"
          },
          {
            "artist": "Flo Rida",
            "song": "Whistle",
            "section": "Instrumental",
            "url": "http://www.hooktheory.com/theorytab/view/flo-rida/whistle#instrumental"
          },
          {
            "artist": "Jason Mraz",
            "song": "I'm Yours",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/jason-mraz/im-yours#chorus"
          },
          {
            "artist": "Jason Mraz",
            "song": "I'm Yours",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/jason-mraz/im-yours#verse"
          },
          {
            "artist": "Kelly Clarkson",
            "song": "Already Gone",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/kelly-clarkson/already-gone#verse"
          },
          {
            "artist": "Lady Gaga",
            "song": "The Edge Of Glory",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/lady-gaga/the-edge-of-glory#chorus"
          },
          {
            "artist": "Maroon 5",
            "song": "She Will Be Loved",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/maroon-5/she-will-be-loved#chorus"
          }
        ];

        this.songExamples1245 = [
          {
            "artist": "Labrinth feat Emeli Sande",
            "song": "Beneath Your Beautiful",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/labrinth-feat-emeli-sande/beneath-your-beautiful#chorus"
          },
          {
            "artist": "Labrinth feat Emeli Sande",
            "song": "Beneath Your Beautiful",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/labrinth-feat-emeli-sande/beneath-your-beautiful#verse"
          },
          {
            "artist": "Calvin Harris",
            "song": "Drinking From the Bottle",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/calvin-harris/drinking-from-the-bottle#chorus"
          },
          {
            "artist": "The Temptations",
            "song": "My Girl",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/the-temptations/my-girl#chorus"
          },
          {
            "artist": "The Smiths",
            "song": "What She Said",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/the-smiths/what-she-said#verse"
          },
          {
            "artist": "Counting Crows",
            "song": "Accidentally in Love",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/counting-crows/accidentally-in-love#chorus"
          },
          {
            "artist": "ZUN",
            "song": "Faith is for the Transient People",
            "section": "Pre-Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/zun/faith-is-for-the-transient-people#pre-chorus"
          },
          {
            "artist": "David Guetta feat Sam Martin",
            "song": "Lovers On The Sun",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/david-guetta-feat-sam-martin/lovers-on-the-sun#chorus"
          },
          {
            "artist": "Game Freak",
            "song": "Vs Brendan and May",
            "section": "Outro",
            "url": "http://www.hooktheory.com/theorytab/view/game-freak/vs-brendan-and-may#outro"
          },
          {
            "artist": "Nena",
            "song": "99 Luftballons",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/nena/99-luftballons#verse"
          },
          {
            "artist": "Nena",
            "song": "99 Luftballons",
            "section": "Instrumental",
            "url": "http://www.hooktheory.com/theorytab/view/nena/99-luftballons#instrumental"
          },
          {
            "artist": "Bertycox",
            "song": "The Signal",
            "section": "Intro",
            "url": "http://www.hooktheory.com/theorytab/view/bertycox/the-signal#intro"
          },
          {
            "artist": "The Divine Comedy",
            "song": "At The Indie Disco",
            "section": "Bridge",
            "url": "http://www.hooktheory.com/theorytab/view/the-divine-comedy/at-the-indie-disco#bridge"
          },
          {
            "artist": "The Divine Comedy",
            "song": "At The Indie Disco",
            "section": "Verse",
            "url": "http://www.hooktheory.com/theorytab/view/the-divine-comedy/at-the-indie-disco#verse"
          },
          {
            "artist": "Reel Big Fish",
            "song": "Sell Out",
            "section": "Instrumental",
            "url": "http://www.hooktheory.com/theorytab/view/reel-big-fish/sell-out#instrumental"
          },
          {
            "artist": "Tyr",
            "song": "Ormurin Langi",
            "section": "Pre-Chorus and Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/tyr/ormurin-langi#pre-chorus-and-chorus"
          },
          {
            "artist": "Jakob Liedholm",
            "song": "NEA - Steerner Remix",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/jakob-liedholm/nea---steerner-remix#chorus"
          },
          {
            "artist": "Animusic",
            "song": "Acoustic Curves",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/animusic/acoustic-curves#chorus"
          },
          {
            "artist": "Astrid S",
            "song": "2 AM - Matoma Remix",
            "section": "Chorus",
            "url": "http://www.hooktheory.com/theorytab/view/astrid-s/2-am---matoma-remix#chorus"
          },
          {
            "artist": "Reel Big Fish",
            "song": "She's Not the End of the World",
            "section": "Intro and Verse",
            "url": "http://www.hooktheory.com/theorytab/view/reel-big-fish/shes-not-the-end-of-the-world#intro-and-verse"
          }
        ];

    } )
