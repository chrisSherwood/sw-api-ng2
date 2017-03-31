import { SwApiPage } from './app.po';

describe('sw-api App', () => {
  let page: SwApiPage;

  beforeEach(() => {
    page = new SwApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
