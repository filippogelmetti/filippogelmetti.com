import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { portfolioData } from '@data/_portfolio-data';
import { Portfolio } from '@domain/models/portfolio';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
})
export class PortfolioItemComponent {
  public portfolio: Portfolio[] = portfolioData;
  public portfolioItem: Portfolio | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.portfolioItem = this.portfolio.find((item) => item.slug === slug);
      // if (!this.portfolioItem) {
      //   console.error(`Portfolio item with slug "${slug}" not found.`);
      // }
    });
  }
}
