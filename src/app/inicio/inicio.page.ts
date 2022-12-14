import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  handlerMessage='';
  roleMessage='';

  constructor(private menuController: MenuController, private alertController: AlertController) { }



  ngOnInit() {

  }



  mostrarMenu(){
    this.menuController.open('first');
  }
  logout() { 
    localStorage.removeItem('ingresado');
  }



  async mensaje(){
    if(localStorage.getItem('ingresado')=='true')
    {

      const alert = await this.alertController.create({
        header: 'Bienvenido a TeLLevoApp ' + localStorage.getItem('nombre'),
        buttons: [
          {
            text: 'Gracias',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'disfrute nuestro servicio';
            },
          },
        ],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }
}}
