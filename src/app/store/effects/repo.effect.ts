import { GitRepos } from './../../models/gitRepo.model';
import { GitReposService } from 'src/app/services/git-repos.service';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { RepoActionTypes, Search, SetRepos, UpdateCount, ReposLoading } from './../actions/repo.actions';

@Injectable()
export class RepoEffects {

    constructor(private actions$: Actions, private gitRepoService: GitReposService) { }

    @Effect()
    getRepos$ = this.actions$.pipe(
        ofType(RepoActionTypes.SEARCH),
        switchMap((actions: Search) => this.gitRepoService.searchRepositories(actions.payload)),
        switchMap((response: GitRepos) => [
                new SetRepos(response.items),
                new UpdateCount(response.total_count),
                new ReposLoading(false)
            ]
        )
    );

}

