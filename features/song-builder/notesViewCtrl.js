angular.module( 'perfectChordsApp' )
    .controller( 'notesViewCtrl', function( $scope, $state, $stateParams, userService ) {
        $scope.isProgActive = true;

        if ( $stateParams.prog ) {
            $scope.prog_html = $stateParams.prog.prog_html;
            console.log( $stateParams.prog );

            $scope.notes = $stateParams.prog.notes;
        }
        if ( $stateParams.example ) {
            $scope.example = $stateParams.example;
            console.log( $stateParams.example );

            $scope.notes = $stateParams.example.notes;
            $scope.isProgActive = false;
        }

        $scope.addNotesToFavorite = () => {
            if ( $stateParams.prog ) {
                $stateParams.prog.notes = $scope.notes;
                userService.addNotesToProgFavorite( $stateParams.prog );
            }
            else if ( $stateParams.example ) {
                $stateParams.example.notes = $scope.notes;
                userService.addNotesToExampleFavorite( $stateParams.example );
            }
            $state.go( 'song-builder' );
        };
    } )
