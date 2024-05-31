import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  encryptData(data: any) {
    return btoa(unescape(encodeURIComponent(JSON.stringify(data))))
  }

  decryptData(data: any) {
    return JSON.parse(decodeURIComponent(escape(window.atob(data))))
  }
}
