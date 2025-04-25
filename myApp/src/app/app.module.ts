import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component'; // Importing ChartsComponent
import { NgChartsModule } from 'ng2-charts'; // Importing NgChartsModule

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent // Declare ChartsComponent here
  ],
  imports: [
    BrowserModule,
    NgChartsModule // Import the NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
