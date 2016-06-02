import {Component} from '../../../../node_modules/@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '../../../../node_modules/@angular/router-deprecated';

import {RepoList} from '../repo-list/repo-list';
import {RepoDetail} from '../repo-detail/repo-detail';
import {Github} from '../../services/github';

@Component({
  selector: 'repo-browser',
  templateUrl: 'app/components/repo-browser/repo-browser.html',
  styleUrls: ['app/components/repo-browser/repo-browser.css'],
  providers: [ Github ],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
@RouteConfig([
  {path: '/:org',       component: RepoList,   name: 'RepoList'},
  {path: '/:org/:name', component: RepoDetail, name: 'RepoDetail' },
])
export class RepoBrowser {

  constructor(private router: Router, private github: Github) {}

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['RepoList', {org: orgName}]);
      });
  }

}
