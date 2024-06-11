import { Injectable } from '@angular/core';
import { CommonLogicService } from './global/common-logic.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(
    private commonLogic: CommonLogicService,
  ) { }

  getCandidates() {
    const endPoint = `/api/candidates`;
    return this.commonLogic.getEndPoints(endPoint);
  }

  addCandidates(Candidates) {
    const endPoint = `/api/candidates`;
    return this.commonLogic.addAndEditEndPoints(endPoint, Candidates, "post");
  }
  deleteCandidates(id) {
    const endPoint = `/api/candidates/${id}`;
    return this.commonLogic.deleteEndPoints(endPoint);
  }

}
