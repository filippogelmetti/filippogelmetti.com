import {
  Component,
  signal,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isMobile = signal(false);
  isMenuOpen = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile.set(window.innerWidth < 768);
      if (!this.isMobile()) {
        this.isMenuOpen.set(false);
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
}
