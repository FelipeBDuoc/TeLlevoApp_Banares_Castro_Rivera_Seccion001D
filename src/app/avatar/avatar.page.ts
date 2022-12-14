import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
    //método que muestra un mensaje con botón Ok
    async Saludo() {
      const alert = await this.alertController.create({
        header: 'Saludo',
        message: 'Saludo',
        buttons: ['Saludo'],
      });
  
      await alert.present();
    }
  

}
