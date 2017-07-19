import { Barcode2Page } from './app.po';

describe('barcode2 App', () => {
  let page: Barcode2Page;

  beforeEach(() => {
    page = new Barcode2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
