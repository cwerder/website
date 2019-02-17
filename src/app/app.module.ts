import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home.component';
import { ProjectsComponent } from './projects-component/projects.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JokesComponent } from './jokes/jokes.component';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavBarComponent,
    JokesComponent,
    IntroComponent,
    WorkComponent,
    EducationComponent,
    SkillsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
