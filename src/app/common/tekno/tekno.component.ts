import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tekno',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ImageModule, CardModule, SkeletonModule, CommonModule],
  templateUrl: './tekno.component.html',
  styleUrl: './tekno.component.scss'
})
export class TeknoComponent {
  listArticleTechnology: any[] = [];

  key = 'U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe';
  apiUrl = 'https://api.nytimes.com/svc/topstories/v2';

  ngOnInit() {
    const fetchDataTekno = () => {
      fetch(`${this.apiUrl}/technology.json?api-key=${this.key}`)
        .then(response => response.json())
        .then(data => {
          this.listArticleTechnology = data.results
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    fetchDataTekno();
  }
}
