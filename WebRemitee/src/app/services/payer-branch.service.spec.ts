import { TestBed } from '@angular/core/testing';

import { PayerBranchService } from './payer-branch.service';

describe('PayerBranchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayerBranchService = TestBed.get(PayerBranchService);
    expect(service).toBeTruthy();
  });
});
