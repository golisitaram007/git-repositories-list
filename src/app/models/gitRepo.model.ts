export interface GitRepos {
    total_count: number;
    items: Repo[];
}

export interface Repo {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    forks: number;
    watchers: number;
    open_issues: number;
}