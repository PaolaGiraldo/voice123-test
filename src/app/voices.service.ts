import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VoicesService {

  constructor(
    private http: HttpClient
  ) { }


  getSearchVoices(keyWords: any): any {
    const apiUrl = `https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=${keyWords}`;
    const req = this.http.get(apiUrl);
    return req;
  }
}
