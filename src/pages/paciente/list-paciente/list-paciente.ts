import { Component } from '@angular/core';
import { ToastController, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TurnosApi } from '../../../shared/turnos-api';

/**
 * Generated class for the ListPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-paciente',
  templateUrl: 'list-paciente.html',
})
export class ListPacientePage {
  private pacientes: any[];
  constructor(private toastCtrl: ToastController, private turnosApi: TurnosApi, private loadingController: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.turnosApi.getPacientes().subscribe(data => {        
        this.pacientes = data.pacientes;                
        loader.dismiss();
      });
    });
  }

  borrarPaciente($event, paciente) {   
    let index = this.pacientes.indexOf(paciente);      
    this.turnosApi
        .borrarPaciente(paciente._links.self.href)
        .subscribe(
          result => {
            this.presentToast("Paciente eliminado");
            if(index > -1){
              this.pacientes.splice(index, 1);
           }   
          },
          error => this.presentToast("Hubo un error y no se pudo completar el borrado")      
        );        
  }

  presentToast(resultMessage) {
    console.log(resultMessage);
    let toast = this.toastCtrl.create({
      message: resultMessage,
      duration: 3000
    });
    toast.present();
  }

}
