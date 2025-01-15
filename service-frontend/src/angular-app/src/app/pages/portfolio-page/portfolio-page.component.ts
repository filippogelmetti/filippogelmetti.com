import { Component } from '@angular/core';
import { portfolioData } from 'src/app/data/_portfolio-data';
import { Portfolio } from 'src/app/domain/models/portfolio';

@Component({
  selector: 'app-portfolio-page',
  imports: [],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
})
export class PortfolioPageComponent {
  public portfolio: Portfolio[] = portfolioData;
}
