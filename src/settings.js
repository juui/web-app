console.log(require('./asserts/images/sets/icons/svg-sprite-navigation.svg'));
export default settings;

/** @ngInject */
function settings($mdThemingProvider, $mdIconProvider) {

  // Update the theme colors to use themes on font-icons
  $mdThemingProvider.theme('default')
   .primaryPalette('light-blue')
   .accentPalette('pink');

}