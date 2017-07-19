import { Switchboard2Page } from './app.po';

describe('switchboard2 App', () => {
  let page: Switchboard2Page;

  beforeEach(() => {
    page = new Switchboard2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
