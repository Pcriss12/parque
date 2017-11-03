(function() {
    'use strict'
    angular
        .module('park')
        .service('reserveService', reserveService);
        reserveService.$inject = ['$http'];

    function reserveService($http) {
        var request = [];

        var publicAPI = {
            setReserve: _setReserve,
            getReserve: _getReserve
        };
        return publicAPI;

        function _setRequest(pReserve) {
            console.log(pReserve);
            return $http.post('http://localhost:3000/api/save_reserve', pReserve);
        }

        function _getRequest() {
            return $http.get('http://localhost:3000/api/get_all_reserve');
        }
    }
})();