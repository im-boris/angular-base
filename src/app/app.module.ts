import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerLayoutComponent } from './layout/containers/container.layout.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContainerLayoutComponent,
    SideMenuComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
