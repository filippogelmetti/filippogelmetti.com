import { Component, ElementRef, input, signal } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent {
  portfolioItem: any = input();
  isVisible = signal<boolean>(false);
  transitionDelay: string;
  private observer: IntersectionObserver = new IntersectionObserver(() => {});

  constructor(private elementRef: ElementRef) {
    // Generate a random transition delay value between 0.2s and 1s
    this.transitionDelay = `${0.2 + Math.random() * 0.8}s`;
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Element is intersecting');
          this.isVisible.set(true);
          this.observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
    // Start observing the portfolio card element
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
