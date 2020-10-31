import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { replaceSpecialSymbols } from 'src/utils/symbol-decoder';

type GroupsTO = {
  data: Array<string>;
};

@Injectable()
export class GroupsService {
  constructor(private http: HttpClient) {}

  getGroups(): Observable<Array<string>> {
    // TODO: it's better to validate data, otherwise
    // there may be runtime errors if the data structure is changed
    return this.http
      .get<GroupsTO>('/assets/data/groups.json')
      .pipe(map((groupsTO) => groupsTO.data.map(replaceSpecialSymbols)));
  }
}
