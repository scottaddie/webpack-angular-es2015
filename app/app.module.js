'use strict';

// vendor module imports
import angular from 'npm/angular';
import formly from 'npm/angular-formly';
import formlyBootstrap from 'npm/angular-formly-templates-bootstrap';
import ngAria from 'npm/angular-aria';
import uiRouter from 'npm/angular-ui-router';

// custom module imports
import {default as AppConfig} from './app.config';
import {default as PersonModule} from './person/person.module';

angular
	.module('app', [
		// vendor modules
		ngAria,
		uiRouter,
		formly,
		formlyBootstrap,
		
		// custom modules
		PersonModule.name
	])
	.config(AppConfig.disableDebugInfo);