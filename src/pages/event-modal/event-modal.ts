import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import {TurnosApi} from "../../shared/turnos-api";

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), repite: false };
  minDate = new Date().toISOString();
  queryText: string;
  pacientes: any[];
  filteredPacientes: any[];
  selectedPaciente: any;

  constructor(private turnosApi: TurnosApi, private loadingController: LoadingController, public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.event);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.turnosApi.getPacientes().subscribe(data => {
        this.pacientes = data.pacientes;
        this.filteredPacientes = this.pacientes;
        loader.dismiss();
      });
    });
  }

  updatePacientes() {
    this.filteredPacientes = this.pacientes;
    let queryTextLower = this.queryText.toLowerCase();
    this.filteredPacientes = this.pacientes.filter((paciente) => {
      return paciente.nombre.toLowerCase().indexOf(queryTextLower) > -1 || paciente.apellido.toLowerCase().indexOf(queryTextLower) > -1;
    });
    console.log(this.filteredPacientes);
  }

  selectPaciente(paciente) {
    this.selectedPaciente = paciente;
  }
}
