angular.module( 'perfectChordsApp' )
    .directive( 'cpExample', function() {
        return {
            templateUrl: './features/cp-results/cp-example-directive-tmpl.html'
            , restrict: 'EA'
            , require: '^cpResult'
            , replace: true
            , scope: {
                  result: '='
              }
            , link: function( scope, elem, attr ) {
                  elem.on( 'click', function() {
                      elem.parent().parent().find( 'section' ).html(
                          '<iframe src="' + scope.result.url + '"' + '></iframe>'
                      );
                  } );
              }
        };
    } );
