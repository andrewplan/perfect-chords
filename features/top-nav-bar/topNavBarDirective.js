angular.module( 'perfectChordsApp' )
  .directive( 'topNavBar', function() {
    return {
      templateUrl: function( elem, attr ) {
          return './features/top-nav-bar/top-nav-bar-' + attr.type + '-directive-tmpl.html'
      }
      , restrict: 'EA'
      , scope: {
          firebaseUser: '='
        }
      , controller: 'userCtrl'
    }
  } );
