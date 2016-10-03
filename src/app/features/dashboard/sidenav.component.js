class SidenavController {

  /** @ngInject */
  constructor($mdSidenav) {
    this._$mdSidenav = $mdSidenav;
  }

  toggleSidenav(menuId) {

    this._$mdSidenav(menuId)
      .toggle()
      .then(() => {
      });

  }

}

export const sidenav = {
  template: require('./sidenav.template.html'),
  controller: SidenavController,
  controllerAs: 'sidenavController',
  selector: 'juuiSidenav'
};
