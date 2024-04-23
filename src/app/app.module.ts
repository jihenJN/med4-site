import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ValueComponent } from './value/value.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FAQComponent } from './faq/faq.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [AppComponent, FooterComponent, NavbarComponent, HomeComponent, AboutComponent, ValueComponent, ServicesComponent, PartnersComponent, PricingComponent, BlogsComponent, FAQComponent, TeamComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
