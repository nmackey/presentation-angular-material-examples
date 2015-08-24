import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';

angular.module('presentationAngularMaterialExamples', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)

  .controller('MainController', MainController);
