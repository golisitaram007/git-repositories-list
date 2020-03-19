import { Repo } from './../../models/gitRepo.model';
import { Action } from '@ngrx/store';

export enum RepoActionTypes {
    ENTITY_CHANGE = '[REPO PAGE] On Data Entity Change',
    SET_REPOS = '[REPO PAGE] Set Repos',
    UPDATE_COUNT = '[REPO PAGE] Update Repo Count',
    SELECTED_REPO = '[REPO PAGE] Selected Repo',
    REPOS_LOADING = '[REPO PAGE] Repos Loading',
    LAZY_LOAD_REPOS = '[REPO PAGE] Repos Lazy Loading',
}

export class EntityChange implements Action {
    readonly type = RepoActionTypes.ENTITY_CHANGE;
    constructor(public payload: { search: string, page: number}) { }
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

export class UpdateReposByLazyLoad implements Action {
    readonly type = RepoActionTypes.LAZY_LOAD_REPOS;
    constructor(public payload: Repo[]) { }
}

export type RepoActions = EntityChange
    | SetRepos
    | UpdateCount
    | SelectRepo
    | ReposLoading
    | UpdateReposByLazyLoad;