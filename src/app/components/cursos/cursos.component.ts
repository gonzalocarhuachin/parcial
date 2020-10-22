import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/entities/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  listaCursos: Curso[];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.leerCursos();
  }

  leerCursos():void{
    this.cursosService.cursosSelect().subscribe(
      (res: Curso[]) => {
        this.listaCursos = res;
      }
    )
  }

}
