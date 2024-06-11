import { Injectable } from '@angular/core';
import { CommonLogicService } from './global/common-logic.service';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(
    private commonLogic: CommonLogicService,
  ) { }

  getPolls() {
    const endPoint = `/api/polls/`
    return this.commonLogic.getEndPoints(endPoint)
  }

  deletePolls(pollId: string) {
    const endPoint = `/api/polls/{pollId}`
    return this.commonLogic.deleteEndPoints(endPoint)
  }

}
