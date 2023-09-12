
import {BaseFragment, Button, Input} from '../../../../lib'

class LoginFragment extends BaseFragment {
	//рутовий елемент в межах якого ми шукаємо дочірні елементи
	username: Input;
	password: Input;
	signIn: Button;

  constructor() {
    super('.login_form', 'Login Form');
		this.username = this.init(this.root.$$('input').get(0), 'Username input', Input);
		this.password = this.init(this.root.$$('input').get(1), 'Password input', Input);
		this.signIn = this.init(this.root.$('button'), 'Sign In button', Button);
	}
}

export {LoginFragment}