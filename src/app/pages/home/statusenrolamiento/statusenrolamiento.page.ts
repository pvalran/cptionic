import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statusenrolamiento',
  templateUrl: './statusenrolamiento.page.html',
  styleUrls: ['./statusenrolamiento.page.scss'],
})
export class StatusenrolamientoPage implements OnInit {

  menuEnrolamientos = [
    {
      id: 1,
      status: 'En revision',
      nombre: 'Jose Alfredo Jimenez Moreno',
      tipo: 'Foviste Tradicional Indevidual',
      css: 'circuloRevision'
    },
    {
      id: 2,
      status: 'Aprobado',
      nombre: 'Jose Alfredo Jimenez Moreno',
      tipo: 'Foviste Tradicional Indevidual',
      css: 'circuloAprobado'
    },
    {
      id: 3,
      status: 'Declinado',
      nombre: 'Jose Alfredo Jimenez Moreno',
      tipo: 'Foviste Tradicional Indevidual',
      css: 'circuloDeclinado'
    },
    {
      id: 4,
      status: 'En revision',
      nombre: 'Jose Alfredo Jimenez Moreno',
      tipo: 'Foviste Tradicional Indevidual',
      css: 'circuloRevision'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
