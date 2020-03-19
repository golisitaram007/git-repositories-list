import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const REPO_URL = 'https://api.github.com/search/repositories';

@Injectable({
  providedIn: 'root'
})
export class GitReposService {

  constructor(private http: HttpClient) { }

  searchRepositories({ search, page }): Observable<any> {
    return this.getRepos(search, page);
  }

  private getRepos(search, page = 1): Observable<any> {
    const params = new HttpParams().append('q', search).append('page', page.toString());
    return this.http.get(REPO_URL, { params });
  }
}
