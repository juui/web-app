export default settings;

/** @ngInject */
function settings($mdThemingProvider, $analyticsProvider) {

  // Update the theme colors to use themes on font-icons
  $mdThemingProvider.theme('default')
   .primaryPalette('light-blue')
   .accentPalette('pink');

  $analyticsProvider.virtualPageviews(false);

}