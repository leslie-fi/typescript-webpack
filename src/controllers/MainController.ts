
export class MainController {

  public createView(): HTMLDivElement {
    const container = document.createElement('div');

    const title = document.createElement('h2')
    title.innerText = 'Welcome to our home page!';

    const article = document.createElement('article')
    article.innerText = "Imagine a combination of OWL and SMIL. Without efficient, transparent bloatware, you will lack architectures. In order to assess the 3rd generation blockchain’s ability to whiteboard without lessening our power to syndicate. Our end-to-end feature set is unparalleled, but our plug-and-play re-purposing and easy operation is invariably considered a remarkable achievement. Spriti introduced new capabilities to the awards page of the pudding is in the eating' not only to our content but our strategic angel investors and user-proof configuration is usually considered an amazing achievement. Have you ever been pressured to embrace your revolutionary feature set? Free? We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our plug-and-play re-purposing and easy use is frequently considered a remarkable achievement taking into account this month's financial state of things! If all of this comes off as mixed-up to you, that's because it is! If you target efficiently, you may also reintermediate magnetically. In order to assess the 3rd generation blockchain’s ability to whiteboard without lessening our power to deliver. Do you have a virally-distributed plan of action for managing emerging partnerships? Without data hygiene supervising, you will lack affiliate-based compliance. It sounds wonderful, but it's 100 percent accurate! The experiences factor is compelling."

    const button = document.createElement('button');
    button.innerText = 'Login';

    container.append(title, article, button);
    return container
  }
}