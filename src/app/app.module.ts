import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navbars/header/header.component';
import { FooterComponent } from './navbars/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BannerComponent } from './components/banner/banner/banner.component';
import { HomeboxComponent } from './components/homebox/homebox/homebox.component';
import { OurserviceComponent } from './components/ourservice/ourservice/ourservice.component';
import { OurportfolioComponent } from './components/ourportfolio/ourportfolio/ourportfolio.component';
import { OurangelsComponent } from './components/ourangels/ourangels/ourangels.component';
import { FunfactsComponent } from './components/funfacts/funfacts/funfacts.component';
import { TestimonialComponent } from './components/testimonial/testimonial/testimonial.component';
import { IntrovideoComponent } from './components/introvideo/introvideo/introvideo.component';
import { OurblogComponent } from './components/ourblog/ourblog/ourblog.component';
import { ContactusComponent } from './components/contactus/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomepageComponent,
    AboutusComponent,
    BannerComponent,
    HomeboxComponent,
    OurserviceComponent,
    OurportfolioComponent,
    OurangelsComponent,
    FunfactsComponent,
    TestimonialComponent,
    IntrovideoComponent,
    OurblogComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
