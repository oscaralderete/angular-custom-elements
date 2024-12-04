import { Component, Input } from '@angular/core';

@Component({
	selector: '[logo]',
	imports: [],
	template: `
	<svg [class]="class" viewBox="0 0 224 139" xmlns="http://www.w3.org/2000/svg" width="224" height="139">
		<defs>
			<filter id="filter1" x="-100%" y="-100%" width="300%" height="300%">
				<feOffset result="out" in="SourceGraphic" dx="0" dy="0"/>
				<feColorMatrix result="out" in="out" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.651 0"/>
				<feGaussianBlur result="out" in="out" stdDeviation="3"/>
				<feBlend in="SourceGraphic" in2="out" mode="normal" result="Drop_Shadow1"/>
			</filter>
		</defs>
		<path id="O" d="M 4 61.7 C 4 81.1267 12.9906 98.4538 27.04 109.744 C 34.7327 105.9165 42.7258 102.5866 50.976 99.8 C 35.6663 93.9204 24.8 79.0799 24.8 61.7 C 24.8 39.1665 43.0666 20.9 65.6 20.9 C 88.1334 20.9 106.4 39.1665 106.4 61.7 C 106.4 72.9719 101.8293 83.1759 94.44 90.56 C 100.482 89.991 106.6064 89.7 112.8 89.7 C 115.3481 89.7 117.8843 89.7504 120.408 89.848 C 124.7493 81.4114 127.2 71.8414 127.2 61.7 C 127.2 27.6789 99.6212 0.1 65.6 0.1 C 31.5788 0.1 4 27.6789 4 61.7 Z" fill="#8e7443"/>
		<path id="A" d="M 148 0.1 L 95.256 90.348 C 100.5123 89.9191 105.8311 89.7 111.2 89.7 C 114.0948 89.7 116.9729 89.7622 119.836 89.888 L 148 41.7 L 184.452 104.072 C 197.0464 109.2444 208.9523 115.7099 220 123.3 L 148 0.1 Z" fill="#e2c078"/>
		<path id="arc" filter="url(#filter1)" d="M 220.8 123.3 C 189.9763 102.1232 152.4638 89.7 112 89.7 C 71.5363 89.7 34.0238 102.1232 3.2 123.3 L 4.988 123.3 C 33.7 103.2 74.2551 97.6 112.1 97.6 C 149.9448 97.6 192.4 104.2 219.012 123.3 L 220.8 123.3 Z" fill="#ccc"/>
	</svg>
  `,
	styles: ``
})
export class LogoComponent {
	@Input() class = '';
}
