import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MissionfilterComponent,
    MissionlistComponent,
    MissiondetailsComponent,
    TruncatePipe // Properly declared here (non-standalone)
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
