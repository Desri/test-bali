import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ImageModule, CardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listArticleFinancial: any[] = [];
  listArticleTechnology: any[] = [];
  listArticleFashion: any[] = [];
  listArticleArts: any[] = [];
  listArticleBusiness: any[] = [];
  listArticleEditorial: any[] = [];

  constructor(private apiService: ApiService) {}


  async ngOnInit() {
    // try {
    //   this.listArticleFinancial = await this.apiService.getArticleFinancial();
    // } catch (error) {
    //   console.error('Error fetching posts', error);
    // };

    // try {
    //   this.listArticleTechnology = await this.apiService.getArticleTechnology();
    // } catch (error) {
    //   console.error('Error fetching posts', error);
    // };
    
    await this.apiService.getArticleFinancial()
      .then(response => {
        this.listArticleFinancial = response.response.docs;
      })
      .catch(error => {
        console.error('Error fetching posts', error);
      });

    await this.apiService.getArticleTechnology()
      .then(response => {
        this.listArticleTechnology = response.response.docs;
      })
      .catch(error => {
        console.error('Error fetching posts', error);
      });

    await this.apiService.getArticleFashion()
      .then(response => {
        this.listArticleFashion = response.response.docs;
      })
      .catch(error => {
        console.error('Error fetching posts', error);
      });

    await this.apiService.getArticleArts()
      .then(response => {
        this.listArticleArts = response.response.docs;
      })
      .catch(error => {
        console.error('Error fetching posts', error);
      });

    await this.apiService.getArticleBusiness()
      .then(response => {
        this.listArticleBusiness = response.response.docs;
      })
      .catch(error => {
        console.error('Error fetching posts', error);
      });

    await this.apiService.getArticleEditorial()
      .then(response => {
        this.listArticleEditorial = response.response.docs;
      })
      .catch(error => {
        console.error('Error fetching posts', error);
      });

  }
}
