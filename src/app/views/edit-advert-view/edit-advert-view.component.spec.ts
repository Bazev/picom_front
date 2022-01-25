import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdvertViewComponent } from './edit-advert-view.component';

describe('EditAdvertViewComponent', () => {
  let component: EditAdvertViewComponent;
  let fixture: ComponentFixture<EditAdvertViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdvertViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdvertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
