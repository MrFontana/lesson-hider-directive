angular.module('directivePractice')
  .service('lessonService', function($http, $q){
    this.getSchedule = function(){
      return $http.get('schedule.json')
    }
  })
