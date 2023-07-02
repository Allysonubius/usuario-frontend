import { TestBed } from '@angular/core/testing';

import { NoCacheInterceptor } from './no-cache.interceptor';

describe('NoCacheInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NoCacheInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NoCacheInterceptor = TestBed.inject(NoCacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
