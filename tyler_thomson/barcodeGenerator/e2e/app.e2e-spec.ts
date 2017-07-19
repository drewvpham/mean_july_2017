import { BarcodeGeneratorPage } from './app.po';

describe('barcode-generator App', () => {
  let page: BarcodeGeneratorPage;

  beforeEach(() => {
    page = new BarcodeGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
