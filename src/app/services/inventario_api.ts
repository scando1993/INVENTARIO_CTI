/**
 * Created by kevincando on 6/2/16.
 */

import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InventarioApi {
  constructor(private http: Http) {}

  getOrg(org: string) {
    return this.makeRequest(`kits/${org}`);
  }

  getReposForOrg(org: string) {
    return this.makeRequest(`kits/${org}/items`);
  }

  getRepoForOrg(org: string, repo: string) {
    return this.makeRequest(`kits/${org}/${repo}`);
  }

  private makeRequest(path: string) {
     let params = new URLSearchParams();
    // params.set('per_page', '100');

    let url = `http://192.168.0.9:8080/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
