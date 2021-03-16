import { LoginService } from '../services/LoginService';
import { BaseController } from './BaseController';

export class LoginController extends BaseController {

  private loginService = new LoginService()
  private header = this.createElement('header');
  private userField = this.createElement('div');
  private userLabel = this.createElement('label', 'Username:');
  private userInput = this.createElement('input');
  private passwordField = this.createElement('div');
  private pwLabel = this.createElement('label', 'Password:');
  private pwInput = this.createElement('input');
  private formContainer = this.createElement('div')
  // private br = this.createElement('br')

  private errorLabel = this.createElement('label', 'error');

  private loginButton = this.createElement('button', 'Login', async () => {
    if (this.userInput.value && this.pwInput.value) {
      this.resetErrorLabel();
      const result = await this.loginService.login(this.userInput.value, this.pwInput.value);
      console.log(result)
      if (result) {
        this.router.switchToDashboardView(result)
      } else {
        this.showErrorLabel(`Invalid username or password!`)
      }
    } else {
      this.showErrorLabel('Missing username and/or password')
    }
  });

  public createView(): HTMLElement {
    this.resetErrorLabel();

    this.header.innerHTML = `
      <h2 class='title'>Please Login to continue</h2>
    `
    this.userField.classList.add('login-form');

    this.userInput.type = 'text';
    this.userInput.name = 'username';
    this.userField.append(this.userLabel, this.userInput);

    this.passwordField.classList.add('login-form');
    this.pwInput.type = 'password';
    this.passwordField.append(this.pwLabel, this.pwInput)

    this.formContainer.classList.add('form');

    this.loginButton.classList.add('login-btn');

    this.formContainer.append(this.userField, this.passwordField, this.loginButton);

    return this.container;
  }

  private resetErrorLabel() {
    this.errorLabel.style.color = 'red';
    this.errorLabel.style.visibility = 'hidden';
  }

  private showErrorLabel(errorMessage: string) {
    this.errorLabel.textContent = errorMessage;
    this.errorLabel.style.visibility = 'visible';
  }
}
