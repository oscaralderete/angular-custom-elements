import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	imports: [],
	templateUrl: './home.component.html',
})
export class HomeComponent {
	links = [
		{
			id: 1,
			url: 'https://github.com/oscaralderete/custom-elements-react',
			label: 'React',
		},
		{
			id: 2,
			url: 'https://github.com/oscaralderete/custom-elements-svelte',
			label: 'Svelte',
		},
		{
			id: 3,
			url: 'https://github.com/oscaralderete/custom-elements-vue',
			label: 'Vue',
		},
	]
}
