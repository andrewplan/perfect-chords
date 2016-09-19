
angular.module( 'perfectChordsApp', [ 'ui.router', angularDragula(angular), 'firebase' ] )

    .config( function( $stateProvider, $urlRouterProvider ) {

        $urlRouterProvider.otherwise( '/' );

        $stateProvider
            .state( 'home-page', {
                url: '/'
                , templateUrl: './features/home-page/home-page-tmpl.html'
                , controller: 'homePageCtrl'
            } )
            .state( 'sign-in', {
                url: '/sign-in'
                , templateUrl: './features/sign-in/sign-in-tmpl.html'
                , controller: 'signInCtrl'
            } )
            .state( 'register', {
                url: '/register'
                , templateUrl: './features/register/register-tmpl.html'
            } )
            .state( 'sign-out', {
                url: '/sign-out'
                , templateUrl: './features/sign-out/sign-out-tmpl.html'
            } )
            .state( 'cp-results', {
                url: '/cp-results'
                , templateUrl: './features/cp-results/cp-results-tmpl.html'
                , controller: 'cpResultsCtrl'
            } )
            .state( 'cp-results-view', {
                url: '/cp-results-view'
                , parent: 'cp-results'
                , templateUrl: './features/cp-results/cp-results-view-tmpl.html'
                , controller: 'cpResultsCtrl'
            } )
            .state( 'song-builder', {
                url: '/song-builder'
                , templateUrl: './features/song-builder/song-builder-tmpl.html'
                , controller: 'songBuilderCtrl'
            } );

        } )
