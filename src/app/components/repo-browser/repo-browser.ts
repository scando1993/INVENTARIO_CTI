import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {InventarioApi} from "../../services/inventario_api";

@Component({
  selector: 'repo-browser',
  templateUrl: 'app/components/repo-browser/repo-browser.html',
  styleUrls: ['app/components/repo-browser/repo-browser.css'],
  providers: [ InventarioApi ],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
@RouteConfig([
  {path: '/:org',       component: RepoList,   name: 'RepoList'},
  {path: '/:org/:name', component: RepoDetail, name: 'RepoDetail' },
])
export class RepoBrowser {

  constructor(private router: Router, private inventarioApi: InventarioApi) {}

  searchForOrg(orgName: string) {
    this.inventarioApi.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['RepoList', {org: orgName}]);
      });
  }

}
