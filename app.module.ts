import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeShowAllComponent } from './home-show-all/home-show-all.component';
import { SafePipe } from './safe.pipe';
import { HttpModule } from "@angular/http";
import { DataProviderService } from "./data-provider.service";
import { LatestMovieComponent } from './latest-movie/latest-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeShowAllComponent,
    SafePipe,
    LatestMovieComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
