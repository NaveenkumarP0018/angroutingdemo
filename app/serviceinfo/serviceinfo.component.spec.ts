import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceinfoComponent } from './serviceinfo.component';

describe('ServiceinfoComponent', () => {
  let component: ServiceinfoComponent;
  let fixture: ComponentFixture<ServiceinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
