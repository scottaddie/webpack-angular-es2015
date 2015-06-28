'use strict';

const HTTP = new WeakMap();

export default class PersonService {
	/* @ngInject */
	constructor($http){
		HTTP.set(this, $http);
	}
	
	getPerson(){
		// In a real app, you'd use $http in here to fetch data from server.
		return {
			FirstName: 'Scott',
			LastName: 'Addie'
		};
	}
}