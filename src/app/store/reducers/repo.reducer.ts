import { Repo } from './../../models/gitRepo.model';
import { RepoActions, RepoActionTypes, ReposLoading } from './../actions/repo.actions';

export interface RepoState {
    search: string;
    repos: Repo[];
    totalRepoCount: number;
    selectedRepo?: Repo;
    loading?: boolean;
    loaded?: boolean;
}

export const initialRepoState: RepoState = {
    search: '',
    repos: [],
    totalRepoCount: 0,
}

export function repoReducer(state = initialRepoState, action: RepoActions): RepoState {
    switch (action.type) {
        case RepoActionTypes.SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case RepoActionTypes.SET_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        case RepoActionTypes.UPDATE_COUNT:
            return {
                ...state,
                totalRepoCount: action.payload
            }
        case RepoActionTypes.SELECTED_REPO:
            return {
                ...state,
                selectedRepo: action.payload
            }
        case RepoActionTypes.REPOS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}