import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'layout-default',
  imports: [
    FooterComponent,
    HeaderComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
  ],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.scss',
})
export class LayoutDefaultComponent {}
