import { TestBed } from '@angular/core/testing';

import { CubeSQLiteService } from './sqlite-db.service';

describe('SqliteDBService', () => {
  let service: CubeSQLiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubeSQLiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
