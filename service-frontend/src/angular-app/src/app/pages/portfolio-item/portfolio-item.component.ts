import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { portfolioData } from '@data/_portfolio-data';
import { Portfolio } from '@domain/models/portfolio';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
  imports: [GalleryComponent],
})
export class PortfolioItemComponent {
  public portfolio: Portfolio[] = portfolioData;
  public portfolioItem: Portfolio | undefined;

  public isGalleryOpen = signal(false);
  public galleryImage = signal('');

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.portfolioItem = this.portfolio.find((item) => item.slug === slug);
      if (!this.portfolioItem) {
        console.error(`Portfolio item with slug "${slug}" not found.`);
        this.router.navigate(['/404']); // Redirect to 404 page
        return; // Important: Exit the subscription to prevent further execution
      }
    });
  }

  getScreenshotNumbers(): number {
    return this.portfolioItem?.nrOfScreenshots || 0;
  }

  get formattedDate(): string {
    if (!this.portfolioItem?.date) {
      return 'No Date Available';
    }
    try {
      const date = new Date(this.portfolioItem.date);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
    } catch (error) {
      console.error('Invalid date format:', this.portfolioItem.date, error);
      return 'Invalid Date'; // Handle invalid date strings
    }
  }
}
