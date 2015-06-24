'use strict';

const FACTORY = new WeakMap();

export default class PersonController {
	/* @ngInject */
	constructor(PersonFactory){
		FACTORY.set(this, PersonFactory);
		
		let objPerson = FACTORY.get(this).getPerson();
		this.FullName = `${objPerson.FirstName} ${objPerson.LastName}`;	
	}
}