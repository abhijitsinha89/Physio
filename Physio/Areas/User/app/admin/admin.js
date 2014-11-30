(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('app').controller(controllerId, ['common', admin]);

    function admin(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);


        activate();

        function activate() {

        }
    }
})();