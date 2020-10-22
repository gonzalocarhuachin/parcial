import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './inicio/home/home.component';
import { MainBannerComponent } from './inicio/main-banner/main-banner.component';
import { DestacadoComponent } from './inicio/destacado/destacado.component';
import { DescripcionComponent } from './inicio/descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    AlumnosComponent,
    CursosComponent,
    HomeComponent,
    MainBannerComponent,
    DestacadoComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
