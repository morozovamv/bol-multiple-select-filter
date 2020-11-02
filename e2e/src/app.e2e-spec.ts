import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

const ADIDAS_INITIAL_POSITION = 2;

// TODO: it's better to use mock data
describe('MultipleSelectFilter', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display title', () => {
    expect(page.getTitleText()).toEqual('Productgroep');
  });

  it('should filter the list of groups by the value from the search input', () => {
    page.getSearchInput().sendKeys('accuboormachines');

    expect(page.getCheckboxInputs().getAttribute('id')).toEqual([
      'Accuboormachines',
    ]);
  });

  it('should move selected group on top of the list', () => {
    expect(
      page.getCheckboxInputs().get(ADIDAS_INITIAL_POSITION).getAttribute('id')
    ).toEqual('adidas');

    page.getCheckboxHosts().get(ADIDAS_INITIAL_POSITION).click();

    expect(page.getCheckboxInputs().first().getAttribute('id')).toEqual(
      'adidas'
    );

    browser.executeScript('window.sessionStorage.clear();');
  });

  it('should leave selected group on top of the list if the search input is changed', () => {
    page.getCheckboxHosts().get(ADIDAS_INITIAL_POSITION).click();
    page.getSearchInput().sendKeys('search query');

    expect(page.getCheckboxInputs().first().getAttribute('id')).toEqual(
      'adidas'
    );

    browser.executeScript('window.sessionStorage.clear();');
  });

  it('should select multiple groups', () => {
    page.getCheckboxHosts().get(5).click();
    page.getCheckboxHosts().get(5).click();

    // TODO: this step needs only to remove unselected items and count selected,
    // but the better solution is to count elements by input "checked" attribute
    page.getSearchInput().sendKeys('search query');

    expect(page.getCheckboxHosts().count()).toEqual(2);

    browser.executeScript('window.sessionStorage.clear();');
  });

  it('should leave selected group after refreshing the page', () => {
    page.getCheckboxHosts().get(ADIDAS_INITIAL_POSITION).click();
    browser.refresh();

    expect(page.getCheckboxInputs().first().getAttribute('id')).toEqual(
      'adidas'
    );

    browser.executeScript('window.sessionStorage.clear();');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
