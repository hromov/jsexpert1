import { PhonerPage } from './app.po';

describe('phoner App', () => {
  let page: PhonerPage;

  beforeEach(() => {
    page = new PhonerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
