import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { 
    this.activateRoute.params.subscribe( parametros =>  {
      console.log('Ruta padre');
      console.log(parametros);
    })
  }

  ngOnInit(): void {
  }

}
