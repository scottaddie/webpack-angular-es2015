'use strict';

export default class AppConfig {
	/* @ngInject */
	static disableDebugInfo($compileProvider){
		$compileProvider.debugInfoEnabled(false);
	}
}