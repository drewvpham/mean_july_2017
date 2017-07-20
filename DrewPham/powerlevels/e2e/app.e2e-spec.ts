import { PowerlevelsPage } from './app.po';

describe('powerlevels App', () => {
  let page: PowerlevelsPage;

  beforeEach(() => {
    page = new PowerlevelsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
