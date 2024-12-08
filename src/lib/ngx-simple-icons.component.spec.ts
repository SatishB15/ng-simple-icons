import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleIconsComponent } from './ngx-simple-icons.component';

describe('NgxSimpleIconsComponent', () => {
  let component: NgxSimpleIconsComponent;
  let fixture: ComponentFixture<NgxSimpleIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxSimpleIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSimpleIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
