import { Component, inject } from '@angular/core';

import { OaService } from '../oa.service';

@Component({
	selector: 'app-oa',
	imports: [],
	templateUrl: './oa.component.html',
	styles: ``
})
export class OaComponent {
	oa: OaService = inject(OaService)

	demoLoader() {
		this.oa.loader().show()

		setTimeout(() => {
			this.oa.loader().hide()

			this.oa.toast().success('Loader works perfect')
		}, 2500);
	}

	onOk() {
		console.log('on success')

		this.oa.toast().success('OK, proceed...')
	}

	onCancel() {
		console.log('on error')

		this.oa.toast().error('Cancelled')
	}

	demoDialog() {
		// full implementation, but since OA v2 there are 'succint' implementations, check the repo
		this.oa.dialog().deploy({
			title: 'ALERT',
			message: 'Are you sure?'
		}, () => {
			this.onOk()
		}, () => {
			this.onCancel()
		})
	}

	demoToast() {
		this.oa.toast().warning('This the WARNING method of Toast!')
	}
}
