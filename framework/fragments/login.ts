import type {PromodElementType} from 'promod/built/interface';
import {BaseFragment} from '../../lib'

class LoginFragment extends BaseFragment {
	//рутовий елемент в межах якого ми шукаємо дочірні елементи
	username: PromodElementType;
	password: PromodElementType;
	signIn: PromodElementType;

  constructor() {
    super('.login_form');
		this.username = this.root.$$('input').get(0);
		this.password = this.root.$$('input').get(1);
		this.signIn = this.root.$('button');
	}


	async login(data: {username?: string; password?: string}) {
		await this.waitForFragmentReady();
    await this.sendKeys(data);
		await this.signIn.click();
	}
}

export {LoginFragment}