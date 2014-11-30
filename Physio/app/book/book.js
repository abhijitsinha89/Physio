(function () {
    'use strict';
    var controllerId = 'book';
    angular.module('app').controller(controllerId, ['$timeout', 'common', 'datacontext', book]);

    function book($timeout, common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        
        var vm = this;
        vm.counter = 0;
        vm.date = new Date();
        activate();

        function activate() {

        }
      
        vm.onTimeout = function () {
            vm.counter++;
            vm.date = new Date();
            mytimeout = $timeout(vm.onTimeout, 1000);
        }
        var mytimeout = $timeout(vm.onTimeout, 1000);
    }
})();