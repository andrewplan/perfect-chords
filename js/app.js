
angular.module( 'perfectChordsApp', [ 'ui.router', angularDragula(angular), 'firebase', 'ngSanitize', 'ngAnimate' ] )
    // .run( ( $animate ) => $animate.enabled( true ) )
    .config( function( $animateProvider, $stateProvider, $urlRouterProvider ) {

        $animateProvider.classNameFilter( /animated/ );

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
            .state( 'main', {
                url: '/main'
                , templateUrl: './features/main/main-tmpl.html'
                , controller: 'userCtrl'

            } )
            .state( 'cp-results', {
                url: '/cp-results'
                , parent: 'main'
                , templateUrl: './features/cp-results/cp-results-tmpl.html'
                , controller: 'cpResultsViewCtrl'
            } )
            .state( 'next-chord-finder', {
                url: '/next-chord-finder'
                , parent: 'main'
                , templateUrl: './features/next-chord-finder/next-chord-finder-view-tmpl.html'
                , controller: 'nextChordFinderCtrl'
            } )
            .state( 'song-builder', {
                url: '/song-builder'
                , parent: 'main'
                , templateUrl: './features/song-builder/song-builder-tmpl.html'
                , controller: 'songBuilderCtrl'
            } )
            .state( 'notes', {
                url: '/song-builder/notes'
                , parent: 'main'
                , templateUrl: './features/song-builder/song-builder-notes-view-tmpl.html'
                , controller: 'notesViewCtrl'
                , params: {
                    prog: null
                    , example: null
                }
            } );

    } )
