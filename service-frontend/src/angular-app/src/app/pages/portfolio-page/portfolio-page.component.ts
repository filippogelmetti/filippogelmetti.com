import { Component } from '@angular/core';
import { portfolioData } from 'src/data/_portfolio-data';
import { Portfolio } from 'src/domain/models/portfolio';
import { PortfolioCardComponent } from '../../components/portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-portfolio-page',
  imports: [PortfolioCardComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
})
export class PortfolioPageComponent {
  public portfolio: Portfolio[] = portfolioData;
}
