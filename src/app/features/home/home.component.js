class HomeController {

  /** @ngInject */
  constructor($mdColors, $mdColorPalette, $log) {

    this._$mdColors = $mdColors;
    this._$mdColorPalette = $mdColorPalette;
    this._$log = $log;

    //TODO: remove
    // this.colors = {
    //   favorite: $mdColors.getThemeColor('warn')
    // };

    this.timer = setInterval(() => {
      this.loadFacebookElements()
    }, 1000);
  }

  $onInit() {
  }

  $onDestroy() {
    clearInterval(this.timer);
  }

  loadFacebookElements() {

    if (window.FB) {
      this._$log.debug('loadFacebookElements');
      window.FB.XFBML.parse();
      clearInterval(this.timer);
    }
  }

}

export const home = {
  template: require('./home.template.html'),
  controller: HomeController,
  controllerAs: 'homeController',
  selector: 'juuiHome'
};
