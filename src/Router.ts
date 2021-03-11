import { LoginController } from './controllers/LoginController';
import { MainController } from './controllers/MainController';

export class Router {
  private rootElement = document.getElementById('main');

  public handleRequest() {
    switch (this.getRoute()) {
      case '/login':
        if (this.rootElement) {
          const loginController: LoginController = new LoginController();
          this.rootElement.append(loginController.createView());
        }
        break;
      default:
        if (this.rootElement) {
          const mainController: MainController = new MainController();
          this.rootElement.append(mainController.createView());
        }
        break;
    }
    console.log(`handling request for ${this.getRoute()}`);
  }

  private getRoute(): string {
    return window.location.pathname;
  }
}
