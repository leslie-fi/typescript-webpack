import { Router } from './Router';

export class Main {
  private router: Router = new Router();

  public constructor() {
    console.log(`constructed new instance of program`);
  }

  public launchApp() {
    this.router.handleRequest();
  }
}

new Main().launchApp();
