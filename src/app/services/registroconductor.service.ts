import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage';

export interface Usuario1{
  nomUsuario: string; 
  correoUsuario: string; 
  passUsuario: string;
  repassUsuario: string;
}

const USERS_KEY = 'my-conductores';

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceconductorService {

  private _storage: Storage
  newUsuario: Usuario1 = <Usuario1>{};

  constructor(private storage: Storage) {
    this.init1();
   }

   async init1(){
    const storage = await this.storage.create();
    this._storage= storage;
  }


  async addDatos1(dato: Usuario1):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos : Usuario1[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(USERS_KEY, datos);
       }else {
         return this.storage.set(USERS_KEY, [dato]);
       }
 
     })
  }

  async getUsuarios1(): Promise<Usuario1[]>{
    return this.storage.get(USERS_KEY);
  }




}
