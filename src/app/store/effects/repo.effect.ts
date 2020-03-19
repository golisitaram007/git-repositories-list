import { GitRepos } from './../../models/gitRepo.model';
import { GitReposService } from './../../services/git-repos.service';
import { switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { RepoActionTypes, EntityChange, SetRepos, UpdateCount, ReposLoading } from './../actions/repo.actions';

@Injectable()
export class RepoEffects {

    constructor(
        private actions$: Actions, 
        private gitRepoService: GitReposService
    ) { }

    @Effect()
    getRepos$ = this.actions$.pipe(
        ofType(RepoActionTypes.ENTITY_CHANGE),
        tap(_ => new ReposLoading(true)),
        switchMap((actions: EntityChange) => this.gitRepoService.searchRepositories(actions.payload)),
        switchMap((response: GitRepos) => [
                new SetRepos(response.items),
                new UpdateCount(response.total_count),
                new ReposLoading(false)
            ]
        )
    );

}

