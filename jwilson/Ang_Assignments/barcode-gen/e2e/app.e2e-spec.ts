import { BarcodeGenPage } from './app.po';

describe('barcode-gen App', () => {
  let page: BarcodeGenPage;

  beforeEach(() => {
    page = new BarcodeGenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
