import {Component} from '@angular/core';
import {InventarioApi} from '../../services/inventario_api';
import {Observable} from 'rxjs/Observable';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'repo-list',
  templateUrl: 'app/components/repo-list/repo-list.html',
  styleUrls: ['app/components/repo-list/repo-list.css'],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class RepoList {
  repos: Observable<any>;
  constructor(public inventarioApi: InventarioApi, public params: RouteParams) {}

  ngOnInit() {
    this.repos = this.inventarioApi.getReposForOrg(this.params.get('kit'));
  }
}
