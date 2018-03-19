import { TestBed, inject } from '@angular/core/testing';

import { ArticlesService } from './articles.service';

describe('ArticlesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesService]
    });
  });

  it('should be created', inject([ArticlesService], (service: ArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
