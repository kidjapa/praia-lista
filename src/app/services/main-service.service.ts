import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private _api_url;

  constructor(private _http: HttpClient) {
    this._api_url = environment.api_url;
  }

  static getArrayContent(data: any) {
    if (!data || typeof data === typeof undefined) {
      return [];
    }
    return (data.content.length >= 0 && !Array.isArray(data.content.results)) ? [data.content.results] : data.content.results;
  }

  getApiUrl() {
    return this._api_url;
  }

  getHeaders(): { headers: HttpHeaders } {
    const _headers = new HttpHeaders({
      "Accept": "application/json"
    });

    return { headers: _headers };
  }

  /**
   * GET request
   * @param path: Path of endpoint
   */
  get(path): Observable<any> {
    const url = this.getApiUrl() + path;
    return this._http.get(url, this.getHeaders()); // pipe(map(res => res.json()));
  }

  /**
   * POST request
   * @param path: Path of endpoint
   * @param params: JSON object relative to endpoint
   */
  post(path: string, params: Object): Observable<any> {
    const url = this.getApiUrl() + path;
    return this._http.post(url, params, this.getHeaders()); // .pipe(map(res => res.json()));
  }

  /**
   * PUT request
   * @param path: Path of endpoint
   * @param params: JSON object relative to endpoint
   */
  put(path: string, params: Object): Observable<any> {
    const url = this.getApiUrl() + path;
    return this._http.put(url, params, this.getHeaders()); // .pipe(map(res => res.json()));
  }

  /**
   * DELETE request
   * @param path: Path of endpoint
   */
  delete(path: string): Observable<any> {
    const url = this.getApiUrl() + path;
    return this._http.delete(url, this.getHeaders());
  }

}

