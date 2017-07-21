import { PowerLevelsAppPage } from './app.po';

describe('power-levels-app App', () => {
  let page: PowerLevelsAppPage;

  beforeEach(() => {
    page = new PowerLevelsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
