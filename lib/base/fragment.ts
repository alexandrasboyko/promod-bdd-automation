import type {PromodElementType} from 'promod/built/interface';
import {$} from '../../lauch/engine'
import { waitForCondition } from 'sat-utils';

class BaseFragment {
	//рутовий елемент в межах якого ми шукаємо дочірні елементи
	root: PromodElementType;

	constructor(root: string | PromodElementType) {
		this.root = typeof root === 'string' ? $(root) : root;
	}

	async waitForFragmentReady() {
		await waitForCondition(async () => await this.root.isDisplayed(),
			{
				timeout: 7500,
				message: () => `${this.constructor.name} is not visible`
			})
	};

	async sendKeys(data: {[k: string]: any}) {
		await this.waitForFragmentReady();
		const dataKeys = Object.keys(data);


		for (const key of dataKeys) {
			const value = data[key];
			await this[key].sendKeys(value);
		}

	}
}

export {BaseFragment}