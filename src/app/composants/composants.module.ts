import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CompletPageComponent } from './complet-page/complet-page.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { SkillsQualificationsComponent } from './skills-qualifications/skills-qualifications.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ProjectsAccomplishmentsComponent } from './projects-accomplishments/projects-accomplishments.component';
import { EducationComponent } from './education/education.component';
import { CertificationComponent } from './certification/certification.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CompletPageComponent,
    SocialNetworksComponent,
    SkillsQualificationsComponent,
    WorkHistoryComponent,
    ProjectsAccomplishmentsComponent,
    EducationComponent,
    CertificationComponent
  ],
  imports: [
    CommonModule
  ]
  , exports: [

    CompletPageComponent
  ]
})
export class ComposantsModule { }
