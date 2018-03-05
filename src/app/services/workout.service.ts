import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
    http: any;
    apiKey: string;
    workoutsUrl: String;

    constructor(http:Http){
        this.http = http;
        this.apiKey = 'X5s0aiXu_heBS0me48AIF4DiQ2Rx36Cn';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkouts_dev/collections/workouts'
    }

    getWorkouts() {
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    addWorkout(workout){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers: headers})
            .map(res => res.json());
    }

    deleteWorkout(workoutId){
        return this.http.delete(this.workoutsUrl+'/'+workoutId+'?apiKey='+this.apiKey)
          .map(res => res.json());
    }
}