import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.nytimes.com/svc/topstories/v2/';

  constructor(private http: HttpClient) { }

  // Menggunakan Promise
  getArticleArts(): Promise<any> {
    return this.http.get(this.apiUrl + 'arts.json?api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise(); // Mengembalikan Promise
  }
  // getArticleMovies(): Promise<any> {
  //   return this.http.get(this.apiUrl + 'movies.json?api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise(); // Mengembalikan Promise
  // }
  // getArticleFinancial(): Promise<any> {
  //   return this.http.get(this.apiUrl + 'business.json?api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise(); // Mengembalikan Promise
  // }
  // getArticleTechnology(): Promise<any> {
  //   return this.http.get(this.apiUrl + 'technology.json?api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise(); // Mengembalikan Promise
  // }
  getArticleWorld(): Promise<any> {
    return this.http.get(this.apiUrl + 'world.json?api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise(); // Mengembalikan Promise
  }
  // getArticleFashion(): Promise<any> {
  //   return this.http.get(this.apiUrl + 'fashion.json?api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise(); // Mengembalikan Promise
  // }

  // Metode untuk mendapatkan berita dari satu kategori
  getNewsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${category}.json?api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe`);
  }

  // Metode untuk mendapatkan berita dari beberapa kategori
  getMultipleCategoriesNews(categories: string[]): Observable<any[]> {
    const requests = categories.map(category => this.getNewsByCategory(category));
    return forkJoin(requests); // Menggabungkan beberapa request dalam satu call
  }

  // Menggunakan async/await
  // async getArticleFinancial(): Promise<any> {
  //   try {
  //     const response = await this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Financial&api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise();
  //     return response;
  //   } catch (error) {
  //     console.error('Error fetching posts', error);
  //     throw error;
  //   }
  // }

  // async getArticleTechnology(): Promise<any> {
  //   try {
  //     const response = await this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Technology&api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise();
  //     return response;
  //   } catch (error) {
  //     console.error('Error fetching posts', error);
  //     throw error;
  //   }
  // }

}
