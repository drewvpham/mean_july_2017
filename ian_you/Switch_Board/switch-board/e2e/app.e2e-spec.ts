import { SwitchBoardPage } from './app.po';

describe('switch-board App', () => {
  let page: SwitchBoardPage;

  beforeEach(() => {
    page = new SwitchBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
