import { Repo } from './../../models/gitRepo.model';
import { RepoActions, RepoActionTypes } from './../actions/repo.actions';

export interface Entity {
    search: string;
    page: number;
}
export interface RepoState {
    dataEntity: Entity;
    repos: Repo[];
    totalRepoCount: number;
    selectedRepo?: Repo;
    loading?: boolean;
    loaded?: boolean;
}

export const initialRepoState: RepoState = {
    dataEntity: {
        search: '',
        page: 1
    },
    repos: [],
    totalRepoCount: 0
}

export function repoReducer(state = initialRepoState, action: RepoActions): RepoState {
    switch (action.type) {
        case RepoActionTypes.ENTITY_CHANGE:
            return {
                ...state,
                dataEntity: action.payload
            };
        case RepoActionTypes.SET_REPOS:
            return {
                ...state,
                repos: action.payload
            };
        case RepoActionTypes.UPDATE_COUNT:
            return {
                ...state,
                totalRepoCount: action.payload
            };
        case RepoActionTypes.SELECTED_REPO:
            return {
                ...state,
                selectedRepo: action.payload
            };
        case RepoActionTypes.REPOS_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case RepoActionTypes.LAZY_LOAD_REPOS:
            return {
                ...state,
                repos: [...state.repos, ...action.payload]
            };
        default:
            return state;
    }
}