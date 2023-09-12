import { BasePage, Collection } from '../../../lib';
import { MashineListRowFragment } from './fragments/machine.list.row';
import { MachineFiltersFragment } from './fragments/machines.filters';


class MachinesTablePage extends BasePage {
  private filters: MachineFiltersFragment;
  private machines;

  constructor() {
    super('#table_page', 'Machine Table Page');
    this.filters = this.init('xpath=//*[@class="table filtering"]/parent::*', 'Filters', MachineFiltersFragment)
    this.machines = this.init(
      'div.machies_list_section > table > tbody > tr', 'Machine row item', Collection,
      MashineListRowFragment);
  }
}

export { MachinesTablePage };
