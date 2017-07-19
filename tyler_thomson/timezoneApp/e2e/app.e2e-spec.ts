import { TimezoneAppPage } from './app.po';

describe('timezone-app App', () => {
  let page: TimezoneAppPage;

  beforeEach(() => {
    page = new TimezoneAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
