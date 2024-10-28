import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arts',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ImageModule, CardModule, SkeletonModule, CommonModule],
  templateUrl: './arts.component.html',
  styleUrl: './arts.component.scss'
})
export class ArtsComponent {
  listArticleArts: any[] = [];

  key = 'U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe';
  apiUrl = 'https://api.nytimes.com/svc/topstories/v2';

  ngOnInit() {
    const fetchDataArts = () => {
      fetch(`${this.apiUrl}/arts.json?api-key=${this.key}`)
        .then(response => response.json())
        .then(data => {
          this.listArticleArts = data.results
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    fetchDataArts();
  }
}
