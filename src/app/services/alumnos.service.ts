import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../entities/alumno';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: Alumno[];

  constructor(private http: HttpClient) { }

  alumnosSelect(): Observable<Alumno[]>{
    const ruta = "http://localhost/servicioparcial/alumnos.php";
    return this.http.post<Alumno[]>(ruta,null).pipe(
      map((res) => {
        this.alumnos = JSON.parse(JSON.stringify(res));
        return this.alumnos;
      })
    )
  }
}
