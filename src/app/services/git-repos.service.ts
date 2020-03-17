import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// import { debounceTime, distinctUntilChanged, switchMap, find, map, filter } from 'rxjs/operators';

const REPO_URL = 'https://api.github.com/search/repositories';

@Injectable({
  providedIn: 'root'
})
export class GitReposService {

  constructor(private http: HttpClient) { }

  // search(searchTerm: Observable<string>) {
  //   return searchTerm.pipe(
  //     filter(term => term ? true: false),
  //     debounceTime(500),
  //     distinctUntilChanged(),
  //     switchMap(term => this.getRepos(term))
  //   )
  // }

  searchRepositories(search: string): Observable<any> {
    return this.getRepos(search);
  }

  private getRepos(search): Observable<any> {
    const params = new HttpParams().append('q', search);
    return this.http.get(REPO_URL, { params });
  }
}
