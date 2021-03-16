import { SessionToken } from '../models/AuthenticationModels';
import { BaseController } from './BaseController';
export class DashboardController extends BaseController {
  private sessionToken: SessionToken | undefined;

  public setSessionToken(sessionToken: SessionToken) {
    this.sessionToken = sessionToken;
  }
  public createView(): HTMLElement {
    this.createElement('h2', 'Dashboard controller')
    if (this.sessionToken) {
      this.createElement('label', `Welcome, ${this.sessionToken.username}`)
    } else {
      this.createElement('label', 'Please enjoy the public domain of this app!')
    }
    return this.container;
  }

}