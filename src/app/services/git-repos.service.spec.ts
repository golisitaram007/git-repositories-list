import { TestBed } from '@angular/core/testing';

import { GitReposService } from './git-repos.service';

describe('GitReposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitReposService = TestBed.get(GitReposService);
    expect(service).toBeTruthy();
  });
});
