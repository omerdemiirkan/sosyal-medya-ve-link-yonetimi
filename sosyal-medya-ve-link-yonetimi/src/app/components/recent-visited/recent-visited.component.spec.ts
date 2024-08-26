import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentVisitedComponent } from './recent-visited.component';

describe('RecentVisitedComponent', () => {
  let component: RecentVisitedComponent;
  let fixture: ComponentFixture<RecentVisitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentVisitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentVisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
