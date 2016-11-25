import { OlapBoardPage } from './app.po';

describe('olap-board App', function() {
  let page: OlapBoardPage;

  beforeEach(() => {
    page = new OlapBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
