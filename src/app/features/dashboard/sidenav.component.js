class SidenavController {

  /** @ngInject */
  constructor($mdSidenav) {
    this._$mdSidenav = $mdSidenav;
  }

  toggleSidenav(menuId) {

    console.log('toggle');

    this._$mdSidenav(menuId)
      .toggle()
      .then(() => {
      });

  }

}

export const sidenav = {
  template: require('./sidenav.template.pug'),
  controller: SidenavController,
  controllerAs: 'sidenavController',
  selector: 'juuiSidenav'
};
