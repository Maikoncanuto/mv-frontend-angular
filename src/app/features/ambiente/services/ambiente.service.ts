import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import { Response } from 'src/app/shared/models/response.model';
import { Ambiente } from 'src/app/shared/models/ambiente.model';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Response> {
    return this.http.get<Response>(`${environment.api}/ambientes`);
  }

  public save(ambiente: Ambiente): Observable<Response> {
    return this.http.post<Response>(`${environment.api}/ambientes`, ambiente);
  }

  public update(ambiente: Ambiente): Observable<Response> {
    return this.http.put<Response>(`${environment.api}/ambientes/${ambiente.id}`, ambiente);
  }

  public delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${environment.api}/ambientes/${id}`);
  }

  public get(id: number): Observable<Response> {
    return this.http.get<Response>(`${environment.api}/ambientes/${id}`);
  }
}
