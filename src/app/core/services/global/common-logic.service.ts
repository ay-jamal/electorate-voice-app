import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../../../config/config.service';
import { Observable } from 'rxjs';

class EndPointOptions {
  public endPoint: string = '';
  public filterObject?: any;
  public apiMethod: 'post' | 'put' | 'patch' = 'patch';
  public postObject?: any;
  public asyncPipe?: boolean;
  public pagination?: boolean
}

@Injectable({
  providedIn: 'root'
})


export class CommonLogicService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }


  getEndPoints(endPoint: string, filterObject: any = null): Observable<any> {
    filterObject = this.config.removeNullProperties(filterObject);
    return this.http.get(`${this.config.getAPILink() + endPoint}`, { params: { ...filterObject } })
  }

  addAndEditEndPoints(endPoint: string, postObject, apiMethod: 'post' | 'put' | 'patch', options = null, removeNull = true): Observable<any> {
    if (removeNull) {
      postObject = this.config.removeNullProperties(postObject);
    }
    if (options) {//if there is option like in print requests
      return this.http[apiMethod](`${this.config.getAPILink() + endPoint}`, { ...postObject }, options)
    }
    else {
      console.log(postObject);

      return this.http[apiMethod](`${this.config.getAPILink() + endPoint}`, { ...postObject })
    }
  }

  addAndEditEndPointsWithFormData(endPoint: string, postObject, apiMethod: 'post' | 'put' | 'patch', options = null): Observable<any> {
    postObject = this.config.removeNullProperties(postObject);
    const formData = new FormData();
    for (const key in postObject) {
      if (postObject.hasOwnProperty(key)) {
        formData.append(key, postObject[key]);
      }
    }
    if (options) {//if there is option like in print requests
      return this.http[apiMethod](`${this.config.getAPILink() + endPoint}`, formData, options)
    }
    else {
      return this.http[apiMethod](`${this.config.getAPILink() + endPoint}`, formData, {})
    }
  }

  deleteEndPoints(endPoint: string): Observable<any> {

    return this.http.delete(`${this.config.getAPILink() + endPoint}`)

  }

  deleteEndPointsWithCustomBody(endPoint: string, body: any): Observable<any> {

    return this.http.delete(`${this.config.getAPILink() + endPoint}`, { body: { ...body } })

  }

  multipleDeleteEndPoints(endPoint: string, ids): Observable<any> {

    return this.http.delete(`${this.config.getAPILink() + endPoint}`, { body: { ids } })

  }

}
