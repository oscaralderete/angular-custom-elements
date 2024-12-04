import { Type } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { SwiperComponent } from './swiper/swiper.component';
import { OaComponent } from './oa/oa.component';
import { Page404Component } from './page404/page404.component';
import { Routes } from "@angular/router";

export const links = [
	{
		path: '',
		component: HomeComponent,
		label: 'Home',
		onMenu: true,
	},
	{
		path: 'swiper',
		component: SwiperComponent,
		label: 'Swiper',
		onMenu: true,
	},
	{
		path: 'oa',
		component: OaComponent,
		label: 'OA',
		onMenu: true,
	},
	{
		path: '**',
		component: Page404Component,
		label: 'Page404',
		onMenu: false,
	},
]

export let getRoutes = () => {
	let routes: Routes = [];

	links.filter(i => {
		routes.push({
			path: i.path,
			component: i.component,
		})
	})

	return routes;
}
