import { TestBed } from '@angular/core/testing';

import { LearnNotificationService } from './learn-notification.service';

describe('LearnNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearnNotificationService = TestBed.get(LearnNotificationService);
    expect(service).toBeTruthy();
  });
});
