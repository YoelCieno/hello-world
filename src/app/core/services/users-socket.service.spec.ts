import { TestBed, inject } from '@angular/core/testing';

import { UsersSocketService } from './users-socket.service';

describe('UsersSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersSocketService]
    });
  });

  it('should be created', inject([UsersSocketService], (service: UsersSocketService) => {
    expect(service).toBeTruthy();
  }));
});
