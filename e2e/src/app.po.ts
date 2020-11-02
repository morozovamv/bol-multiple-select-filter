import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(
      by.css('app-root app-product-group .container .title')
    ).getText() as Promise<string>;
  }

  getSearchInput() {
    return element(
      by.css('app-root app-product-group app-search-input .container input')
    );
  }

  getCheckboxInputs() {
    return element(by.css('.checkboxes')).all(by.css('input'));
  }

  getCheckboxHosts() {
    return element.all(by.css('app-checkbox'));
  }
}
