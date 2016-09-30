class DashboardController {

  /** @ngInject */
  constructor(juuiAPI) {
    this._juuiAPI = juuiAPI;
    this.auth = {
      isLoggedIn: false
    };
  }

  $onInit() {
    console.log('Init', 'dashboardController');
    console.log(this);

    this._juuiAPI.checkAuth()
      .then((result)=>{
        console.log('check session');
        this.auth = result.data;
        console.log(this.auth);
      })
      .catch((error)=>{
        console.log(error);
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