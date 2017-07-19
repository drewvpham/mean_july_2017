import { RegisterFormPage } from './app.po';

describe('register-form App', () => {
  let page: RegisterFormPage;

  beforeEach(() => {
    page = new RegisterFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
