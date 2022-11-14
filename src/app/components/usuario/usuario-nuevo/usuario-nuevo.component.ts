import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.parent?.params.subscribe(parametros => {
      console.log('Hija');
      console.log(parametros);
    })
  }

  ngOnInit(): void {
  }

}
