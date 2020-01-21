import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VillainInMemDataService } from './services/villain-in-mem-data.service';
import { ListVillainsComponent } from './components/list-villains/list-villains.component';
import { HttpClientVillainService } from './services/http-client-villain.service';

@NgModule({
  declarations: [
    AppComponent,
    ListVillainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ?
    [] : InMemoryWebApiModule.forRoot(VillainInMemDataService)
  ],
  providers: [HttpClientVillainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
