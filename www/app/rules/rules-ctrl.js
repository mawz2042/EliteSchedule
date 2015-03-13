(function () {
    'use strict';

    angular.module('eliteApp').controller('rulesCtrl', ['eliteApi', rulesCtrl]);

    function rulesCtrl(eliteApi) {
        var vm = this;

        eliteApi.getLeagueData().then(function (data) {
            console.log(data.league);
            vm.mainContent = data.league.rulesScreen;
        });
    }
})();