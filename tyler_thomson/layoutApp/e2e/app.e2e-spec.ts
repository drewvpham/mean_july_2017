import { LayoutAppPage } from './app.po';

describe('layout-app App', () => {
  let page: LayoutAppPage;

  beforeEach(() => {
    page = new LayoutAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
