import { Component, computed, input, signal } from '@angular/core';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  portfolioSubdirPath: any = input();
  portfolioNrOfScreenshots: any = input();
  public isGalleryOpen = signal(false);
  public galleryImage = signal('');
  galleryImages = computed(() => {
    return Array.from(
      { length: this.portfolioNrOfScreenshots() },
      (_, i) =>
        `/portfolio-images/screenshots/${this.portfolioSubdirPath()}/${
          i + 1
        }.jpg`
    );
  });

  constructor(private platform: PlatformService) {}

  openGallery(imageUrl: string): void {
    console.log(`Open gallery ${imageUrl}`);
    this.galleryImage.set(imageUrl);
    this.isGalleryOpen.set(true);
  }

  ngOnDestroy(): void {
    if (this.platform.isBrowser()) {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  closeGallery(): void {
    this.isGalleryOpen.set(false);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.isGalleryOpen()) {
      this.closeGallery();
    }
  };
}
