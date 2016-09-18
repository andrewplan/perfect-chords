
angular.module( 'perfectChordsApp', [ 'ui.router', angularDragula(angular), 'firebase' ] )

    .config( function( $stateProvider, $urlRouterProvider ) {

        $urlRouterProvider.otherwise( '/' );

        $stateProvider
            .state( 'home-page', {
                url: '/'
                , templateUrl: './features/home-page/home-page-tmpl.html'
                , controller: 'homePageCtrl'
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
