import type { PromodElementType } from 'promod/built/interface';
import { Base } from './base';

class BaseFragment extends Base {
  //рутовий елемент в межах якого ми шукаємо дочірні елементи
  constructor(root: string | PromodElementType, name: string) {
    super(root, name);
  }
}

export { BaseFragment };
