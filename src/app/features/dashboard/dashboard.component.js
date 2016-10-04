class DashboardController {

  /** @ngInject */
  constructor(juuiAPI) {
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
        console.error(error);
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