import { FilmAppPage } from './app.po';

describe('film-app App', () => {
  let page: FilmAppPage;

  beforeEach(() => {
    page = new FilmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
