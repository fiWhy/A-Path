import { AngularPathPage } from './app.po';

describe('angular-path App', () => {
  let page: AngularPathPage;

  beforeEach(() => {
    page = new AngularPathPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
