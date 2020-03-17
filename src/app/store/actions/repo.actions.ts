import { Repo } from './../../models/gitRepo.model';
import { Action } from '@ngrx/store';

export enum RepoActionTypes {
    SEARCH = '[REPO PAGE] On Search',
    SET_REPOS = '[REPO PAGE] Set Repos',
    UPDATE_COUNT = '[REPO PAGE] Update Repo Count',
    SELECTED_REPO = '[REPO PAGE] Selected Repo',
    REPOS_LOADING = '[REPO PAGE] Repos Loading'
}

export class Search implements Action {
    readonly type = RepoActionTypes.SEARCH;
    constructor(public payload: string) { }
}

export class SetRepos implements Action {
    readonly type = RepoActionTypes.SET_REPOS;
    constructor(public payload: Repo[]) { }
}

export class UpdateCount implements Action {
    readonly type = RepoActionTypes.UPDATE_COUNT;
    constructor(public payload: number) { }
}

export class SelectRepo implements Action {
    readonly type = RepoActionTypes.SELECTED_REPO;
    constructor(public payload: Repo) { }
}

export class ReposLoading implements Action {
    readonly type = RepoActionTypes.REPOS_LOADING;
    constructor(public payload: boolean) { }
}

export type RepoActions = Search | SetRepos | UpdateCount | SelectRepo | ReposLoading;