(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$mdDialog'];

  function LoginController($mdDialog) {

    let vm = this;
    vm.close = closeModal;

    activate();

    ////////////////

    function activate() {
    }

    function closeModal() {
      $mdDialog.hide();
    }

  }
})();
