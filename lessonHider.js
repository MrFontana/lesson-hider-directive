angular.module('directivePractice')
    .directive('lessonHider', function() {

        return {
            restrict: 'E',
            templateUrl: 'lessonHider.html',
            scope: {
                lesson: '=',
                dayAlert: '&',
              },
                controller: function($scope, lessonService) {
                    $scope.getSchedule = lessonService.getSchedule();
            },
            link: function(scope, element, attributes) {

                scope.getSchedule.then(function(response){
                  scope.schedule = response.data;
                  for (var i = 0; i < scope.schedule.length; i++) {
                    if (scope.schedule[i] == scope.lesson) {
                      element.css('text-decoration', 'line-through');
                      return;
                    }
                  }
                })
            }
        }
    });
