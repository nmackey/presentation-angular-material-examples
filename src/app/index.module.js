import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';

import MainService from './main/main.service';

angular.module('presentationAngularMaterialExamples', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)

  .controller('MainController', MainController)

  .service('mainService', MainService);
