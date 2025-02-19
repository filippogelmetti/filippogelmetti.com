import { Component, ElementRef, input, signal } from '@angular/core';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent {
  portfolioItem: any = input();
  isVisible = signal<boolean>(false);
  transitionDelay: string;
  private observer: IntersectionObserver | undefined;

  constructor(
    private elementRef: ElementRef,
    private platform: PlatformService
  ) {
    // Generate a random transition delay value between 0.2s and 1s
    this.transitionDelay = `${0.2 + Math.random() * 0.8}s`;
  }

  ngAfterViewInit(): void {
    if (this.platform.isBrowser()) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            this.observer?.unobserve(entry.target);
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );
      this.observer.observe(this.elementRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
