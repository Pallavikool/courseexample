(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunch = '';
       $scope.message ;
         $scope.messageColor = {};
       $scope.LunchLimitChecker = function (){

           var lunchList = $scope.lunch ;
           lunchList = lunchList.split(',');
           if(lunchList == ''){
           $scope.message = "Please enter data first";
           $scope.messageColor.style = {
             'color': 'red',
             'border': '2px solid red'}
         }
         else if(lunchList.length <= 3){
           $scope.message = "Enjoy!";
           $scope.messageColor.style = {
            'color': 'green',
            'border': '2px solid green'
          }

         }
         else {
           $scope.message = "Too much..!" ;
           $scope.messageColor.style = {
            'color': 'green',
            'border': '2px solid green'
          }
         }
       };
    }

  }) ();
