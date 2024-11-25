import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DetalleCandidato} from '../models/detalleCandidato.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleCandidatoService {
  private apiUrl='http://localhost:8080/candidatos';
  constructor(private http: HttpClient) { }
  obtenerCandidatosAprobados(): Observable<DetalleCandidato[]> {
    return this.http.get<DetalleCandidato[]>(`${this.apiUrl}/aprobados`);
  }
  obtenerCandidatosDesaprobados(): Observable<DetalleCandidato[]> {
    return this.http.get<DetalleCandidato[]>(`${this.apiUrl}/desaprobados`)
  }
}
