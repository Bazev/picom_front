import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsTableLineComponent } from './adverts-table-line.component';

describe('AdvertsTableLineComponent', () => {
  let component: AdvertsTableLineComponent;
  let fixture: ComponentFixture<AdvertsTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertsTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
