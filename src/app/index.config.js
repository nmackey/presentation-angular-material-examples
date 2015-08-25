function config ($logProvider, $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // $mdThemingProvider.theme('example', 'default')
  //   .primaryPalette('yellow')
  //   .accentPalette('green')
  //   .warnPalette('red')
  //   .backgroundPalette('grey')
  //   .dark();

  $mdThemingProvider.theme('example', 'default');
}

export default config;
