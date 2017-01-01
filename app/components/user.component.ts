import { Component } from '@angular/core';

@Component({
	selector: 'user',
	template: `
	<h2>Hello {{name}}</h2>
	<p><strong>Email:</strong> {{email}}</p>
	<p><strong>Address:</strong> {{address.street}} {{address.city}} {{address.country}}</p>
	<button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
	<div *ngIf="showHobbies">
		<h3>Hobbies</h3>
		<ul>
			<li *ngFor="let hobby of hobbies">{{hobby}}</li>
		</ul>
	</div>
	
	`
})
export class UserComponent {
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	toggleText: string;

	constructor(){
		this.name = 'Jesse Soldat';
		this.email = 'jlab@jlab.com';
		this.address = { 
			street: '775 Twin Dr.',
			city: 'Bangkok',
			country: 'Thailand'
		}
		this.hobbies = ['coding', 'manga', 'travel'];
		this.showHobbies = false;
	}

	toggleHobbies(){
		console.log('toggleHobbies')
		if(this.showHobbies === true){
			this.showHobbies = false;

		} else {
			this.showHobbies = true;

		}
	}
}
	
	interface address {
		street: string;
		city: string;
		state: string;
	}