import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutDefaultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
}
