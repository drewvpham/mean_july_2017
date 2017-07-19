import { FormsPracticePage } from './app.po';

describe('forms-practice App', () => {
  let page: FormsPracticePage;

  beforeEach(() => {
    page = new FormsPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
