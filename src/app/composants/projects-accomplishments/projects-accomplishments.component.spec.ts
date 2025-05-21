import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAccomplishmentsComponent } from './projects-accomplishments.component';

describe('ProjectsAccomplishmentsComponent', () => {
  let component: ProjectsAccomplishmentsComponent;
  let fixture: ComponentFixture<ProjectsAccomplishmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsAccomplishmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsAccomplishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
