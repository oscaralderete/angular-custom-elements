import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})
export class OaService {
	// tags oa-loader, oa-dialogs & oa-toast must be declared in index.html
	_l = document.querySelector('oa-loader') as any
	_d = document.querySelector('oa-dialogs') as any
	_t = document.querySelector('oa-toast') as any

	loader() {
		return this._l
	}

	dialog() {
		return this._d
	}

	toast() {
		return this._t
	}
}
