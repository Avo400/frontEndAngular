import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseViewComponent } from './adresse-view.component';

describe('AdresseViewComponent', () => {
  let component: AdresseViewComponent;
  let fixture: ComponentFixture<AdresseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdresseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
