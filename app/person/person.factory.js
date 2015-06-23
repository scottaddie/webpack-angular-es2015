'use strict';

const HTTP = new WeakMap();

class PersonFactory {
	constructor($http){
		HTTP.set(this, $http);
	}
	
	getPerson(){
		return {
			FirstName: 'Scott',
			LastName: 'Addie'
		};
	}
	
	static Factory($http){
		return new PersonFactory($http);
	}
}

PersonFactory.$inject = ['$http'];

export default PersonFactory;