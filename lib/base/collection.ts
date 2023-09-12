import {PromodElementsType} from 'promod/built/interface';

import { $$ } from '../../lauch/engine';

class Collection {
  roots: PromodElementsType;
  fragment;
  id: string;

  constructor(selector: string | PromodElementsType, name: string, fragment) {
    this.roots = typeof selector === 'string'? $$(selector): selector;
    this.fragment = fragment;
    this.id = name;
  }

  async getData(data: {[k: string]: null} = {}) {
    const FragmentClass = this.fragment;

    const result = await this.roots.map(async (el, index) => {
      const collectionFragmentInstance = new FragmentClass(el, `${this.id} ${index}`);
      const collectionFragmentData = await collectionFragmentInstance.getData(data);

      return collectionFragmentData; // це цілий ров у вигляді об*єкта з властивостями як у рові
    });

    return result; //це масив, який складається із тих ж ров-об*єктів
  }
}

export { Collection };
