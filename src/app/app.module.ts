import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// angular material imports
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { NumberComponent } from './number/number.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MainComponent } from './main/main.component';
import { SkillsetsComponent } from './skillsets/skillsets.component';
import { QuilificationComponent } from './quilification/quilification.component';
import { CloudageComponent } from './cloudage/cloudage.component';
import { GppComponent } from './gpp/gpp.component';
import { IgtComponent } from './igt/igt.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CodevianComponent } from './codevian/codevian.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, SidebarComponent, AboutComponent, NumberComponent, MainComponent, SkillsetsComponent, QuilificationComponent, CloudageComponent, GppComponent, IgtComponent, CodevianComponent],
  imports: [
    MatBottomSheetModule,
    MdbCarouselModule,
    BrowserModule,
    MatDialogModule,
    MatExpansionModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
  ],
  entryComponents:[NumberComponent,HomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
