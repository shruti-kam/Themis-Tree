import { ThemisTreePage } from './app.po';

describe('themis-tree App', function() {
  let page: ThemisTreePage;

  beforeEach(() => {
    page = new ThemisTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
