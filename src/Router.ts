import { DashboardController } from './controllers/DashboardController';
import { LoginController } from './controllers/LoginController';
import { MainController } from './controllers/MainController';
import { SessionToken } from './models/AuthenticationModels';

export class Router {
  private rootElement = document.getElementById('main');

  private emptyContainer() {
    if (this.rootElement) {
      this.rootElement.innerHTML = ''
    }
  }
  public handleRequest() {
    this.rootElement && this.emptyContainer()
    switch (this.getRoute()) {
      case '/login':
        this.switchToLoginView()
        break;
      case '/dash':
        this.switchToDashboardView(undefined)
        break;
      default:
        this.switchToHomeView()
        break;
    }
    console.log(`handling request for ${this.getRoute()}`);
  }
  switchToDashboardView(sessionToken: SessionToken | undefined) {
    if (this.rootElement) {
      this.emptyContainer()
      const dashboardController: DashboardController = new DashboardController(this);
      if (sessionToken) {
        dashboardController.setSessionToken(sessionToken);
      }
      this.rootElement.append(dashboardController.createView());
    }
  }

  public switchToLoginView() {
    if (this.rootElement) {
      this.emptyContainer()
      const loginController: LoginController = new LoginController(this);
      this.rootElement.append(loginController.createView());
    }
  }
  public switchToHomeView() {
    if (this.rootElement) {
      this.emptyContainer()
      const mainController: MainController = new MainController(this);
      this.rootElement.append(mainController.createView());
    }
  }

  private getRoute(): string {
    return window.location.pathname;
  }

}
