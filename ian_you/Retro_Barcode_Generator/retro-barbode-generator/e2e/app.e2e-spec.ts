import { RetroBarbodeGeneratorPage } from './app.po';

describe('retro-barbode-generator App', () => {
  let page: RetroBarbodeGeneratorPage;

  beforeEach(() => {
    page = new RetroBarbodeGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
