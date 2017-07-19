import { SwitchboardAppPage } from './app.po';

describe('switchboard-app App', () => {
  let page: SwitchboardAppPage;

  beforeEach(() => {
    page = new SwitchboardAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
