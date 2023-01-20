import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BannerComponent } from './components/banner/banner/banner.component';
import { ContactusComponent } from './components/contactus/contactus/contactus.component';
import { FunfactsComponent } from './components/funfacts/funfacts/funfacts.component';
import { HomeboxComponent } from './components/homebox/homebox/homebox.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { IntrovideoComponent } from './components/introvideo/introvideo/introvideo.component';
import { OurangelsComponent } from './components/ourangels/ourangels/ourangels.component';
import { OurblogComponent } from './components/ourblog/ourblog/ourblog.component';
import { OurportfolioComponent } from './components/ourportfolio/ourportfolio/ourportfolio.component';
import { OurserviceComponent } from './components/ourservice/ourservice/ourservice.component';
import { TestimonialComponent } from './components/testimonial/testimonial/testimonial.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'banner',component:BannerComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'funfacts',component:FunfactsComponent},
  {path:'homebox',component:HomeboxComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'introvideo',component:IntrovideoComponent},
  {path:'ourangels',component:OurangelsComponent},
  {path:'ourblog',component:OurblogComponent},
  {path:'ourportfolio',component:OurportfolioComponent},
  {path:'ourservice',component:OurserviceComponent},
  {path:'testimonial',component:TestimonialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
