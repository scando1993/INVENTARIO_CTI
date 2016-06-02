import {Component} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {InventarioApi} from '../../services/inventario_api';

@Component({
  selector: 'repo-detail',
  templateUrl: 'app/components/repo-detail/repo-detail.html',
  styleUrls: ['app/components/repo-detail/repo-detail.css'],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoDetail {
  repoDetails = {};
  constructor(public routeParams: RouteParams, public inventarioApi: InventarioApi) {}

  ngOnInit() {
    this.inventarioApi.getRepoForOrg(this.routeParams.get('kit'), this.routeParams.get('item'))
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
      });

  }

}
