class ToolbarController {

  /** @ngInject */
  constructor($mdSidenav) {

    this._$mdSidenav = $mdSidenav;
    this.title = 'Juui';

  }

  toggleSidenav(menuId) {

    console.log('toggle');

    this._$mdSidenav(menuId)
      .toggle()
      .then(() => {
      });

  }

}

export const toolbar = {
  template: require('./toolbar.template.html'),
  controller: ToolbarController,
  controllerAs: 'toolbarController',
  selector: 'juuiToolbar'
};
