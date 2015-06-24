'use strict';

import {default as PersonController} from './person.controller';
import {default as PersonFactory} from './person.factory';
import angular from 'npm/angular';

export default angular
	.module('app.person', [])
	.controller('PersonController', PersonController)
	.factory('PersonFactory', PersonFactory.Factory);