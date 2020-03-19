import { Repo } from './../../../models/gitRepo.model';
import { LoginState } from './../../../store/reducers/login.reducer';
import { EntityChange, SelectRepo, ReposLoading } from './../../../store/actions/repo.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap, take, takeUntil, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as fromStore from './../../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit, OnDestroy {

  searchTerm$: Subject<string> = new Subject<string>();
  repos$: Observable<Repo[]>;
  totalCount$: Observable<string>;
  loading$: Observable<boolean>;
  currentPage$: Observable<number>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private store: Store<LoginState>
  ) {
    this.searchTerm$.pipe(
      takeUntil(this.destroy$),
      filter((search: string) => search ? true : false),
      debounceTime(500),
      distinctUntilChanged(),
      tap(_ => this.store.dispatch(new ReposLoading(true))),
    ).subscribe(search => {
      this.store.dispatch(new EntityChange({search, page: 1}));
    });
  }

  ngOnInit() {
      this.repos$ = this.store.select<any>(fromStore.getRepos);
      this.totalCount$ = this.store.select<any>(fromStore.getTotalCount);
      this.loading$ = this.store.select<any>(fromStore.isReposLoading);
  }

  showDetails(item: Repo): void {
    this.store.dispatch(new SelectRepo(item));
    this.router.navigate(['repo-details']);
  }

  onScroll() {
    this.store.dispatch(new ReposLoading(true));
    this.store.select<any>(fromStore.getPage).pipe(
      take(1),
      takeUntil(this.destroy$),
      withLatestFrom(this.store.select<any>(fromStore.getSearch))
    ).subscribe(([page, search]) => {
      this.store.dispatch(new EntityChange({search, page: page + 1}));
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
