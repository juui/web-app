class DashboardController {

  /** @ngInject */
  constructor(juuiAPI) {
    this._juuiAPI = juuiAPI;
  }

  $onInit() {
    console.log('Init', 'dashboardController');
    console.log(this);

    this._juuiAPI.checkAuth()
      .then((result)=>{
        console.log('check session');
        console.log(result.data);
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