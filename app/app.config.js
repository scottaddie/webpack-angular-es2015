'use strict';

export default class AppConfig {
	constructor(){}
	
	/* @ngInject */
	static disableDebugInfo($compileProvider){
		$compileProvider.debugInfoEnabled(false);
	}
}