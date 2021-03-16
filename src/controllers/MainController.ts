import { loremText } from '../utils';
import { BaseController } from './BaseController';

export class MainController extends BaseController {
  private title = this.createElement('h2', 'Welcome to our home page!');
  private article = this.createElement('article', loremText);
  private button = this.createElement(
    'button',
    'Login',
    () => {
      this.router.switchToLoginView()
    });
  private button2 = this.createElement(
    'button',
    'curious?',
    () => {
      document.body.classList.toggle('show-gif');
    }
  );

  public createView(): HTMLElement {
    this.title.classList.add('title');
    this.button.classList.add('login-btn');

    return this.container;
  }
  
}
