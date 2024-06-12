import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Make the service available throughout the application
})
export class AssetService {
  constructor(private http: HttpClient) {}

  getManifest() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.get<any>('src/manifest.webmanifest');
  }

  getImage(imageName: string) {
    return `src/assets/icons/${imageName}`; // Return a URL string
  }
}
