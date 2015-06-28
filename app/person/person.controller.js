'use strict';

const SERVICE = new WeakMap();

export default class PersonController {
	/* @ngInject */
	constructor(PersonService){
		SERVICE.set(this, PersonService);
		
		let objPerson = SERVICE.get(this).getPerson();
		this.FullName = `${objPerson.FirstName} ${objPerson.LastName}`;	
	}
}