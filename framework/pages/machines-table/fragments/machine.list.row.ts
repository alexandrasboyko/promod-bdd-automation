import type { PromodElementType } from 'promod/built/interface';
import { BaseFragment, Text } from '../../../../lib';

class MashineListRowFragment extends BaseFragment{
  manufacturer: Text;
  workVolume: Text;
  length: Text;
  width: Text;
  mass: Text;
  tracktorPower: Text;
  price: Text;

  constructor(selector, name) {
    super(selector, name);

    this.manufacturer = this.init(this.root.$('td:nth-child(1) span'), 'Manufacturer', Text );
    this.workVolume = this.init(this.root.$('td:nth-child(2)'), 'Work Wolume', Text);
    this.length = this.init(this.root.$('td:nth-child(3)'), 'Length', Text);
    this.width = this.init(this.root.$('td:nth-child(4)'), 'Width', Text);
    this.mass = this.init(this.root.$('td:nth-child(5)'), 'Mass', Text);
    this.tracktorPower = this.init(this.root.$('td:nth-child(6)'), 'Tracktor Power', Text);
    this.price = this.init(this.root.$('td:nth-child(7)'), 'Price', Text);
  };


}

export { MashineListRowFragment };
