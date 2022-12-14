import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [


   
    
    {
      icon: 'information-circle',
      name: '¿Quienes somos?',
      redirecTo: '/card'
    },
    {
      icon: 'car',
      name: 'Lista de Vehiculos',
      redirecTo:'/logout'
    } ,

    {
      icon: 'information-circle',
      name: 'Noticias Duoc',
      redirecTo: '/noticias'

    }, 
    {
      icon: 'list',
      name: 'Registro de vehículos',
      redirecTo: '/datos'

    }, 
    {
      icon: 'book',
      name: 'Registro de viaje',
      redirecTo: '/viaje'

    }, 


    
  ];
 
  componentes1 :Componente[] = [


   
    
    {
      icon: 'information-circle',
      name: '¿Quienes somos?',
      redirecTo: '/card'
    },
    {
      icon: 'information-circle',
      name: 'Registro de vehículos',
      redirecTo: '/datos'

    }, 

    
  ];



}
