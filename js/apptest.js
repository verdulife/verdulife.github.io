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

    $scope.output = "0";
    $scope.curIndex = 0;
    $scope.result = 0;

    $scope.checkInput = function (num) {
        var tmp = true;
        if ($scope.result != 0) {
            $scope.result = 0;
            $scope.output = "0";
            tmp = true;
        }
        if (angular.equals('+', num) ||
            angular.equals('-', num) ||
            angular.equals('*', num) ||
            angular.equals('/', num)) {
            var index = "+|-|*|/".indexOf($scope.output.charAt($scope.output.length - 1));
            if (index >= 0) {
                tmp = false;
            }
            $scope.curIndex = $scope.output.length + 1;
        } else {
            tmp = true;
            if ($scope.output.substring($scope.curIndex).length < 10) {
                if (angular.equals(num, ".")) {
                    var k = 0;
                    for (var j = 0; j < $scope.output.substring($scope.curIndex).length; j++) {
                        if (angular.equals(".", $scope.output.substring($scope.curIndex).charAt(j))) {
                            k = k + 1;
                        }
                    }
                    if (k >= 1) {
                        tmp = false;
                    }
                } else {
                    tmp = true;
                }
            } else {
                tmp = false;
            }
        }
        return tmp;
    }

    $scope.operate = function (op) {
        if ($scope.checkInput(op)) {
            $scope.output = $scope.output + op;
        }
    }


    $scope.press = function (num) {
        if ($scope.checkInput(num)) {
            if (angular.equals(num, 'x')) {
                $scope.output = $scope.output.slice(0, $scope.output.length - 1);
            } else {
                if (angular.equals($scope.output, "0")) {
                    $scope.output = "";
                    $scope.output += num;
                } else if (angular.equals(".", $scope.output)) {
                    $scope.output = "0.";
                    $scope.output += num;
                } else {
                    $scope.output += num;
                }
            }
        } else {
            if (angular.equals(num, 'x')) {
                $scope.output = $scope.output.slice(0, $scope.output.length - 1);
            }
        }
    }

    $scope.equal = function () {
        var isOpEnd = "+|-|*|/".indexOf($scope.output.charAt($scope.output.length - 1));
        if (isOpEnd >= 0) {
        } else if (eval($scope.output) == 0) {
            $scope.output = "0";
        } else {
            $scope.result = eval($scope.output);
            $scope.output = $scope.result;
        };
    }

    //Change IRPF & IVA %
    $scope.ret = '15';
    $scope.iva = 0;
    $scope.ivas = [21, 10, 4]

    $scope.changeRet = function () {
        $scope.ret = $scope.ret === '7' ? '15' : '7';
    };

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