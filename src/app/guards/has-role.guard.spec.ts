import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HasRoleGuard } from './has-role.guard';

describe('HasRoleGuard', () => {
  let guard: HasRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    guard = TestBed.inject(HasRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
