import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',  
})
export class GifsService {
  constructor(private http: HttpClient) {}

  private key = 'WoC7cbhrXRW8EgyhZ6WE5peR8UWBbTCs';
  private limite = '24';
  private url = 'https://api.giphy.com/v1/gifs/search';

  getGifs(d) {
    let url = `${this.url}?api_key=${this.key}&q=${d}&limit=${this.limite}&offset=25&rating=r&lang=en`;

    return this.http.get(url);
  }
}
