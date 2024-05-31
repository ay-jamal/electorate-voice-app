import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private appCofig:any;

  constructor(private http: HttpClient){}

  LoadConfigrations(){
    return this.http.get("assets/config.json")
    .toPromise()
    .then(
        res=>{
            this.appCofig = res;
        }
    );
}

  getAPILink() {
    return this.appCofig.API_IP;
  }

  getImgPath() {
    return this.appCofig?.FilePath;
  }

  getSystemName() {
    return this.appCofig.SystemName;
  }

  getCompany() {
    return this.appCofig.Company;
  }

  removeNullProperties(object:any){

    const newObject = {...object};

    for (const key in newObject) {
      if (Object.prototype.hasOwnProperty.call(newObject, key)) {
        const element = newObject[key];
        if(element === null || element === undefined || element === "null" || element === "" || element == "0"){
          delete newObject[key]
        }
      }
    }
    return newObject;
  }

}
