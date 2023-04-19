import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeViewComponent } from './commande-view.component';

describe('CommandeViewComponent', () => {
  let component: CommandeViewComponent;
  let fixture: ComponentFixture<CommandeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
