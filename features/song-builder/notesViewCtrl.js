angular.module( 'perfectChordsApp' )
    .controller( 'notesViewCtrl', function( $scope, $state, $stateParams, userService ) {
        $scope.prog_html = $stateParams.prog.prog_html;
        console.log( $stateParams.prog );

        $scope.notes = $stateParams.prog.notes;

        $scope.addNotesToProgFavorite = () => {
            $stateParams.prog.notes = $scope.notes;
            userService.addNotesToProgFavorite( $stateParams.prog );
            $state.go( 'song-builder' );
        };
    } )
