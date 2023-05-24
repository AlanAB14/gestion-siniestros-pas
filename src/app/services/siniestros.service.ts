import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rama, SiniestroRes } from '../core/interfaces/siniestro.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiniestrosService {

  private _url = `http://localhost:3000`;

  constructor( private http: HttpClient ) { }

  getSiniestros(): Observable<SiniestroRes[]> {
    return this.http.get<SiniestroRes[]>( `${ this._url }/siniestros` )
  }

  getRama(): Observable<Rama[]> {
    return this.http.get<Rama[]>( `${ this._url }/rama` )
  }
}
