import { TestBed } from '@angular/core/testing';

import { IstarwarsInterceptor } from './istarwars.interceptor';

describe('IstarwarsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IstarwarsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IstarwarsInterceptor = TestBed.inject(IstarwarsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
