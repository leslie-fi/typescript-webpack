export class LoginController {
  public createView(): HTMLElement {
    const container = document.createElement('div');

    const header = document.createElement('header');
    header.innerHTML = `
      <h2>Please Login to continue</h2>
    `;

    const userField = document.createElement('div');
    userField.innerHTML = `
      <label htmlFor="username">
        Username:
      </label>
      <input type="text" name="username"/>
    `;
    userField.classList.add('login-form');

    const passwordField = document.createElement('div');
    passwordField.innerHTML = `
      <label htmlFor="password">
        Password:
      </label>
      <input type="password" name="password"/>    
    `;
    passwordField.classList.add('login-form');

    const formContainer = document.createElement('div');
    formContainer.classList.add('form');

    const loginButton = document.createElement('button');
    loginButton.innerText = 'Login';

    formContainer.append(userField, passwordField, loginButton);

    container.append(header, formContainer);

    return container;
  }
}
