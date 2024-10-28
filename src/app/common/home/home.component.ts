import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SkeletonModule } from 'primeng/skeleton';
// import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ImageModule, CardModule, ScrollPanelModule, SkeletonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listArticleFinancial: any[] = [];
  listArticleTechnology: any[] = [];
  listArticleFashion: any[] = [];
  listArticleMovies: any[] = [];
  listArticleWorld: any[] = [];
  listArticleArts: any[] = [];

  key = 'U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe';
  apiUrl = 'https://api.nytimes.com/svc/topstories/v2';

  // constructor(private apiService: ApiService) {}

  ngOnInit() {

    const fetchDataFinancial = () => {
      fetch(`${this.apiUrl}/business.json?api-key=${this.key}`)
        .then(response => response.json())
        .then(data => {
          this.listArticleFinancial = data.results
          setTimeout(() => {
            fetchDataTekno()
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    const fetchDataTekno = () => {
      fetch(`${this.apiUrl}/technology.json?api-key=${this.key}`)
        .then(response => response.json())
        .then(data => {
          this.listArticleTechnology = data.results
          setTimeout(() => {
            fetchDataFashion()
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    const fetchDataFashion = () => {
      fetch(`${this.apiUrl}/fashion.json?api-key=${this.key}`)
        .then(response => response.json())
        .then(data => {
          this.listArticleFashion = data.results
          setTimeout(() => {
            fetchDataMovie()
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    const fetchDataMovie = () => {
      fetch(`${this.apiUrl}/movies.json?api-key=${this.key}`)
        .then(response => response.json())
        .then(data => {
          this.listArticleMovies = data.results
          setTimeout(() => {
            fetchDataWorld()
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    const fetchDataWorld = () => {
      fetch(`${this.apiUrl}/world.json?api-key=${this.key}`)
        .then(response => response.json())
        .then(data => {
          this.listArticleWorld = data.results
          setTimeout(() => {
            fetchDataArts()
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    
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

    fetchDataFinancial();

    // setTimeout(() => {
    //   console.log("Interval has been cleared.");
    // }, 5000);
    // debounceTime(5000),
    // console.log('Checkkkkkkkkkkkkkkk')
    // this.apiService.getMultipleCategoriesNews(this.categories).subscribe((results: any[]) => {
    //   debounceTime(1200)
    //   this.listArticleFinancial = results[0].results;
    //   this.listArticleWorld = results[1].results;
    //   this.listArticleMovies = results[2].results;
    //   this.listArticleTechnology = results[3].results;
    //   this.listArticleArts = results[4].results;
    //   this.listArticleFashion = results[5].results;
      
    //   console.log('Check 1 Finansial', this.listArticleFinancial)
    //   console.log('Check 2 World', this.listArticleWorld)
    //   console.log('Check 3 Movies', this.listArticleMovies)
    //   console.log('Check 4 Technology', this.listArticleTechnology)
    //   console.log('Check 5 Arts', this.listArticleArts)
    //   console.log('Check 6 Fashion', this.listArticleFashion)
    // });
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
    
    // await this.apiService.getArticleFinancial()
    //   .then(response => {
    //     console.log('Fetch Financial')
    //     this.listArticleFinancial = response.results;
    //   })
    //   .catch(error => {
    //     console.error('Error fetching posts', error);
    //   });

    // await this.apiService.getArticleTechnology()
    //   .then(response => {
    //     console.log('Fetch Technology')
    //     this.listArticleTechnology = response.results;
    //   })
    //   .catch(error => {
    //     console.error('Error fetching posts', error);
    //   });

    // await this.apiService.getArticleFashion()
    //   .then(response => {
    //     console.log('Fetch Fashion')
    //     this.listArticleFashion = response.results;
    //   })
    //   .catch(error => {
    //     console.error('Error fetching posts', error);
    //   });

    // await this.apiService.getArticleArts()
    //   .then(response => {
    //     console.log('Fetch Arts')
    //     this.listArticleArts = response.results;
    //   })
    //   .catch(error => {
    //     console.error('Error fetching posts', error);
    //   });

    // await this.apiService.getArticleMovies()
    //   .then(response => {
    //     console.log('Fetch Movies')
    //     this.listArticleMovies = response.results;
    //   })
    //   .catch(error => {
    //     console.error('Error fetching posts', error);
    //   });

    // await this.apiService.getArticleWorld()
    //   .then(response => {
    //     console.log('Fetch World')
    //     this.listArticleWorld = response.results;
    //   })
    //   .catch(error => {
    //     console.error('Error fetching posts', error);
    //   });

  }
}
