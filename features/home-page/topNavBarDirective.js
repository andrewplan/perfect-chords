angular.module( 'perfectChordsApp' )
  .directive( 'topNavBar', function() {
    return {
      templateUrl: './features/home-page/top-nav-bar-directive-tmpl.html'
      , restrict: 'EA'
      , scope: {
          firebaseUser: '='
        }
      , controller: 'signInCtrl'
      }
  } );
