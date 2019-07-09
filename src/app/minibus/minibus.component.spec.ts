import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinibusComponent } from './minibus.component';

describe('MinibusComponent', () => {
  let component: MinibusComponent;
  let fixture: ComponentFixture<MinibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
