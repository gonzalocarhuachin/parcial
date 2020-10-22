import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/entities/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listaAlumnos: Alumno[];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.leerAlumnos();
  }

  leerAlumnos():void{
    this.alumnosService.alumnosSelect().subscribe(
      (res: Alumno[]) => {
        this.listaAlumnos = res;
      }
    )
  }

}
