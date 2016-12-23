import { CarouselAngularPage } from './app.po';

describe('carousel-angular App', function() {
  let page: CarouselAngularPage;

  beforeEach(() => {
    page = new CarouselAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
