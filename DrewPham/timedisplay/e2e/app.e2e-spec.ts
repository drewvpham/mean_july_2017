import { TimedisplayPage } from './app.po';

describe('timedisplay App', () => {
  let page: TimedisplayPage;

  beforeEach(() => {
    page = new TimedisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
