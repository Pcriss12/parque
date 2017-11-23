(function() {
    'use strict'
    angular
        .module('park')
        .service('reserveService', reserveService);
        reserveService.$inject = ['$http'];

    function reserveService($http) {
        var reserve = [];

        var publicAPI = {
            setReserve: _setReserve,
            getReserve: _getReserve
        };
        return publicAPI;

        function _setReserve(pReserve) {
            console.log(pReserve);
            return $http.post('http://localhost:3000/api/save_reserve', pReserve);
        }

        function _getReserve() {
            return $http.get('http://localhost:3000/api/get_all_reserve');
        }
    }
})();