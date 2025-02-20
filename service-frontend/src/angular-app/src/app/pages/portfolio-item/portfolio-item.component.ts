import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { portfolioData } from '@data/_portfolio-data';
import { Portfolio } from '@domain/models/portfolio';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
})
export class PortfolioItemComponent {
  public portfolio: Portfolio[] = portfolioData;
  public portfolioItem: Portfolio | undefined;

  public isGalleryOpen = signal(false);
  public galleryImage = signal('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platform: PlatformService
  ) {}

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

  ngOnDestroy(): void {
    if (this.platform.isBrowser()) {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  getScreenshotNumbers(): number[] {
    const numScreenshots = this.portfolioItem?.nrOfScreenshots || 0;
    return Array.from({ length: numScreenshots }, (_, i) => i);
  }

  openGallery(imageUrl: string): void {
    console.log('Open gallery');
    this.galleryImage.set(imageUrl);
    this.isGalleryOpen.set(true);
  }

  closeGallery(): void {
    this.isGalleryOpen.set(false);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.isGalleryOpen()) {
      this.closeGallery();
    }
  };

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
