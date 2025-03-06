import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TasksModule,
    StoreModule.forRoot({}), // Store global
    EffectsModule.forRoot([]), // Efectos globales
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }) // DevTools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }