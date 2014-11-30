(function () { 
    'use strict';
    
    var controllerId = 'shell';
    angular.module('app').controller(controllerId,
        ['$rootScope', 'common', 'config', shell]);

    function shell($rootScope, common, config) {
        var vm = this;
        
        activate();

        function activate() {
            
        }
    };
})();