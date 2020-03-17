import { Repo } from './../../../models/gitRepo.model';
import { LoginState } from './../../../store/reducers/login.reducer';
import { Search, SelectRepo, ReposLoading } from './../../../store/actions/repo.actions';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as fromStore from 'src/app/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  searchTerm$: Subject<string> = new Subject<string>();
  repos$: Observable<Repo[]>;
  totalCount$: Observable<string>;
  loading$: Observable<boolean>;

  totalRepos: number;

  constructor(
    private router: Router,
    private store: Store<LoginState>
  ) {
    this.searchTerm$.pipe(
      filter(term => term ? true : false),
      debounceTime(500),
      distinctUntilChanged(),
      tap(_ => this.store.dispatch(new ReposLoading(true)))
    ).subscribe(searchTerm => this.store.dispatch(new Search(searchTerm)));
  }

  ngOnInit() {
      this.repos$ = this.store.select<any>(fromStore.getRepos);
      this.totalCount$ = this.store.select<any>(fromStore.getTotalCount);
      this.loading$ = this.store.select<any>(fromStore.isReposLoading);
  }

  showDetails(item: Repo): void {
    this.store.dispatch(new SelectRepo(item))
    this.router.navigate(['repo-details']);
  }

  onScrollDown(ev) {
    console.log('scrolled!!...........', ev);
  }

}
