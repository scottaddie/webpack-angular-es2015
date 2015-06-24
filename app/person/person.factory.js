'use strict';

const HTTP = new WeakMap();

export default class PersonFactory {
	/* @ngInject */
	constructor($http){
		HTTP.set(this, $http);
	}
	
	getPerson(){
		return {
			FirstName: 'Scott',
			LastName: 'Addie'
		};
	}
	
	/* @ngInject */
	static Factory($http){
		return new PersonFactory($http);
	}
}