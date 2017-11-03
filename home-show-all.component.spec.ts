import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowAllComponent } from './home-show-all.component';

describe('HomeShowAllComponent', () => {
  let component: HomeShowAllComponent;
  let fixture: ComponentFixture<HomeShowAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShowAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
