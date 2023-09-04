import {provider} from '../framework';
import { expect } from 'chai';
import {sleep, lengthToIndexesArray, asyncMap} from 'sat-utils'
import { LoginFragment, MashineListRowFragment, MachineFiltersFragment } from '../framework/fragments';
import {Collection} from '../lib/base/collection';

const {browser} = provider;
const { $, $$ } = provider.elementsInterface;
const { waitForCondition } = provider.waiters;


describe('Login test suite', () => {
  beforeEach('Set up', async () => {
    await browser.get('http://localhost:4000');
    await waitForCondition(async () => await $('body').isPresent());
    await browser.executeScript(() => localStorage.clear());
    await browser.get('http://localhost:4000');
  });

	it.only('filter machines by manufacturer', async () => {
		const filterManufacturer = 'ITALMIX DUPLEX'
    await new LoginFragment().login({ username: 'admin', password: 'admin' });
    //await waitForCondition(async () => await $('#table_page').isDisplayed());

    // console.log(await new MashineListRowFragment(0).getMachineData());
    // console.log(await new MashineListRowFragment(1).getMachineData());

    await new MachineFiltersFragment().filter({manufacturer: filterManufacturer});
    const machinesCollection = new Collection('#table_page > div.machies_list_section > table > tbody > tr', MashineListRowFragment);

		const result = await machinesCollection.getData()

		result.forEach((machineData)=> expect (machineData.manufacturer).to.include(filterManufacturer))

  });
});
