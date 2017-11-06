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
        console.log(this.baseUrl);
        return this.http.get(`${this.baseUrl}/turnoes`)
                .map((response: Response) => {
                    console.log(response.json());
                    return response.json()._embedded;
                })                        
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