import { USTimezoneDisplayPage } from './app.po';

describe('us-timezone-display App', () => {
  let page: USTimezoneDisplayPage;

  beforeEach(() => {
    page = new USTimezoneDisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
