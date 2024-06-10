import { Injectable } from '@angular/core';
import { CommonLogicService } from './global/common-logic.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private commonLogic: CommonLogicService,
  ) { }

  getUsers() {
    const endPoint = `/api/users`
    return this.commonLogic.getEndPoints(endPoint)
  }

  getUser(login: string) {
    const endPoint = `/api/admin/users/${login}`
    return this.commonLogic.getEndPoints(endPoint)
  }

  addUsers(userObject) {
    const endPoint = `/api/admin/users`
    return this.commonLogic.addAndEditEndPoints(endPoint, userObject, "post")
  }

  editUsers(userObject) {
    const endPoint = `/api/admin/users`
    return this.commonLogic.addAndEditEndPoints(endPoint, userObject, "put")
  }

  deleteUsers(login) {
    const endPoint = `/api/admin/users/${login}`
    return this.commonLogic.deleteEndPoints(endPoint)
  }

}
