$(document).ready(function () {

  $('.num-btn').on('tapstart', function () {
    $(this).css('opacity', '.9').css('background', 'rgba(255,255,255,.05');
  });

  $('.num-btn').on('tapend', function () {
    $(this).css('opacity', '.1').css('background', 'transparent');
  });

  $('.equal-btn').on('tapstart', function () {
    $(this).css('opacity', '.5').css('box-shadow', 'none');
  });

  $('.equal-btn').on('tapend', function () {
    $(this).css('opacity', '1').css('box-shadow', '0 0 3vw 0 #000');
  });

});

var calcApp = angular.module('calcApp', []);

calcApp.controller('calcCon', function($scope){

  $scope.retLow = '7';

});