import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  lastUpdate: string = 'April 2025'
  instagram: string = 'https://www.instagram.com/its5somehwere/'
  tiktok: string = 'https://www.tiktok.com/@yourusername'
}
