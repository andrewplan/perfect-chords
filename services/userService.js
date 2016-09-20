angular.module( 'perfectChordsApp' )
    .service( 'userService', function( $state, $window ) {

        var currentProgFavorites = [];
        var currentExampleFavorites = [];
        var user;
        var uid;
        var auth = firebase.auth();

        if ( localStorage[ 'uid' ] && localStorage[ 'user' ] && localStorage[ 'current_prog_favorites' ] && localStorage[ 'current_example_favorites' ] ) {
            uid = JSON.parse( localStorage[ 'uid' ] );
            user = JSON.parse( localStorage[ 'user' ] );
            currentProgFavorites = JSON.parse( localStorage[ 'current_prog_favorites' ] );
            currentExampleFavorites = JSON.parse( localStorage[ 'current_example_favorites' ] );
            console.log( 'loaded local storage!' )
        }

        this.clearLocalStorage = function() {
          localStorage[ 'uid' ] = '';
          localStorage[ 'user' ] = '';
          localStorage[ 'current_prog_favorites' ] = '';
          localStorage[ 'current_example_favorites' ] = '';
        };

        this.signOut = function() {
          firebase.auth().signOut()
            .then( function() {
              console.log( 'Signed out' );
              user = '';
            } )
            .catch( function( error ) {
              console.log( 'Error: ', error );
            } );
        };

        this.createUserWithEmailAndPassword = function( email, password ) {
          firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( function() {
              $state.go( 'sign-in' );
            } )
            .catch( function( error ) {
              console.log( 'Error: ', error );
              alert( 'Please enter a valid email address.' );
            } );
        }

        this.signInWithEmailAndPassword = function( email, password ) {
          firebase.auth().signInWithEmailAndPassword( email, password )
          .catch( function( error ) {
              console.log( 'Error: ', error );
          } );

          firebase.auth().onAuthStateChanged( function( firebaseUser ) {
            uid = auth.currentUser.uid;
            $window.localStorage.setItem( 'uid', JSON.stringify( uid ) );

            user = firebaseUser;
            $window.localStorage.setItem( 'user', JSON.stringify( user ) );

            firebase.database()
              .ref( 'users/' + uid + '/current_prog_favorites' )
              .once( 'value' )
              .then( function( response ) {
                  currentProgFavorites = [];
                  if ( response.val() ) {
                    var currentProgFavoritesRaw = response.val();
                    for ( var i = 0; i < currentProgFavoritesRaw.length; i++ ) {
                        currentProgFavorites.push( angular.fromJson( currentProgFavoritesRaw[ i ] ) )
                    }
                    $window.localStorage.setItem( 'current_prog_favorites', JSON.stringify( currentProgFavorites ) );
                  }
              } );

            firebase.database()
              .ref( 'users/' + uid + '/current_example_favorites' )
              .once( 'value' )
              .then( function( response ) {
                  currentExampleFavorites = [];
                  if ( response.val() ) {
                    var currentExampleFavoritesRaw = response.val();
                    for ( var i = 0; i < currentExampleFavoritesRaw.length; i++ ) {
                        currentExampleFavorites.push( angular.fromJson( currentExampleFavoritesRaw[ i ] ) )
                    }
                    $window.localStorage.setItem( 'current_example_favorites', JSON.stringify( currentExampleFavorites ) );
                  }
              } );

              $state.go( 'cp-results-view' );
          } );
        };

        this.userInfo = function() {
          return user;
        };

        this.updateUserFavorites = function( favoritesArray, favoritesArrayName ) {
            var updatedFavoritesArray = [];
            for ( var i = 0; i < favoritesArray.length; i++ ) {
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


        this.getProgFavorites = function() {
          return currentProgFavorites;
        };

        this.addProgToFavorites = function( chordProg ) {
          if ( !currentProgFavorites ) {
            currentProgFavorites = [];
          }
          if ( currentProgFavorites.indexOf( chordProg ) !== -1 ) {
            return;
          }
          currentProgFavorites.push( chordProg );
          this.updateUserFavorites( currentProgFavorites, 'current_prog_favorites');
        };

        this.removeProgFromFavorites = function( chordProg ) {
          for ( var i = currentProgFavorites.length - 1; i >= 0; i-- ) {
            if ( currentProgFavorites[ i ] === chordProg ) {
              currentProgFavorites.splice( i, 1 );
            }
          }
          this.updateUserFavorites( currentProgFavorites, 'current_prog_favorites');
        };

        /********EXAMPLE***********/

        this.getExampleFavorites = function() {
          return currentExampleFavorites;
        };


        this.addExampleToFavorites = function( example ) {
          if ( !currentExampleFavorites ) {
            currentExampleFavorites = [];
          }
          if ( currentExampleFavorites.indexOf( example ) !== -1 ) {
            return;
          }
          currentExampleFavorites.push( example );
          this.updateUserFavorites( currentExampleFavorites, 'current_example_favorites');
        };

        this.removeExampleFromFavorites = function( example ) {
          for ( var i = currentExampleFavorites.length - 1; i >= 0; i-- ) {
            if ( currentExampleFavorites[ i ] === example ) {
              currentExampleFavorites.splice( i, 1 );
              this.updateUserFavorites( currentExampleFavorites, 'current_example_favorites');
            }
          }
        };

    } );
