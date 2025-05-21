import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsQualificationsComponent } from './skills-qualifications.component';

describe('SkillsQualificationsComponent', () => {
  let component: SkillsQualificationsComponent;
  let fixture: ComponentFixture<SkillsQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsQualificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
