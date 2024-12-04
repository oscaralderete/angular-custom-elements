import { Component } from '@angular/core';

import { links } from '../../links';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LogoComponent } from '../logo/logo.component';

@Component({
	selector: 'app-navigation',
	imports: [RouterLink, RouterLinkActive, LogoComponent],
	templateUrl: './navigation.component.html',
})
export class NavigationComponent {
	links = links.filter(i => i.onMenu)

	toggleMenu(e: Event) {
		// toggle menu on mobile view
		const x = document.querySelector('#menu-toggle') as HTMLInputElement

		x.click()
	}
}
