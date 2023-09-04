import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment } from '../../lib';

class MachineFiltersFragment extends BaseFragment {

	manufacturer:PromodElementType;
	workVolume:PromodElementType;
	price:PromodElementType;
	filterButton: PromodElementType;

	constructor() {
		super('xpath=//*[@class="table filtering"]/parent::*');
		this.manufacturer = this.root.$('.filtering input[placeholder="Виробник"]');
		this.workVolume = this.root.$(`.filtering input[placeholder="Робочий об'єм"]`);
		this.price = this.root.$('.filtering input[placeholder="Ціна"]');
		this.filterButton = this.root.$('xpath=.//*[text()="Фільтрувати"]');
	}
	//TODO
	async filter(data: {manufacturer?: string, workVolume?: string, price?:string}) {
		await this.sendKeys(data)
		await this.filterButton.click()
	}
}

export {
MachineFiltersFragment
}