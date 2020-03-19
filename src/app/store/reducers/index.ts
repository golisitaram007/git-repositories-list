import * as login from './login.reducer';
import * as repo from './repo.reducer';

import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {
    login: login.LoginState;
    repo: repo.RepoState;
}

export const appReducer: ActionReducerMap<AppState> = {
    login: login.loginReducer,
    repo: repo.repoReducer
};

export const selectLogin = (state: AppState) => state.login;
export const selectRepo = (state: AppState) => state.repo;

export const getLoginEmail = createSelector(selectLogin, (state: login.LoginState) => state.email);
export const getRepos = createSelector(selectRepo, (state: repo.RepoState) => state.repos);
export const getTotalCount = createSelector(selectRepo, (state: repo.RepoState) => state.totalRepoCount);
export const getSelectedRepo = createSelector(selectRepo, (state: repo.RepoState) => state.selectedRepo);
export const isReposLoading = createSelector(selectRepo, (state: repo.RepoState) => state.loading);
export const isReposLoaded = createSelector(selectRepo, (state: repo.RepoState) => state.loaded);

export const getEntity = createSelector(selectRepo, (state: repo.RepoState) => state.dataEntity);

export const getSearch = createSelector(getEntity, (state: repo.Entity) => state.search);
export const getPage = createSelector(getEntity, (state: repo.Entity) => state.page);
