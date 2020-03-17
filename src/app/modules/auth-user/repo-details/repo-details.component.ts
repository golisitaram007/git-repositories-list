import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Repo } from 'src/app/models/gitRepo.model';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';
import { RepoState } from 'src/app/store/reducers/repo.reducer';


@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {

  repo$;

  constructor(
    private route: ActivatedRoute,
    private store: Store<RepoState>,
    private location: Location
  ) { }

  ngOnInit() {
    this.repo$ = this.store.select<any>(fromStore.getSelectedRepo);
  }

  goToRepo({ html_url }): void {
    window.open(html_url, '_blank');
  }

}
