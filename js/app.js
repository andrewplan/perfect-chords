
angular.module( 'perfectChordsApp', [ 'ui.router', angularDragula(angular), 'firebase', 'ngSanitize' ] )

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
                , controller: 'userCtrl'
            } )
            .state( 'register', {
                url: '/register'
                , templateUrl: './features/register/register-tmpl.html'
                , controller: 'userCtrl'
            } )
            .state( 'sign-out', {
                url: '/sign-out'
                , templateUrl: './features/sign-out/sign-out-tmpl.html'
            } )
            .state( 'cp-results', {
                url: '/cp-results'
                , templateUrl: './features/cp-results/cp-results-tmpl.html'
                , controller: 'cpResultsViewCtrl'
            } )
            .state( 'cp-results-view', {
                url: '/cp-results-view'
                , parent: 'cp-results'
                , templateUrl: './features/cp-results/cp-results-view-tmpl.html'
                , controller: 'cpResultsViewCtrl'
            } )
            .state( 'next-chord-finder', {
                url: '/next-chord-finder'
                , templateUrl: './features/next-chord-finder/next-chord-finder-view-tmpl.html'
                , controller: 'nextChordFinderCtrl'
            } )
            .state( 'song-builder', {
                url: '/song-builder'
                , templateUrl: './features/song-builder/song-builder-tmpl.html'
                , controller: 'songBuilderCtrl'
            } )
            .state( 'notes', {
                url: '/song-builder/notes'
                , templateUrl: './features/song-builder/song-builder-notes-view-tmpl.html'
                , controller: 'notesViewCtrl'
                , params: {
                    prog: null
                }
            } );

        } )
