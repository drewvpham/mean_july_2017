import { EventListenersPage } from './app.po';

describe('event-listeners App', () => {
  let page: EventListenersPage;

  beforeEach(() => {
    page = new EventListenersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
