import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TurnosApi {
    private baseUrl = "https://turnos-be.herokuapp.com";
    
    constructor(private http: Http) { }

    getTurnos(): Observable<any> {        
        return this.http.get(`${this.baseUrl}/turnoes`)
                .map((response: Response) => {                    
                    return response.json()._embedded
                })                        
                .catch(this.handleError);
    }

    savePaciente(paciente): Observable<any> {        
        return this.http.post(`${this.baseUrl}/pacientes`, paciente).catch(this.handleError);
    }

    getPacientes(): Observable<any> {        
        return this.http.get(`${this.baseUrl}/pacientes`)
                .map((response: Response) => {
                    return response.json()._embedded;   
                })
                .catch(this.handleError);
    }

    borrarPaciente(pacienteUrl): Observable<any> {
        return this.http.delete(pacienteUrl)
                .map((response: Response) => {
                    return response.json();   
                })
                .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

   /*  getTournamentData(tourneyId) : Observable<any> {
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
            .map((response: Response) => {
                this.currentTourney = response.json();
                return this.currentTourney;
            });
    }

    getCurrentTourney(){
        return this.currentTourney;
    }
     */
}