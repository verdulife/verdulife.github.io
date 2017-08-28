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

var calcApp = angular.module('calcApp', ['ngTouch']);

calcApp.controller('calcCon', function ($scope) {

  $scope.ret = '15';

  $scope.val = 0;

  $scope.addOp = function(operacion){
    $scope.operacion = operacion;
  };

  $scope.equal = function() {
    switch($scope.operacion) {
      case '+': 
        $scope.val = $scope.saved + $scope.val;
      break;
      case '-': 
        $scope.val = $scope.saved - $scope.val;
       break;
       case '*': 
        $scope.val = $scope.saved * $scope.val;
      break;
       case '/': 
        $scope.val = $scope.saved / $scope.val;
      break;
      default:
      break;
    }
  }

  $scope.operacion = null;
  $scope.val = $scope.val.toString();

  $scope.addNum = function (num) {
    if ($scope.val == '0') {
      $scope.val = '';
    }

    if(/([,]])+/.test($scope.val) && num == ',') {
      return;
    }

    if($scope.operacion){
      $scope.saved = parseFloat($scope.val);
      $scope.val = 0;
    }

    $scope.val += num;
  };

  $scope.resetCalc = function (num) {
    $scope.val = 0;
    $scope.operacion = null;
    $scope.saved = 0;
  };

  $scope.changeRet = function () {
    $scope.ret = $scope.ret === '7' ? '15' : '7';
  };

  $scope.iva = 0;
  $scope.ivas = [21, 10, 4]
  $scope.changeIva = function () {
    switch ($scope.iva) {
      case 0:
        $scope.iva = 1;
        break;
      case 1:
        $scope.iva = 2; 
        break;
      case 2:
        $scope.iva = 0;
        break;
    }
  };
});