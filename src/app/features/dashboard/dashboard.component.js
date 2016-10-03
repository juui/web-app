class DashboardController {

  /** @ngInject */
  constructor($log, juuiAPI) {
    this._$log = $log;
    this._juuiAPI = juuiAPI;
    this.auth = {
      isLoggedIn: false
    };
  }

  $onInit() {

    this._juuiAPI.checkAuth()
      .then((result)=>{
        this.auth = result.data;
      })
      .catch((error)=>{
        this._$log.error(error);
      })

  }

  $onDestroy() {
  }

}

export const dashboard = {
  template: require('./dashboard.template.html'),
  controller: DashboardController,
  controllerAs: 'dashboardController',
  selector: 'juui-dashboard'
};