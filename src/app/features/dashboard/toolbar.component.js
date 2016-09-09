class ToolbarController {

  /** @ngInject */
  constructor($mdSidenav, $log) {
    this._$mdSidenav = $mdSidenav;
    this._$log= $log;
  }

  toggleSidenav(menuId) {

    console.log('toggle');

    this._$mdSidenav(menuId)
      .toggle()
      .then(function () {
        this._$log.debug("toggle " + menuId + " is done");
      });

  }

}

export const toolbar = {
  template: require('./toolbar.template.html'),
  controller: ToolbarController
};
