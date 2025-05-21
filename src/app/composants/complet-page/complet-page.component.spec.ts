import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletPageComponent } from './complet-page.component';

describe('CompletPageComponent', () => {
  let component: CompletPageComponent;
  let fixture: ComponentFixture<CompletPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
