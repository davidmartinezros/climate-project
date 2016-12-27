import { ClimateProjectPage } from './app.po';

describe('climate-project App', function() {
  let page: ClimateProjectPage;

  beforeEach(() => {
    page = new ClimateProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
