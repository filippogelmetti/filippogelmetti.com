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
  isGalleryOpen = signal(false);
  currentImageIndex = signal(0);

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

  openGallery(index: number): void {
    this.currentImageIndex.set(index);
    this.isGalleryOpen.set(true);
  }

  closeGallery(): void {
    this.isGalleryOpen.set(false);
  }

  nextImage(): void {
    if (this.currentImageIndex() < this.galleryImages().length - 1) {
      this.currentImageIndex.set(this.currentImageIndex() + 1);
    }
  }

  prevImage(): void {
    if (this.currentImageIndex() > 0) {
      this.currentImageIndex.set(this.currentImageIndex() - 1);
    }
  }

  get galleryImage() {
    return this.galleryImages()[this.currentImageIndex()] || '';
  }
}
