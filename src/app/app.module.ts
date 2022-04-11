import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerLayoutComponent } from './layout/containers/container.layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TopBarComponent } from './layout/components/top-bar/top-bar.component';
import { SideNavbarComponent } from './layout/components/side-navbar/side-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerLayoutComponent,
    TopBarComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
