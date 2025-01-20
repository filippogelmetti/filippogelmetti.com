import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private platformId = inject(PLATFORM_ID);
  private server = isPlatformServer(this.platformId);

  isServer(): boolean {
    return this.server;
  }

  isBrowser(): boolean {
    return !this.server;
  }
}
