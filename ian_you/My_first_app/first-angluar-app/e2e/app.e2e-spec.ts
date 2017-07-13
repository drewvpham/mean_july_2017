import { FirstAngluarAppPage } from './app.po';

describe('first-angluar-app App', () => {
  let page: FirstAngluarAppPage;

  beforeEach(() => {
    page = new FirstAngluarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
