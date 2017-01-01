import { Component } from '@angular/core';

@Component({
	selector: 'user',
	template: `
	<h3>Hello {{name}}</h3>
	<p><strong>Email:</strong> {{email}}</p>
	<p><strong>Address:</strong> {{address.street}} {{address.city}} {{address.country}}</p>
	`
})
export class UserComponent {
	name = 'Jesse Soldat';
	email = 'jlab@jlab.com';
	address = { 
		street: '775 Twin Dr.',
		city: 'Bangkok',
		country: 'Thailand'
	}
}