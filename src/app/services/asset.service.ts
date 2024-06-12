import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Make the service available throughout the application
})
export class AssetService {

  constructor(private http: HttpClient) {}

  getManifest() {
    return this.http.get<any>('public/manifest.webmanifest');
  }

  getImage(imageName: string) {
    return `public/icons/${imageName}`; // Return a URL string
  }
}