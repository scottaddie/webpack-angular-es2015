'use strict';

import {default as PersonController} from './person.controller';
import {default as PersonService} from './person.service';
import angular from 'npm/angular';

export default angular
	.module('app.person', [])
	.controller('PersonController', PersonController)
	.service('PersonService', PersonService);