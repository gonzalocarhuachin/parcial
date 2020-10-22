import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from '../entities/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Curso[];

  constructor(private http: HttpClient) { }

  cursosSelect(): Observable<Curso[]>{
    const ruta = "http://localhost/servicioparcial/cursos.php";
    return this.http.post<Curso[]>(ruta,null).pipe(
      map((res) => {
        this.cursos = JSON.parse(JSON.stringify(res));
        return this.cursos;
      })
    )
  }
}
