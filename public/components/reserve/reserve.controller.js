(function() {
    'use strict'
    angular
        .module('park')
        .controller('reserveController', reserveController);
        reserveController.$inject = ['$http','reserveService']; 

    function reserveController($http,reserveService) {
       var ctrl = this;
       	   ctrl.reserve = {};
           ctrl.date = new Date();
           ctrl.reserves="";

        ctrl.save= function(pReserve) {
        	
        	if (pReserve.homeA===true) {
        		pReserve.homeA= 'Camping'
        	} else {
        		if (pReserve.homeB===true) {
        			pReserve.homeB= 'Cabaña'
        		} else {
        			if (pReserve.homeC===true) {
        				pReserve.homeC= 'Areas Familiares'
        			} else {
        				console.log('no hay espacio reservado');
        			}
        		}
        	}

        	if (pReserve.walk3===true) {
        		pReserve.walk3= '3 kilómetros'
        	} else {
        		if (pReserve.walk5===true) {
        			pReserve.walk5= '5 kilómetros'
        		} else {
        			if (pReserve.walk7===true) {
        				pReserve.walk7= '7 kilómetros'
        			} else {
        				console.log('no hay actividad');
        			}
        		}
        	}

        	reserveService.setReserve(pReserve);
        	console.log(pReserve);
        	limpiar();
        }

        function limpiar() {
     		 ctrl.reserves = {}
    	}

    }
})();
