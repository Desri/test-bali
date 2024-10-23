import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Arts&api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe';

  constructor(private http: HttpClient) { }

  // Menggunakan Promise
  getArticleArts(): Promise<any> {
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Arts&api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise(); // Mengembalikan Promise
  }
  getArticleBusiness(): Promise<any> {
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Business&api-key=U6A0LAGE8qtj0uoX3nAMun2MU2sOegIe').toPromise(); // Mengembalikan Promise
  }
  getArticleEditorial(): Promise<any> {
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Editorial&api-key=9yXQnz1crcXIAwQUjsYR0tGhyaLIgt5c').toPromise(); // Mengembalikan Promise
  }
  getArticleFinancial(): Promise<any> {
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Financial&api-key=9yXQnz1crcXIAwQUjsYR0tGhyaLIgt5c').toPromise(); // Mengembalikan Promise
  }
  getArticleTechnology(): Promise<any> {
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Technology&api-key=9yXQnz1crcXIAwQUjsYR0tGhyaLIgt5c').toPromise(); // Mengembalikan Promise
  }
  getArticleFashion(): Promise<any> {
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Fashion&api-key=9yXQnz1crcXIAwQUjsYR0tGhyaLIgt5c').toPromise(); // Mengembalikan Promise
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
