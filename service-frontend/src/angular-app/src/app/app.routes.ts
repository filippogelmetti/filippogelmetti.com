import { Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { AboutPageComponent } from '@pages/about-page/about-page.component';
import { ClientsPageComponent } from '@pages/clients-page/clients-page.component';
import { NotFoundPageComponent } from '@pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from '@pages/contact-page/contact-page.component';
import { HonorsPageComponent } from '@pages/honors-page/honors-page.component';
import { PortfolioPageComponent } from '@pages/portfolio-page/portfolio-page.component';
import { PortfolioItemComponent } from '@pages/portfolio-item/portfolio-item.component';
import { ServicesPageComponent } from '@pages/services-page/services-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'clients',
    component: ClientsPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'honors',
    component: HonorsPageComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent,
  },
  {
    path: 'services',
    component: ServicesPageComponent,
  },
  {
    path: 'portfolio/:slug',
    component: PortfolioItemComponent,
  },
  { path: '**', component: NotFoundPageComponent },
];
