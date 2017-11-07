import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPacientePage } from '../paciente/add-paciente/add-paciente';
import { ListPacientePage } from '../paciente/list-paciente/list-paciente';

/**
 * Generated class for the PacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html',
})
export class PacientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacientePage');
  }

  addPerson() {
    this.navCtrl.push(AddPacientePage);
  }

  listaDePacientes() {
    this.navCtrl.push(ListPacientePage);
  }

}
