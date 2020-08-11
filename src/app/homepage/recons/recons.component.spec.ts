import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconsComponent } from './recons.component';

describe('ReconsComponent', () => {
  let component: ReconsComponent;
  let fixture: ComponentFixture<ReconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
