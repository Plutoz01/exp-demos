import { ExpDemosPage } from './app.po';

describe('exp-demos App', () => {
  let page: ExpDemosPage;

  beforeEach(() => {
    page = new ExpDemosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
