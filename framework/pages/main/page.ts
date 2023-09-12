import {BasePage, Collection} from '../../../lib';
import { LoginFragment } from './fragments/login';

class MainPage extends BasePage {
	login;
  constructor() {
		super('#main_page', 'Main Page');
		this.login = this.init('.login_form', 'Login form', LoginFragment)
  }
}

export { MainPage };
