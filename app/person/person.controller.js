'use strict';

const FACTORY = new WeakMap();

class PersonController {
	constructor(PersonFactory){
		FACTORY.set(this, PersonFactory);
		
		let objPerson = FACTORY.get(this).getPerson();
		this.FullName = `${objPerson.FirstName} ${objPerson.LastName}`;	
	}
}

PersonController.$inject = ['PersonFactory'];

export default PersonController;