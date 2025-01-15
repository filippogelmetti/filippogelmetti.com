import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent {
  portfolioItem: any = input();
  isVisible = signal<boolean>(false);
  transitionDelay: string;

  constructor() {
    // Generate a random transition delay value between 0.2s and 1s
    this.transitionDelay = `${0.2 + Math.random() * 0.8}s`;
  }

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Element is intersecting');
          this.isVisible.set(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('app-portfolio-card')!);
  }
}
