angular.module( 'perfectChordsApp' )
    .directive( 'bottomNavBar', function() {
        return {
          templateUrl: function( elem, attr ) {
              return './features/bottom-nav-bar/bottom-nav-bar-' + attr.type + '-directive-tmpl.html'
          }
        }
    } )
