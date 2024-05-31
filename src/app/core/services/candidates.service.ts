import { Injectable } from '@angular/core';
import { CommonLogicService } from './global/common-logic.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(
    private commonLogic: CommonLogicService,
  ) { }

  getCandidates(filterObject) {
    const endPoint = `/api/candidates`;
    return this.commonLogic.getEndPoints(endPoint, filterObject);
  }

}
