angular.module( 'perfectChordsApp' )
    .service( 'userService', function( $state, $window ) {

        let currentProgFavorites = [];
        let currentExampleFavorites = [];
        let user;
        let uid;
        let auth = firebase.auth();

        if ( localStorage[ 'uid' ] && localStorage[ 'user' ] && localStorage[ 'current_prog_favorites' ] && localStorage[ 'current_example_favorites' ] ) {
            uid = JSON.parse( localStorage[ 'uid' ] );
            user = JSON.parse( localStorage[ 'user' ] );
            currentProgFavorites = JSON.parse( localStorage[ 'current_prog_favorites' ] );
            currentExampleFavorites = JSON.parse( localStorage[ 'current_example_favorites' ] );
        }

        this.clearLocalStorage = () => {
          localStorage[ 'uid' ] = '';
          localStorage[ 'user' ] = '';
          localStorage[ 'current_prog_favorites' ] = '';
          localStorage[ 'current_example_favorites' ] = '';
        };

        this.signOut = () => {
          firebase.auth().signOut()
            .then( () => {
              console.log( 'Signed out' );
              user = '';
            } )
            .catch( ( error ) => {
              console.log( 'Error: ', error );
            } );
        };

        this.createUserWithEmailAndPassword = ( email, password ) => {
          firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( () => {
              $state.go( 'sign-in' );
            } )
            .catch( ( error ) => {
              console.log( 'Error: ', error );
              alert( 'Please enter a valid email address.' );
            } );
        }

        this.signInWithEmailAndPassword = ( email, password ) => {
          firebase.auth().signInWithEmailAndPassword( email, password )
          .catch( ( error ) => {
              console.log( 'Error: ', error );
          } );

          firebase.auth().onAuthStateChanged( ( firebaseUser ) => {
            uid = auth.currentUser.uid;
            $window.localStorage.setItem( 'uid', JSON.stringify( uid ) );

            user = firebaseUser;
            $window.localStorage.setItem( 'user', JSON.stringify( user ) );

            firebase.database()
              .ref( 'users/' + uid + '/current_prog_favorites' )
              .once( 'value' )
              .then( ( response ) => {
                  currentProgFavorites = [];
                  if ( response.val() ) {
                    let currentProgFavoritesRaw = response.val();
                    for ( let i = 0; i < currentProgFavoritesRaw.length; i++ ) {
                        currentProgFavorites.push( angular.fromJson( currentProgFavoritesRaw[ i ] ) )
                    }
                    $window.localStorage.setItem( 'current_prog_favorites', JSON.stringify( currentProgFavorites ) );
                  }
              } );

            firebase.database()
              .ref( 'users/' + uid + '/current_example_favorites' )
              .once( 'value' )
              .then( ( response ) => {
                  currentExampleFavorites = [];
                  if ( response.val() ) {
                    let currentExampleFavoritesRaw = response.val();
                    for ( let i = 0; i < currentExampleFavoritesRaw.length; i++ ) {
                        currentExampleFavorites.push( angular.fromJson( currentExampleFavoritesRaw[ i ] ) )
                    }
                    $window.localStorage.setItem( 'current_example_favorites', JSON.stringify( currentExampleFavorites ) );
                  }
              } );

              $state.go( 'cp-results' );
          } );
        };

        this.userInfo = () => { return user; };

        this.updateUserFavorites = ( favoritesArray, favoritesArrayName ) => {
            let updatedFavoritesArray = [];
            for ( let i = 0; i < favoritesArray.length; i++ ) {
              updatedFavoritesArray.push( angular.toJson( favoritesArray[ i ] ) ) ;
            }

            $window.localStorage.setItem( favoritesArrayName, JSON.stringify( favoritesArray ) );

            if ( !uid ) {
              uid = JSON.parse( $window.localStorage.uid );
              // firebase.initializeApp( config );
            }

            firebase.database()
              .ref( 'users/' + uid + '/' + favoritesArrayName )
              .set( updatedFavoritesArray );
        };


        this.getProgFavorites = () => {
          return currentProgFavorites;
        };

        this.generateFavoriteId = ( favoritesArray ) => {
          if ( favoritesArray.length > 0 ) {
            return favoritesArray[ favoritesArray.length - 1 ].id + 1;
          }
          return 1;
        };

        this.addProgToFavorites = ( chordProg ) => {
          if ( !currentProgFavorites ) {
            currentProgFavorites = [];
          }
          if ( currentProgFavorites.indexOf( chordProg ) !== -1 ) {
            return;
          }
          if ( chordProg.hasOwnProperty( 'child_path' ) ) {
            chordProg.progression = chordProg.child_path;
            chordProg.prog_html = chordProg.child_path;
          }

          chordProg.notes = null;
          chordProg.id = this.generateFavoriteId( currentProgFavorites );

          console.log( chordProg );
          currentProgFavorites.push( chordProg );
          this.updateUserFavorites( currentProgFavorites, 'current_prog_favorites');
        };

        this.removeProgFromFavorites = ( chordProg ) => {
          for ( let i = currentProgFavorites.length - 1; i >= 0; i-- ) {
            if ( currentProgFavorites[ i ] === chordProg ) {
              currentProgFavorites.splice( i, 1 );
            }
          }
          this.updateUserFavorites( currentProgFavorites, 'current_prog_favorites');
        };

        this.addNotesToProgFavorite = ( prog ) => {
          for ( let i = 0; i < currentProgFavorites.length; i++ ) {
            if ( currentProgFavorites[ i ].id === prog.id ) {
              currentProgFavorites[ i ].notes = prog.notes;
              console.log( currentProgFavorites[ i ] );
            }
          }
          this.updateUserFavorites( currentProgFavorites, 'current_prog_favorites');
        };

        /********EXAMPLE***********/

        this.getExampleFavorites = () => { return currentExampleFavorites; };

        this.addExampleToFavorites = ( example, progName ) => {
          if ( !currentExampleFavorites ) {
            currentExampleFavorites = [];
          }
          if ( currentExampleFavorites.indexOf( example ) !== -1 ) {
            return;
          }

          example.id = this.generateFavoriteId( currentExampleFavorites );
          example.progression = progName;
          example.notes = null;

          console.log( example );
          currentExampleFavorites.push( example );
          this.updateUserFavorites( currentExampleFavorites, 'current_example_favorites');
        };

        this.removeExampleFromFavorites = ( example ) => {
          for ( let i = currentExampleFavorites.length - 1; i >= 0; i-- ) {
            if ( currentExampleFavorites[ i ] === example ) {
              currentExampleFavorites.splice( i, 1 );
              this.updateUserFavorites( currentExampleFavorites, 'current_example_favorites');
            }
          }
        };

    } );
