import { Component, OnInit, ViewChild  } from '@angular/core';
import { ServicedatosService, Datos } from '../../services/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private storageService: ServicedatosService, 
    private plt: Platform, private toastController: ToastController,
    private alertController: AlertController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }
    //get
    loadDatos(){
      this.storageService.getDatos().then(datos=>{
        this.datos=datos;
      });
    }

    async Mensaje() {
      const alert = await this.alertController.create({
        header: 'Exito',
        message: 'Reservado exitosamente',
        buttons: ['OK'],
      });
  
      await alert.present();
    }

}
