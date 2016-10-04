class ToolbarController {

  /** @ngInject */
  constructor($mdSidenav, $mdDialog) {

    this._$mdSidenav = $mdSidenav;
    this._$mdDialog = $mdDialog;
    this.title = 'Juui';

  }

  $onInit() {
  }

  toggleSidenav(menuId) {

    this._$mdSidenav(menuId)
      .toggle()
      .then(() => {
      });

  }

  showLoginForm(event) {

    this._$mdDialog.show({
      controller: /** @ngInject */
        ($mdDialog, $scope)=> {

        $scope.close = close;

        function close(){
          $mdDialog.hide();
        }

      },
      controllerAs: 'loginController',
      template: require('./../login/login-template.html'),
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      bindToController: true
    })
      .then(function (answer) {
        console.log('You said the information was "' + answer + '".');
      }, function () {
        console.log('You cancelled the dialog.');
      });

  }

}

export const toolbar = {
  bindings: {
    auth: '<juuiAuth'
  },
  template: require('./toolbar.template.html'),
  controller: ToolbarController,
  controllerAs: 'toolbarController',
  selector: 'juuiToolbar'
};
