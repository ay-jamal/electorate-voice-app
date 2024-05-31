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
    const endPoint = `/api/polls/results`
 return  this.commonLogic.getEndPoints(endPoint)
  }

}
