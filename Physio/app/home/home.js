(function () {
    'use strict';
    var controllerId = 'home';
    angular.module('app').controller(controllerId, ['common', home]);

    function home(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);


        activate();

        function activate() {

        }
    }
})();